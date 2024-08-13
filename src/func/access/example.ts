import { AbilityBuilder, createMongoAbility, ForbiddenError } from '@casl/ability';
import defineAbilityFor from './ability';
import { Article, Comment } from './entities';

// 읽기: private가 false경우 전부 읽기, true일 경우 id가 일치할때만, 수정: 아이디 일치, 댓글쓰기: 로그인만, 댓글수정: 아이디 일치
// update: 모든 행동이 배열로 들어간 인스턴스만 행동 가능하게 업데이트됨 (빈 배열일 시 모든 행동 불가, ex) 로그아웃일 때 읽기만 가능하도록 설정)
// 새 어빌리티 생성, 규칙 생성 및 추가
// ability.on 함수로 업데이트 전("update"), 업데이트 후("updated") 규칙 배열과 이벤트 타겟 확인 및 추가 이벤트 실행 가능
const user = { id: 1, isLoggedIn: true };
const ability = defineAbilityFor(user);
const ownArticle = new Article({ authorId: user.id, private: false });
const privateArticle = new Article({ authorId: user.id, private: true });
const anotherArticle = new Article({ authorId: 2, private: true });
const ownComment = new Comment({ authorId: user.id });
const anotherComment = new Comment({ authorId: 2 });

const unsubscribe = ability.on('update', ({ rules, target }) => {
    // console.log(rules, target);
});

ability.update([
    { action: 'read', subject: 'Article', conditions: { private: false } },
    { action: 'read', subject: 'Comment' },
]);
ability.update([...ability.rules, { action: 'delete', subject: 'Article', conditions: { authorId: user.id } }]); //이렇게 규칙 추가 가능

const ability2 = createMongoAbility(); //어빌리티 인스턴스 생성
const { can, rules } = new AbilityBuilder(createMongoAbility); //규칙 생성
can('read', 'all');

ability2.update(rules); //규칙 추가
can('update', 'Article');
ability2.update(rules.concat({ action: 'access', subject: 'Setting', conditions: { isLoggedIn: user.isLoggedIn } })); //규칙 추가

unsubscribe();

// console.log(ability2.can('read', anotherArticle));

// console.log(ability.can('update', ownArticle));

// 모두 공개, 비공개 + 공유자만 가능, 비공개 or 비공유자
// const user = { id: 1, isLoggedIn: true };
// const ability = defineAbilityFor(user);
// const article1 = new Article({ published: true, sharedWith: false });
// const article2 = new Article({ published: false, sharedWith: user.id });
// const article3 = new Article({ published: false, sharedWith: 2 });

// // 읽기: 모두 가능, 제목/내용 수정:아이디 일치만, 등록: 관리자만
// const admin = { id: 1, isLoggedIn: true, admin: true };
// const user = { id: 2, isLoggedIn: true, admin: false };
// const ability = defineAbilityFor(user);
// const ownArticle = new Article({ authorId: user.id });
// const foreignArticle = new Article({ authorId: 3 });

// 읽기: id가 일치할 시 가능, private가 true면 불가, 불가 시 에러 메세지 출력
// const user = { id: 1, isLoggedIn: true, admin: false };
// const ability = defineAbilityFor(user);

// try {
//     ForbiddenError.from(ability).throwUnlessCan('read', { private: true, authorId: user.id });
// } catch (error) {
//     if (error instanceof ForbiddenError) {
//         console.log(error.message); // 비공개 게시물은 열람할 수 없습니다.
//     }

//     throw error;
// }

// function createSetState<T>(initialValue: T) {
//     let state = initialValue;

//     const setState = (updater: T | ((state: T) => T)) => {
//         if (typeof updater === 'function') {
//             state = (updater as (state: T) => T)(state);
//         } else {
//             state = updater;
//         }
//         return state;
//     };

//     return setState;
// }

// function createSetState<T>(initialValue: T[]) {
//     let state = initialValue;

//     // updater는 각 요소와 그 인덱스를 받아 새로운 요소를 반환하는 함수
//     const setState = (updater: (element: T, index: number) => T) => {
//         state = state.map((element, index) => updater(element, index));
//         return state;
//     };

//     return setState;
// }

// // 사용 예시
// const setState = createSetState([1, 2, 3]);

// console.log(setState((state) => state + 10));

//알고리즘 - 배열/객체
//객체는 접근, 입력, 삭제는 상수, 탐색은 n의 시간복잡도를 가짐
//객체는 정렬되어 있지 않고 key와 value를 가짐
//Object.keys, values, entries는 n의 시간복잡도
//hasOwnProperty는 찾고자 하는 key의 존재 유무만 확인하기 때문에 상수의 시간복잡도
