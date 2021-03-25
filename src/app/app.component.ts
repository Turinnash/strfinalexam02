import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ) {}


  onDelete(todo: Todo): void{
    this.todoService.delete(todo).subscribe(
      ()=> this.todos$=this.todoService.getAll()
    )
    }
  onCreate(todo: Todo): void{
    this.todoService.create(todo).subscribe(
    ()=> console.log("Done")
      )
    }
    onUpdate(todo: Todo): void{
      todo.active=!todo.active;
      this.todoService.update(todo).subscribe(
        ()=> console.log("Updated")
      )
    }

    sorting: string = 'string';

    onSorting(param: string): void {
      this.sorting = param;
       }

    phrase: string = '';

    

 
}