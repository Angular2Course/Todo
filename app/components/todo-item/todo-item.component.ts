import { Input, Component } from "@angular/core";
import { TodoItem } from "../../models/TodoItem";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-item',
    templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent {
    @Input() todoItem: TodoItem;
}