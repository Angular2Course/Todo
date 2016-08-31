import { Input, Component, Output, EventEmitter, OnDestroy } from "@angular/core";
import { TodoItem } from "../../models/TodoItem";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-item',
    templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent implements OnDestroy{
    @Input() todoItem: TodoItem;
    @Output() complete = new EventEmitter<TodoItem>();

    onCheckboxChange () {
        this.complete.emit(this.todoItem);
    }

    ngOnDestroy ():void {
        console.log("destroy");
    }
}