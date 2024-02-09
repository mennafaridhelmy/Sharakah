import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id:1,
      name: 'rapunzel',
      category: 'nursery',
      moneyNeeded: 10000,
      moneyCollected: 40000,
      totalTarget: 50000,
      place: 'maadi',
      numberOfParteners: 4,
      maxNumberOfParteners: 10,
    },
    {
      id:2,
      name: 'Big',
      category: 'school',
      moneyNeeded: 100000,
      moneyCollected: 400000,
      totalTarget: 500000,
      place: 'maadi',
      numberOfParteners: 4,
      maxNumberOfParteners: 10,
    },
    {
      id:3,
      name: 'm7mad',
      category: 'shop',
      moneyNeeded: 10000,
      moneyCollected: 40000,
      totalTarget: 50000,
      place: 'lebieny',
      numberOfParteners: 4,
      maxNumberOfParteners: 10,
    },
    {
      id:4,
      name: 'akla',
      category: 'resturant',
      moneyNeeded: 10000,
      moneyCollected: 40000,
      totalTarget: 50000,
      place: 'elzatoon',
      numberOfParteners: 4,
      maxNumberOfParteners: 10,
    },
    {
      id:5,
      name: 'languages',
      category: 'courses center',
      moneyNeeded: 10000,
      moneyCollected: 40000,
      totalTarget: 50000,
      place: 'sheraton',
      numberOfParteners: 4,
      maxNumberOfParteners: 10,
    },
  ];

  constructor(private router: Router){

  }
  navigationToDetails(id: number){
    this.router.navigate([`/project-details/${id}`]);
  }
}
