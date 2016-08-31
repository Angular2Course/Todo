import { TodoItem } from "../../models/TodoItem";
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-list',
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
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
}