import { Component,Input, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {

  car : any;

  modelReference: string = this.route.snapshot.params['modelReference'];

  signleCarSubscription: Subscription;

  constructor(private bigDealService:bigDealService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.car = this.bigDealService.getCarById(this.modelReference);
    //this.car = this.bigDealService.getCarById(this.modelReference);  
  }
  
}