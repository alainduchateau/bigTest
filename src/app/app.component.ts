import { Component } from '@angular/core';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  progressRef: NgProgressRef;
  loadingSubscription: Subscription;
  loaded:any;
  constructor(private ngProgress: NgProgress) {
    this.progressRef = this.ngProgress.ref();
    this.loadingSubscription = this.progressRef.state$.subscribe(
      (completed) => {
        this.loaded = completed.active;
        console.log(this.loaded);
    })

  }
}


