import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menuBtn: boolean =false;

  routeActiveCheck={
    home:false,
    tasks:false,
    goals: false
  }

  constructor(private router: Router){}

  checkRouterActive(){
    if(this.router.isActive('dashboard/home',true)){
      this.routeActiveCheck.home=true;
      this.routeActiveCheck.tasks=false;
      this.routeActiveCheck.goals=false;

    }else if(this.router.isActive('dashboard/tasks',true)){
      this.routeActiveCheck.tasks=true;
      this.routeActiveCheck.goals=false;
      this.routeActiveCheck.home=false;

    }else if(this.router.isActive('dashboard/goals',true)){
      this.routeActiveCheck.home=false;
      this.routeActiveCheck.goals=true;
      this.routeActiveCheck.tasks=false;

    }
  }

  menuResponsive(){
    this.menuBtn = !this.menuBtn;
  }

  menuHidden(){
    if(this.menuBtn===false){
      this.menuBtn = true;
    }
  }


  ngOnInit(){
  }


  ngDoCheck():void{
    this.checkRouterActive()
    console.log(this.routeActiveCheck.home)
  }

  // ngOnChanges(): void{
  //   this.checkRouterActive()
  // }
  
}
