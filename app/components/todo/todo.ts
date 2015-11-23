import { Component, View, NgFor, FORM_DIRECTIVES } from 'angular2/angular2';
import { TodoService } from '../../services/todo-service';
import { TodoModel } from '../../models/todo-model';

@Component({
    selector: 'todo'
})
@View({
    templateUrl: './app/components/todo/todo.html',
    directives: [NgFor, FORM_DIRECTIVES]
})
export class Todo {
    todoModel: TodoModel = new TodoModel();

    constructor(public todoService: TodoService) {
        console.log('Todo component loaded');
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel)
        this.todoModel = new TodoModel();  // Important!!!
    }
}