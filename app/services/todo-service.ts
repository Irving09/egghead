import { TodoModel } from '../models/todo-model';

export class TodoService {
    todos: TodoModel[] = [
        new TodoModel('eat'),
        new TodoModel('sleep'),
        new TodoModel('code')
    ];

    addTodo(value: TodoModel) {
        if (value.title.length > 0) {
            this.todos.push(value);
        }
    }
}