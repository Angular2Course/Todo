import { TodoItem } from "../../models/TodoItem";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-list',
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
    @Input() todoList: TodoItem[];
    @Output() remove = new EventEmitter<TodoItem>();

    onComplete (completedTodoItem: TodoItem) {
        this.remove.emit(completedTodoItem);
    }
}