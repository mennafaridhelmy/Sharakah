import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){

  }
  
  categories=['nursery','gas station','shop','resturant','clinic','car wash','school','hospital','construction','software application','motercycle sales and repaire','courses center','factory','office','others']
  
  navigationToRegister(){
    this.router.navigate(['/register']);
  }
}
