export class TodoDb {
   createDb() {
       let todos = [
           {"id": 1, "todo": "Angular2 architecture"},
           {"id": 2, "todo": "Template syntax"},
           {"id": 3, "todo": "Components basics"},
           {"id": 4, "todo": "Dependency injector"},
           {"id": 5, "todo": "Forms"},
           {"id": 6, "todo": "HTTP + Observables"},
           {"id": 7, "todo": "NgModules"},
           {"id": 8, "todo": "Routing"},
       ];

       return {todos: todos}
   }
}