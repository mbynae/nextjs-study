// export const Article = (info?: any) => {
//     return info;
// };

class Entity {
    constructor(attrs?: any) {
        Object.assign(this, attrs);
    }
}

export class Article extends Entity {}
