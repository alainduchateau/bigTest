import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { Subscription } from 'rxjs';
import { copyConfig } from '@angular/router/src/config';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  //Instance of NgProgressRef
  progressRef: NgProgressRef;
  //Instance of subscription
  loadingSubscription: Subscription;
  //Init var used by the template for display the custom loader ( logo fullscreen )
  loading:boolean;
  //Init var to retrive percentage of loading
  percent:any;

  constructor(private ngProgress: NgProgress) {
    //var retrieving .ref -> reference of NgProgress
    this.progressRef = this.ngProgress.ref();
    //Initialize listener for the loader changing state
    this.loadingSubscription = this.progressRef.state$.subscribe(
      //"completed" object return
      (completed) => {
        //retrieve value of object "completed" with the "true" property 
        this.loading = completed.active;
        console.log(this.loading);
        //retrieve percentage of loading in object "completed" 
        this.percent = completed.value;
    })

    

  }
}


