import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.css']
})
export class ActionBtnComponent {
  @Input() title:string ='';
  @Input() icon:string ='';
  @Input() light: boolean = true;

  constructor(){}

  ngOnInit(){
    console.log("Renderizou")
  }
} 
