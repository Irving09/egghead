import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    templateUrl: './app/components/app.html'
})
export class App {
    constructor() {
        console.log('Root app component loaded');
    }
}