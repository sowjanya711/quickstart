/* import the Component Dependency from Angular Core */

import {Component} from '@angular/core';

/* Components annotation declare metadata for the components */
/* Components are Directives with functionality and view */
/* Template or TemplateUrl provide the views or template for the component */
/* Selector is the reference for the component and how it has to be referenced in the app view */
/* Expressions bind modelname in view and taken from the defined Class's anyModelName */

@Component({
    selector : 'my-app',
   // template : '<span style="text-align:center"><h1>Hello World : {{anyModelName}}</h1></span>'
   template : `
   <span style="text-align:center">
     <h1> Hello World : {{myFirst}} </h1> 
        <input type="text" [(ngModel)]="myFirst"  >
   </span>
   `
})

export class AppComponent {
public myFirst = "This is my first Angular Web Application";
public myName = "Sowjanya";
}
