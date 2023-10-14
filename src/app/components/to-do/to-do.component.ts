import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  @Input() icon: string = ''
  @Input() title: string = ''
  @Input() status: 'Check'|'X'| 'Normal' ='Check';
  @Input() statusBg: 'Check'|'X'| 'Normal' ='Check';
}
