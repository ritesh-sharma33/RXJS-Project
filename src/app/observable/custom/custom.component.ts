import { Component, OnDestroy,  OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus2;
  names;
  nameStatus;

  subs2: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
    // Ex - 01 (Manual)

    const custObservable = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      
      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);

      setTimeout(() => {
        observer.next('HTML & CSS');
        observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('React');
        observer.error(new Error("Limit exceeded"));
      }, 4000);

      setTimeout(() => {
        observer.next('JavaScript');
      }, 5000);
      
    })

    custObservable.subscribe(res => {
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    },(error) => {  
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    });

    // Ex - 02 (Custom Interval)
    const arr2 = ['Angular', 'TypeScript', 'HTML & CSS', 'React', 'JavaScript', 'VueJS'];
    const custObservable2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);

        if (count >= 2) {
          observer.error(new Error('limit exceeded'));
        }
        count++;
      }, 1000);
    })

    this.subs2 = custObservable2.subscribe(res => {
      console.log(res);
      this._designUtility.print(res, "elContainer2");
    }, (error) => {
      this.techStatus2 = "error";
    }, () => {
      this.techStatus2 = "completed";
    });

    // Ex - 03 (Random Names)
    const arr3 = ['Ritesh', 'Kumar', 'Sharma', 'Sujay', 'Kapil'];
    const custObservable3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);

        if (count >= 3) {
          observer.error(new Error('limit exceeded'));
        }

        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    custObservable3.subscribe(res => {
      console.log(res);
      this.names = res;
    }, (error) => {
      this.nameStatus = "error";
    }, () => {
      this.nameStatus = "completed";
    })
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }

}