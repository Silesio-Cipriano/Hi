import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() type: 'Confirmation'|'Information'| 'Alert'| 'Update' = 'Alert'
  @Input() message: string=''
  @Output() fcloseNotification:Function = ()=>{};

  color:string=''
  bgClass:string=''


  close(){
    this.fcloseNotification()
   }

  ngOnInit(){
    if(this.type==='Alert'){
      this.color="#FF2424"
      this.bgClass='cardAlert'
    }else  if(this.type==='Confirmation'){
      this.color="#00CB4A"
      this.bgClass='cardConfirmation'

    } else if(this.type==='Information'){
      this.color="#6A2BFB"
      this.bgClass='cardInformation'

    }else if(this.type==='Update'){
      this.color="#130A3B"
      this.bgClass='cardUpdate'

    }
  }



}
