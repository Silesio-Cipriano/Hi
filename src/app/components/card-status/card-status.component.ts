import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent {
    @Input() title:string ='';
    @Input() value:string ='';
    @Input('bg-color') bgColor:string ='white';
    @Input('text-color') textColor:string ='black';
    
}
