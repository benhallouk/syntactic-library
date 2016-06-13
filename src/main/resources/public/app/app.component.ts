import { Component } from 'angular2/core';

@Component({
    selector: 'syntactic-library-app',
    template:`
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    ` 
})
export class AppComponent {
    pageTitle: string = 'The Syntactic Library';
}