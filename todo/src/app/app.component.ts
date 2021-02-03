/* This file contains the ViewModel & Controller
* Contains key Angular functionality, including support for components
* Components are the most basic building block of a UI in an Angular application */
import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from "./todoItem";
// import {read} from "fs";

/* Start of Chapter 1, Question 2 Answer */
import { asyncScheduler, fromEvent } from 'rxjs';
import { buffer, filter, throttleTime } from "rxjs/operators";

// We are using trailing throttle settings here
// defaultThrottleConfig = { leading: true, trailing: false }, a leading throttle
const throttleConfig = {
  leading: false,
  trailing: true
}

const clicks = fromEvent(document, 'click');
clicks.pipe(
  buffer(clicks.pipe(throttleTime(250, asyncScheduler, throttleConfig))),
  // if array is equal to 2, double click occurred
  filter(clickArray => clickArray.length === 2)
).subscribe(() => window.alert('Are you sure?'));
/* End of Chapter 1, Question 2 Answer */

// Example of a decorator, which provide metadata about a class
@Component({
  /* selector property specifies a CSS selector that matches the HTML element to which the component will be applied,
  * i.e. it tells Angular that the content generated by the component should be inserted into the app-root element
  * app-root element specified by this decorator is the default set by the angular-cli package,
  * it corresponds to an HTML element that was added to index.html
  *
  * Using the selector, we could have also selected another component,
  * so that this component can be used inside the selected component */
  selector: 'app-root',
  // templateUrl property is to specify the component's template, the app.component.html file for this component
  templateUrl: './app.component.html',
  /* styleUrls property specifies one or more CSS stylesheets that are used to style the elements produced by the
  * component and its template */
  styleUrls: ['./app.component.css'],
})
/* class that Angular can instantiate to create the component
* Here we define a class called AppComponent that has a private list property, which is assigned a TodoList object,
* and it populated with an array of TodoItem objects */
export class AppComponent {
  private list = new TodoList("DMar", [
    new TodoItem("Study on Discord", true),
    new TodoItem("Read Angular book"),
    new TodoItem("Chill"),
  ]);

  /* Define read-only properties named username and itemCount that rely on the TodoList object to produce their values
  * username property returns the value of the TodoList.user property */
  get username(): string {
    return this.list.user;
  }

  /* itemCount property uses the standard JavaScript array features to filter the TodoItem objects managed by
  * the TodoList to select those that are incomplete and returns the number of matching objects it finds
  * The value of itemCount is produced using a lambda function, also known as a fat arrow function, which is a more
  * concise way of expressing a standard JavaScript function
  * The arrow in the lambda expressions is read as "goes to" such as "item goes to not item.complete."
  * Lambda expressions are a recent addition to the JavaScript language specification, and they provide an alternative
  * to the conventional way of using functions as arguments like this:
  *
  * ...
  * return this.model.items.filter(function (item) { return !item.complete });
  * ... */
  get itemCount(): number {
    /*return this.list.items
      .filter(item => !item.complete).length;*/
    return this.items.length;
  }

  /* Allows us to remove to-do items once they have been marked as done
  * The component's items property filters out any completed items */
  get items(): readonly TodoItem[] {
    /*return this.list.items;*/
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  /* addItem method receives the text sent by the event binding in the template and uses it to add a new item to the
  * to-do list
  * The result of these changes is that you can create new to-do items by entering text in the input element and
  * clicking the Add button */
  addItem(newItem) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
