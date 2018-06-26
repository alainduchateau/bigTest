import { Component, OnInit } from '@angular/core';
import { filteringService } from "../services/filtering.service";

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {

  users = [
    {
      id: 2,
      name: 'name2'
    },{
      id: 2,
      name: 'name2'
    },{
      id: 3,
      name: 'name3'
    }
  ];
  
  selectedUsers3 = [
    {
      id: 1,
      name: 'name1'
    },{
      id: 2,
      name: 'name2'
    }
  ];

  constructor(public filteringService:filteringService) { }

  ngOnInit() {
    // Retriving of var present in localStorage
    if(localStorage.getItem('fuelType')){
      this.filteringService.fuelType = localStorage.getItem('fuelType');
    }
    if(localStorage.getItem('carType')){
      this.filteringService.carType = Number(localStorage.getItem('carType'));
    }
    if(localStorage.getItem('maxPrice')){
      this.filteringService.maxPrice = Number(localStorage.getItem('maxPrice'));
    }
  }
  consoleThis(param){
    console.log(param);
  }

}
