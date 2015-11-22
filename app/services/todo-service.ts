export class TodoService {
    todos: string[] = [
        'eat',
        'sleep',
        'code'
    ];

    addTodo(value: string) {
        if (value.length > 0) {
            this.todos.push(value);
        }
    }
}