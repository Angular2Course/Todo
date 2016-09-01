import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoItemAddComponent } from "./todo-item-add/todo-item-add.component";
import { XHRBackend, HttpModule } from "@angular/http";
import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api";
import { TodoDb } from "../mocks/todo_db";
import { TodoService } from "../services/todo.service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, TodoListComponent, TodoItemComponent, TodoItemAddComponent],
    bootstrap: [AppComponent],
    providers: [
        TodoService,
        {provide: XHRBackend, useClass: InMemoryBackendService},
        {provide: SEED_DATA, useClass: TodoDb}
    ]
})
export class AppModule {}