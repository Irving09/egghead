import { Component, View, NgFor } from 'angular2/angular2';
import { TodoService } from '../../services/todo-service';

@Component({
    selector: 'todo'
})
@View({
    templateUrl: './app/components/todo/todo.html',
    directives: [NgFor]
})
export class Todo {
    constructor(public todoService: TodoService) {
        console.log('Todo component loaded');
    }

    onClick(event, value) {
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    }
}