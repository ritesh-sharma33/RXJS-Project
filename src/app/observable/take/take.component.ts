import { Component, OnInit } from "@angular/core";
import { from, fromEvent, interval, timer } from "rxjs";
import { map, take, takeLast, takeUntil } from "rxjs/operators";
import { DesignUtilityService } from "../../appServices/design-utility.service";

@Component({
  selector: "app-take",
  templateUrl: "./take.component.html",
  styleUrls: ["./take.component.css"]
})
export class TakeComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService) {}

  randomNames = [
    "Ritesh",
    "Kapil",
    "Sujay",
    "Rob",
    "Alex",
    "Jos",
    "Ben",
    "Steve"
  ];

  ngOnInit() {
    const nameSource = from(this.randomNames);

    // Ex - 01 | Take

    nameSource.pipe(take(5)).subscribe(res => {
      console.log(res);
      this._designUtilityService.print(res, "elContainer");
    });

    // Ex - 02 | TakeLast
    nameSource.pipe(takeLast(3)).subscribe(res => {
      console.log(res);
      this._designUtilityService.print(res, "elContainer2");
    });

    // Ex - 03 | TakeUntil
    const source = interval(1000);
    let condition = fromEvent(document, "click");
    let condition1 = timer(4000);

    source
      .pipe(
        map(res => "Number " + res),
        takeUntil(condition)
      )
      .subscribe(res => {
        console.log(res);
        this._designUtilityService.print(res, "elContainer3");
      });
  }
}
