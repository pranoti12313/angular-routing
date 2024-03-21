import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrl: './faculty-details.component.scss'
})
export class FacultyDetailsComponent {
facObj : any;
facEmail : any;
router: any;
constructor(private activeRoute : ActivatedRoute){
  // console.log('LOOK HERE>>', activeRoute)
  this.facObj = activeRoute.snapshot.params;
  // activeRoute.params.subscribe((param : any)=>{
  //   console.log('LOOK HERE>>', param)
  //   this.facObj = param
  // })
  activeRoute.params.subscribe({next : (param : any)=>{
    // console.log('LOOK HERE>>', param)
     this.facObj = param
  }})
  // activeRoute.fragment.subscribe((frag: any)=>{
  //   console.log(frag);
  //   this.facEmail = frag;
  // })

activeRoute.queryParams.subscribe((qParam : any)=>{
  console.log(qParam);
    this.facEmail = qParam.facEmail;
})

}

goToManoj(){
  this.router.navigate(['manoj', '9558226542'],{
    queryParams : {myFirstKey : 'valueOne', mySecondKey : 'valueTwo'},
    fragment : 'sunday',
    
  })
}
}
