import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class bigDealService {

  constructor(private httpClient: HttpClient) {

  }

  vehiclesSubject = new Subject<any[]>();

  vehicles: any;

  emitVehiclesSubject() {
    this.vehiclesSubject.next(this.vehicles);
    console.log(this.vehicles);
  }

  getVehiclesFromServer() {
    this.httpClient
      .get<any[]>('https://bigtest-a64dd.firebaseio.com/.json')
      .subscribe(
        (response) => {
          this.vehicles = response;
          this.emitVehiclesSubject();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getCarById(reference: string) {
    const singleCar = this.vehicles.find(
      (carObject) => {
        return carObject.Reference === reference;
      });
    return singleCar;
  }

  getCarByModel(model: string) {
    return this.vehicles.filter(e => e.Reference.includes(model) || e.Model.includes(model))
      .sort((a, b) => a.Reference.includes(model) && !b.Reference.includes(model) ? -1 : b.Reference.includes(model) && !a.Reference.includes(model) ? 1 : 0);
  }

  dico = [
    {
      key: "key1",
      values: ["value1-1", "value2-1"]
    }, {
      key: "key2",
      values: ["value1-2", "value2-2"]
    }]

  lol: any = (this.getRightModelName(this.dico, "value1-1"));

  getRightModelName(dictionnary, modelName) {
    Object.keys(dictionnary).forEach(key => {
      dictionnary[key].values.forEach(value => {
        if (value === modelName) {
          console.log(modelName + " trouvé");
          console.log(dictionnary[key].key + " correspondant");
          return dictionnary[key].key
        }
      })
    }
    )
  }

}