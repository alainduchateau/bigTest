import { Injectable } from '@angular/core';


@Injectable()
export class filteringService {

  fuelType: string;
  displayModel: number;
  carType: string;


  /**
 * Filter the list by fuel type
 *
 * @param {string} param => type fuel : diesel, benzine
 * @memberof ListComponent
 */
  selectFuelType(param: string) {
    this.fuelType = param;
    localStorage.setItem('fuelType', param);
    return this.fuelType;
    
  }

  setFuelType(param) {
    console.log(param);
    
  }



  formDetails() {
    var formData = {};

    return {
      getProperty: function () {
        return formData;
      },
      setProperty: function (values) {
        formData = values;
      }
    };
  };

}