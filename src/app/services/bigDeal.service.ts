import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class bigDealService {

  constructor(private httpClient: HttpClient) {

  }

  vehiclesSubject = new Subject<any[]>();

  vehicles: any;

  emitVehiclesSubject() {
    this.vehiclesSubject.next(this.vehicles);
  }
/**
 * 
 * 
 * @memberof bigDealService
 */
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


/**
 * 
 * 
 * @param {string} reference 
 * @returns object represent a car
 * @memberof bigDealService
 */
getCarById(reference: string) {
    const singleCar = this.vehicles.find(
      (carObject) => {
        return carObject.Reference === reference;
      });
    return singleCar;
  }
/**
 * 
 * 
 * @param {any} list  list to filter (Array)
 * @param {any} keyGetter  the filter you want, a property present in the list (string)
 * @returns  a map represent the filtered list 
 * @memberof bigDealService
 */
groupBy(list, keyGetter) {
    //Add a marketing name in a correspondance found in the dictionnary
    list.forEach(car => {
      var marketingName = this.getRightModelName(this.dico, car.Model);
      if (marketingName) {
        car.marketingName = marketingName;
      }
    }
    );
    //Create a map object filtered by the filter
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });

    return map;
  }

  dico = [
    {
      key: "i10",
      values: ['i10 5d 12',
               'i10',
               'i10 5d',
               'i10 5d v5a',
               'i10 5d 14',
               'i10 5d v6a'
              ]
    },
    {
      key: "i20",
      values: ['i20 5d 14',
               'i20 5d 13',
               'i20 5d go',
               'i20',
               'i20 5d v5a',
               '20 5d v5a',
               'i20 5d v5b',
               'i20 5 d V5b'
              ]
    },
    {
      key: "i20 active",
      values: ['i20act v5a',
               'i20 act v5a',
               'i20Act V5a'
              ]
    },
    {
      key: "i20 coupe",
      values: ['i20 3d v5a',
               'i20 3d 12'
              ]
    },
    {
      key: "ix20",
      values: ['ix20 5d 13',
               'ix20',
               'ix20 5d 14',
               'ix20 5d go',
               'ix20 5 d V5a'
      ]
    },
    {
      key: "i30",
      values: ['i30 3d v5a',
        'i30 3d 14',
        'i30 3deurs',
        'i30 3d v5b',
        'i30 5d v7a',
        'i30 5d 13',
        'i30',
        'i30 5d v5a',
        'i30 5d v5b',
        'i30 5d V7a',
        'i30 5 doors V7a',
        'i30 5 d V7a',
        'i30 5d V5b',

      ]
    },
    {
      key: 'i30 Wagon',
      values: ['i30 w 13',
        'i30 wagon',
        'i30 cw v5a',
        'i30 w 14',
        'i30 w 15',
        'i30 cw',
        'i30 cw v5b',
        'i30 cw 14',
        'i30 cw 13',
        'i30 wg v7a',
        'i30 Wg V7a',
        'i30 cw V5b',
        'i30 wagon V5b',
        'i30 Wagon V7a',
        'i30 Wagon V7a 110',
        'i30 5 doors V7a 110'
      ]
    },
    {
      key: "Veloster",
      values: ['vel 4d v5a', 'vel 3d 14']
    },
    {
      key: "IONIQ",
      values: ['ion hv v6a',
        'ion hv v7a',
        'Ion HV V6a',
        'Ion HV V7a'
      ]
    },
    {
      key: "i40 Sedan",
      values: ['i40 sedan',
        'i40 4d 13',
        'i40 4d 14',
        'i40 4d go',
        'i40 4d',
        'i40 4d v5a',
        'i40 4d v6a',
        'i40 5d V5a',
        'i40 4d V6a',
        'i40 sedan V6a'
      ]
    },
    {
      key: "i40 Wagon",
      values: ['i40 w 12',
        'i40 w 13',
        'i40 w 14',
        'i40 5d v5a',
        'i40 5d 13',
        'i40 5d',
        'i40 5d go',
        'i40 5d v6a',
        'i40 wagon V5a',
        'i40 5d V6a'
      ]
    },
    {
      key: "ix35",
      values: ['ix35', 'ix35 5d', 'ix35 5d 14', 'ix35 5d go']
    },
    {
      key: "ix20",
      values: ['ix20 5d v5a',
        'ix20 5dv5a',
        'ix20 5dV5a']
    },
    {
      key: "Tucson",
      values: ['tucson', 'tucson 5d v5a', 'Tuc 5d V5a']
    },
    {
      key: "Santa Fe",
      values: ['santa fe',
        'sfn 5d v5a',
        'sfn 5d 13',
        'sfn 5d 14',
        'sfn 5d v6a',
        'Santa Fe 5 doors V6a'
      ]
    },
    {
      key: "H-1",
      values: ['h1 4d v5a']
    },
    {
      key: "Grand Santa Fe",
      values: ['grand santa fe',
        'gsf 5d v5b',
        'gsf 5d v5a',
        'gsf 5d v6a',
        'Gsf 5d V6a',
        'Grand Santa Fe 5 doors V6a'
      ]
    },
    {
      key: "h350",
      values: ['h350']
    }
  ];
/**
 * 
 * 
 * @param {any} dictionnary  the array with the vehicle list
 * @param {any} modelName the model you search a marketing name
 * @returns 
 * @memberof bigDealService
 */
getRightModelName(dictionnary, modelName) {
    var output = "none";
    Object.keys(dictionnary).forEach(key => {
      dictionnary[key].values.forEach(value => {
        if (value.toLowerCase() === modelName.toLowerCase()) {
          output = dictionnary[key].key
        }
      })
    }
    )
    return output
  }

}