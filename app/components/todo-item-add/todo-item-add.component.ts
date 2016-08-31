import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'a2c-todo-item-add',
    templateUrl: 'todo-item-add.component.html'
})
export class TodoItemAddComponent {
    inputVisible = false;
    @Output() add = new EventEmitter<string>();

    onButtonClick () {
        this.inputVisible = true;
    }

    onEnterKeystroke (todo: string) {
        this.add.emit(todo);
        this.inputVisible = false;
    }
}
