class Entity {
    constructor(attrs?: any) {
        Object.assign(this, attrs);
    }
}

export class Article extends Entity {}
export class Comment extends Entity {}
