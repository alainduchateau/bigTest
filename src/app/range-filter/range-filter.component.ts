import { Component, OnInit } from '@angular/core';
import { filteringService } from "../services/filtering.service";

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {

  constructor(public filteringService:filteringService) { }

  ngOnInit() {
    // Retriving of var present in localStorage
    if(localStorage.getItem('fuelType')){
      this.filteringService.fuelType = localStorage.getItem('fuelType');
    }
    if(localStorage.getItem('carType')){
      this.filteringService.carType = localStorage.getItem('carType');
    }
    if(localStorage.getItem('maxPrice')){
      this.filteringService.maxPrice = Number(localStorage.getItem('maxPrice'));
    }
  }

}
