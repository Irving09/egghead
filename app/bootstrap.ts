import { bootstrap } from 'angular2/angular2';
import { App } from './components/app';
import { TodoService } from './services/todo-service';

bootstrap(App, [TodoService]);