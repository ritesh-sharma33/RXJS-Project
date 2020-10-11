import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMessage: String;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    // const broadcastVideos = interval(1000);
    // timer(delay, interval)
    const broadcastVideos = timer(4000, 1000);

    this.videoSubscription = broadcastVideos.subscribe(res => {
      console.log(res);
      this.obsMessage = "Video " + res;
      this._designUtility.print(this.obsMessage, 'elContainer');
      this._designUtility.print(this.obsMessage, 'elContainer2');
      this._designUtility.print(this.obsMessage, 'elContainer3');

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }
}
