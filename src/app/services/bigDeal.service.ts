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
    {key: "i10",
      values: [ 'i10 5d 12','i10','i10 5d','i10 5d v5a','i10 5d 14','i10 5d v6a']
    },
    {key: "i20",
      values: [  'i20 5d 14','i20 5d 13','i20 5d go','i20','i20 5d v5a','20 5d v5a','i20 5d v5b']
    },
    {key: "i20 active",
      values: [ 'i20act v5a','i20 act v5a']
    },
    {key: "i20 coupe",
      values: ['i20 3d v5a','i20 3d 12']
    },
    {key: "ix20",
      values: ['ix20 5d 13','ix20','ix20 5d 14','ix20 5d go']
    },
    {key: "i30",
      values: [ 'i30 3d v5a','i30 3d 14','i30 3deurs','i30 3d v5b','i30 5d v7a','i30 5d 13','i30','i30 5d v5a','i30 5d v5b']
    }, 
    {key: 'i30 Wagon',
      values: ['i30 w 13','i30 wagon','i30 cw v5a','i30 w 14','i30 w 15','i30 cw','i30 cw v5b','i30 cw 14','i30 cw 13','i30 wg v7a']
    },
    {key: "Veloster",
      values: ['vel 4d v5a','vel 3d 14']
    }, 
    {key: "IONIQ",
      values: ['ion hv v6a','ion hv v7a']
    },
    {key: "i40 Sedan",
      values: ['i40 sedan','i40 4d 13','i40 4d 14','i40 4d go','i40 4d','i40 4d v5a','i40 4d v6a']
    },
    {key: "i40 Wagon",
      values: [  'i40 w 12','i40 w 13','i40 w 14','i40 5d v5a','i40 5d 13','i40 5d','i40 5d go','i40 5d v6a']
    },
    {key: "ix35",
      values: ['ix35','ix35 5d','ix35 5d 14','ix35 5d go']
    },
    {key: "ix20",
      values: ['ix20 5d v5a','ix20 5dv5a']
    },
    {key: "Tucson",
      values: ['tucson','tucson 5d v5a']
    },
    {key: "Santa Fe",
      values: ['santa fe','sfn 5d v5a','sfn 5d 13','sfn 5d 14','sfn 5d v6a']
    },
    {key: "H-1",
      values: ['h1 4d v5a']
    },
    {key: "Grand Santa Fe",
      values: ['grand santa fe','gsf 5d v5b','gsf 5d v5a','gsf 5d v6a']
    },
    {key: "h350",
      values: ['h350']
    }
  ];

  lol: any = (this.getRightModelName(this.dico, "h1 4d v5a"));

  getRightModelName(dictionnary, modelName) {
    Object.keys(dictionnary).forEach(key => {
      dictionnary[key].values.forEach(value => {
        if (value === modelName) {
         /* console.log(modelName + " trouvé");
          console.log(dictionnary[key].key + " correspondant");*/
          return dictionnary[key].key
        }
      })
    }
    )
  }

}