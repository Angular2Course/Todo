import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoListComponent, TodoItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}