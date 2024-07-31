import ability from './ability';
import { Article } from './entities';

const result1 = ability.can('read', 'Comment');
const result2 = ability.cannot('delete', 'User');
console.log(result2);
