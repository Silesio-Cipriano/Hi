import { Component } from '@angular/core';
import { Task } from 'src/app/shared';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  modalOpen: boolean = false;
  tasks: Task[] = []
  task?: Task
  textInput: string = ''
  openNotification: boolean = false;


  closeModal() {
    this.modalOpen = false;
  }

  openModal() {
    this.modalOpen = true;
  }

  addTask() {
    let value = this.textInput;
    if (value.length > 0) {
      this.task = {
        id: Math.random() + 20 + '',
        title: value
      }
      this.tasks?.unshift(this.task)
      console.log(this.tasks)
      this.textInput = ''
      this.closeModal()
    } else {
      this.openNotification = true;
      setTimeout(() => {
        this.openNotification = false;

      }, 10000);
    }
  }

  closeNotification() {
    this.openNotification = false;
  }


  ngOnInit() {

  }
}
