import { Injectable } from '@angular/core';


@Injectable()
export class filteringService {

  fuelType: string = "All fuels";
  displayModel: number;
  carType: string = "All type";
  maxPrice: number

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

    var output: string;

    switch (param) {
      case "secondHand":
        output = "secondHand";
        break;
      case "New":
        output = "New";
        break;
      default:
        output = "All type";
    }
    this.carType = output;

    localStorage.setItem('carType', output);

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