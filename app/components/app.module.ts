import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoItemAddComponent } from "./todo-item-add/todo-item-add.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoListComponent, TodoItemComponent, TodoItemAddComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}