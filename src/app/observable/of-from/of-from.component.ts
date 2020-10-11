import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMessage;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    // of example

    const obs1 = of('Ritesh', 'Kumar', 'Sharma');
    obs1.subscribe(res => {
      this._designUtility.print(res, 'elContainer');
    })

    const obs2 = of({ a: 'Ritesh', b: 'Kumar', c: 'Sharma' });
    obs2.subscribe(res => {
      this.obsMessage = res;
    })

    // from example
    const obs3 = from(['Ritesh', 'Kumar', 'Sharma'])
    obs3.subscribe(res => {
      this._designUtility.print(res, 'elContainer3');
    });

    // from - promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    })

    const obs4 = from(promise);
    obs4.subscribe(res => {
      this._designUtility.print(res, 'elContainer4');
    })

    // from - String
    const obs5 = from('Welcome to Coding Galaxy');
    obs5.subscribe(res => {
      console.log("From string => ", res);
      this._designUtility.print(res, 'elContainer5');
    })
  }

}