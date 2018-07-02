import { Injectable } from '@angular/core';


@Injectable()
export class filteringService {

  fuelType: string = "All fuels";
  displayModel: number;
  carType: string = "0";
  maxPrice: number
 
  selectedCarType2 : string;

  carType2 = [
    {
      id: 0,
      label: 'All'
    },{
      id: 1,
      label: 'New'
    },{
      id: 2,
      label: 'Second hand'
    }
  ];

  fuelType2=[
    {
      id:0,
      label:'All'
    },
    {
      id:1,
      label:'Diesel'
    },
    {
      id:0,
      label:'Benzine'
    },
  ]



  ngOnInit() {
    if (localStorage.getItem('maxPrice')) {
      this.maxPrice = Number(localStorage.getItem('maxPrice'));
    } else {
      this.maxPrice = 45000;
    }
  }

  /**
  * Filter the list by fuel type
  *
  * @param {string} param => type fuel : "diesel", "benzine"
  * @memberof ListComponent
  */
  selectFuelType(param: string) {
    this.fuelType = param;
    localStorage.setItem('fuelType', param);
    console.log(localStorage.getItem('fuelType'));
    return this.fuelType;
  }

  /**
 * Filter the list by car type
 *
 * @param {string} param => type of car : "secondHand", "new" or "All"
 * @memberof ListComponent
 */
  selectCarType(param: string) {

    this.carType = param;

    localStorage.setItem('carType', String(this.carType));
    this.selectedCarType2 = param;

    return this.carType;
  }

  /**
 *Filter by bigDeal price
 *
 * @param {number} param => maximum price for the car
 * @memberof ListComponent
 */
  priceFilter(maxPrice: number) {

    localStorage.setItem('maxPrice', String(maxPrice));
    this.maxPrice = maxPrice;
    return this.maxPrice;
  }



}