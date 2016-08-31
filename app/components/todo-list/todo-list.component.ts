import { TodoItem } from "../../models/TodoItem";
import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-list',
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
    @Input() todoList: TodoItem[];

    onComplete (completedTodoItem: TodoItem, index: number) {
        setTimeout(() => this.todoList.splice(index, 1), 500);
    }
}