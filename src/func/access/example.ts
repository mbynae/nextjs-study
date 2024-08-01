import defineAbilityFor from './ability';
import { Article, Comment } from './entities';

// 읽기 가능, 수정: 아이디 일치, 댓글쓰기: 로그인만, 댓글수정: 아이디 일치
// const user = { id: 1, isLoggedIn: true };
// const ability = defineAbilityFor(user);
// const ownArticle = new Article({ authorId: user.id });
// const anotherArticle = new Article({ authorId: 2 });
// const ownComment = new Comment({ authorId: user.id });
// const anotherComment = new Comment({ authorId: 2 });

// 모두 공개, 비공개 + 공유자만 가능, 비공개 or 비공유자
// const user = { id: 1, isLoggedIn: true };
// const ability = defineAbilityFor(user);
// const article1 = new Article({ published: true, sharedWith: false });
// const article2 = new Article({ published: false, sharedWith: user.id });
// const article3 = new Article({ published: false, sharedWith: 2 });

// 읽기: 모두 가능, 제목/내용 수정:아이디 일치만, 등록: 관리자만
const admin = { id: 1, isLoggedIn: true, admin: true };
const user = { id: 2, isLoggedIn: true, admin: false };
const ability = defineAbilityFor(user);
const ownArticle = new Article({ authorId: user.id });
const foreignArticle = new Article({ authorId: 3 });

console.log(ability.can('update', ownArticle, 'published'));
