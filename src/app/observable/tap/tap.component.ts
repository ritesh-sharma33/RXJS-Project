import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  currentColor: String;

  ngOnInit() {

    let obsSubscription: Subscription;
    let obsSubscription2: Subscription;
    const source = interval(1500);

    // Ex - 01
    const arr = ["Ritesh", "Sharma", "Kapil", "Sujay", "John", "Robert", "Alex"];
  
    obsSubscription = source.pipe(
      tap(res => {
        if (res == 4) {
          obsSubscription.unsubscribe();
        }
      }),
      map(res => arr[res])
    )
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res, "elContainer");
    });

    // Ex - 02
    const colors = ["Red", "Green", "Orange", "Blue", "Purple", "Magenta", "Navy", "Brown", "Black"];

    obsSubscription2 = source.pipe(
      tap(res => {
        if (res >= 7) {
          obsSubscription2.unsubscribe();
        }
        console.log("Tap => ", res);
      }),
      map(res => colors[res])
    ).subscribe(res => {
      console.log(res);
      this.currentColor = res;
      this._designUtility.print(res, "elContainer2");
    })
  }

}