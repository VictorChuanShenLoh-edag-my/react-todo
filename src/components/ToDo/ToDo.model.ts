// export interface Todo {
//     id: string;
//     title: string;
//     completed: boolean;
//   }


export class Todo {
    constructor(public id = '', public title = '', public completed = false) {
    }
}