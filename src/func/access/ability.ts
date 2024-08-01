import { defineAbility } from '@casl/ability';

interface User {
    id: number;
    isLoggedIn: boolean;
    admin: boolean;
}

// const ability = defineAbility((can, cannot) => {
//     can('manage', 'all');
//     cannot('delete', 'User');
// });

// const ability = (user: any) =>
//     defineAbility((can) => {
//         can('read', 'Article');

//         if (user.isLoggedIn) {
//             can('update', 'Article', { authorId: user.id });
//             can('create', 'Comment');
//             can('update', 'Comment', { authorId: user.id });
//         }
//     });

// const ability = (user: { id: number; isLoggedIn: boolean }) =>
//     defineAbility((can) => {
//         can('read', 'Article', { published: true });
//         can('read', 'Article', { published: false, sharedWith: user.id });
//     });

const ability = (user: User) =>
    defineAbility((can) => {
        can('read', 'Article');
        can('update', 'Article', ['title', 'description'], { authorId: user.id });

        if (user.admin) {
            can('update', 'Article', ['published']);
        }
    });

export default ability;

//1. 기본사항
//casl은 기본적으로 ability 레벨에서 작동함
//ability는 4가지의 매개변수를 가짐 (첫번째는 필수, 나머지는 옵션)
//-User Action: 사용자가 앱에서 할 수 있는 액션
//-Subject: 사용자 액션을 확인하려는 주체
//-Field: 사용자 액션을 일치하는 주체의 필드로만 제한
//-Condition: 사용자 액션을 일치하는 주체로만 제한

//-User Action의 "manage"와 Subject의 "all"은 casl의 특별한 키워드. 모든 주체에게 모든 액션을 허용함

//can, cannot 함수는 4개의 매개변수를 모두 받을 수 있다.
//-can: 지정된 주체에 대한 액션을 허용하는 함수. 모든 조건이 일치하면 true, 아니면 false 반환
//-cannot: 지정된 주체에 대한 액션을 금지하는 함수. 모든 조건이 일치하면 true 만환

//2. 조건
//definedAbility 함수를 반환하는 함수를 만들어 사용자 등록
//can, cannot 함수는 클래스의 constuctor 객체를 통해 주체와 조건을 식별함 (subject.constructor.name)
//name으로 객체를 받는 constuctor내에서 Object.Assign 함수로 주체(class명)와 조건(초기화된 객체)을 생성 (new Subject(condition))
//can 함수에 생성한 주체 객체를 넣어 권한 판별
//can 함수에 들어가는 조건은 "AND" 연산자이기 때문에 모든 조건을 만족해야 true가 된다.
//"OR" 연산자를 만들기 위해선 동일한 주체를 다루는 can함수를 다른 조건으로 여러개 만들면 된다.

//3. 필드
//어떤 액션에 대해 특정 행동만 컨트롤 하도록 하는 인자 (배열로 적용)
//can에서 사용할 땐 string으로 각각 개별적으로 판별해야됨

//시나리오
//유저리스트 출력 (1번만 admin:true)
//로그인 => 로그인 후 계정 정보 (id(name), 고유번호, isLoggedIn)
//게시물 작성 => 게시물 등록(공개, 비공개 설정) => 게시물 리스트 출력 (articleId, authorId, title, description, published, sharedWith)
//게시물 수정/삭제: 작성자만
//게시물 공유 (sharedWith) => 작성자의 모든 글 등록한 유저가 보기 가능
//admin일 시 모든 글 보기 / 삭제 가능
