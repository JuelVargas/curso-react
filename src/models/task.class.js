import { LEVELS } from "./levels.enum";

export class  Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    constructor(name, decription,  completed, level){
        this.name = name;
        this.decription = decription;
        this.completed = completed;
        this.level = level
    }
}