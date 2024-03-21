import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  facultyList=[
    {
    fullName : 'prashant',
    emailId : 'prashant.b@gmail.com',
    contactNumber : '7554478643'
  },
  {
    fullName : 'manoj',
    emailId : 'manoj.p@gmail.com',
    contactNumber : '9558226542'
  },
  {
    fullName : 'devendra',
    emailId : 'devendra.b@gmail.com',
    contactNumber : '7554327337'
  }
  ]
  constructor(private router : Router, private activeRoute :ActivatedRoute){}
  navigateToFaculty(facObj : any){
    this.router.navigate([facObj.fullName, facObj.contactNumber], {
      // fragment : facObj.emailId
      queryParams : {facEmail : facObj.emailId},
      relativeTo : this.activeRoute

    })
  }
}
