import { Component, View } from 'angular2/angular2';
import { Todo } from './todo/todo';

@Component({
    selector: 'app'
})
@View({
    templateUrl: './app/components/app.html',
    directives: [Todo]
})
export class App {
    constructor() {
        console.log('Root app component loaded');
    }
}