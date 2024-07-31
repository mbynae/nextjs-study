import defineAbilityFor from './ability';
import { Article } from './accessControl';

const user = { id: 1, isModerator: true };
const ability = defineAbilityFor(user);
const ownArticle = new Article({ authorId: user.id });
const anotherArticle = new Article({ authorId: 2 });

const result = ability.can('update', anotherArticle, 'title');
console.log(result);
