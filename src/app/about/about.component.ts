import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  someVar = 'contact';
  constructor(private router : Router, private activeRoute : ActivatedRoute){
    console.log('LOOK HERE>>', activeRoute)
  }
  goToContact(){
    console.log('goToContact triggered');
    this.router.navigate(['contact'],{relativeTo : this.activeRoute})
  }
}
