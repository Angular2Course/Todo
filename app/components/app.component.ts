import { Component } from "@angular/core";
import { TodoItem } from "../models/TodoItem";

@Component({
    selector: 'a2c-app',
    template: `
        <h1>Angular 2 Course todos:</h1>
        <a2c-todo-list [todoList]="todoList"></a2c-todo-list>
        <a2c-todo-item-add (add)="onTodoAdd($event)"></a2c-todo-item-add>
    `
})
export class AppComponent {
    todoList: TodoItem[];

    constructor () {
        this.todoList = [
            new TodoItem(1, "Angular 2 architecture"),
            new TodoItem(2, "Template syntax"),
            new TodoItem(3, "Dependency injection"),
            new TodoItem(4, "Forms and validation"),
            new TodoItem(5, "HTTP and Observables")
        ];
    }

    onTodoAdd (todo: string) {
        // not too professional
        let id = this.todoList.length + 1;
        this.todoList.push(new TodoItem(id, todo));
    }
}