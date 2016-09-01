import { Component, OnInit } from "@angular/core";
import { TodoItem } from "../models/TodoItem";
import { TodoService } from "../services/todo.service";

@Component({
    selector: 'a2c-app',
    template: `
        <h1>Angular 2 Course todos:</h1>
        <a2c-todo-list [todoList]="todoList" (remove)="onRemove($event)"></a2c-todo-list>
        <a2c-todo-item-add (add)="onTodoAdd($event)"></a2c-todo-item-add>
    `
})
export class AppComponent implements OnInit {
    todoList: TodoItem[];

    constructor (private todoService: TodoService) {}

    ngOnInit ():void {
        this.todoService.getTodos().subscribe(
            todos => this.todoList = todos,
            error => console.log(error)
        );
    }

    onTodoAdd (todo: string) {
        // not too professional
        let id = this.todoList.length + 1;
        let todoItem = new TodoItem(id, todo)
        this.todoService.addTodo(todoItem).subscribe(
            () => this.todoList.push(todoItem),
            error => console.log(error)
        );
    }

    onRemove (todo: TodoItem) {
        let index = this.todoList.findIndex(item => item.id === todo.id);
        setTimeout(() => {this.todoService.deleteTodo(todo.id).subscribe(
            () => this.todoList.splice(index, 1),
            error => console.log(error)
        )}, 400);
    }
}