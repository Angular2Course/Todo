import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { TodoItem } from "../models/TodoItem";

@Injectable()
export class TodoService {
    private todoUrl = 'app/todos';

    constructor(private http: Http){}

    getTodos () {
        return this.http.get(this.todoUrl)
            .map(response => response.json().data)
            .catch(error => Observable.throw(error.status ? `${error.status} - ${error.statusText}` : 'Unknown error'));
    }

    deleteTodo (id: number) {
        return this.http.delete(this.todoUrl + '/' + id)
            .catch(error => Observable.throw(error.status ? `${error.status} - ${error.statusText}` : 'Unknown error'));
    }

    addTodo (todo: TodoItem) {
        let options = new RequestOptions();
        options.headers = new Headers({'Content-type': 'application/json'});
        return this.http.post(this.todoUrl, todo, options)
            .map(response => response.json().data)
            .catch(error => Observable.throw(error.status ? `${error.status} - ${error.statusText}` : 'Unknown error'));
    }
}