import { Component, OnInit } from '@angular/core';
import { bigDealService } from '../services/bigDeal.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listVehicles:any;

  constructor(private bigDealService : bigDealService) { }

  ngOnInit() {
    this.listVehicles = this.bigDealService.vehicles;
    console.log(this.listVehicles);
  }

}
