import { Injectable } from '@angular/core';


@Injectable()
export class filteringService {

  fuelType    : string;
  displayModel: number;
  carType     : string;
  maxPrice    : string;

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
      case "new":
        output = "New";
        break;
      default:
        output = "All";
    }
    this.carType = output;

    localStorage.setItem('carType', output);

    return output;
  }

  /**
 *Filter by bigDeal price
 *
 * @param {number} param => maximum price for the car
 * @memberof ListComponent
 */
priceFilter(maxPrice:number){
  this.maxPrice =  String(maxPrice);
  localStorage.setItem('maxPrice',this.maxPrice);
}

  

}