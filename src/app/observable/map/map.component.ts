import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // Messages
  msg1;
  msg2;

  // Subscriptions
  sub1: Subscription;
  sub2: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {

    const broadcastVideos = interval(1000);

    // Ex - 01

    this.sub1 = broadcastVideos.pipe(
      map(data => 'Video ' + data)
    )
      .subscribe(res => {
        this.msg1 = res;
      })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex - 02

    this.sub2 = broadcastVideos.pipe(
      map(data => data * 3)
    ).subscribe(res => {
      this.msg2 = res;
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex - 03

    const members = from([
      { id: 1, name: "Ritesh" },
      { id: 2, name: "Sujay" },
      { id: 3, name: "Kapil" },
      { id: 4, name: "Robert" },
      { id: 5, name: "Stuart" },
      { id: 6, name: "Steve" },
      { id: 7, name: "Ben" },
      { id: 8, name: "Jos" },
    ]);

    members.pipe(
      map(data => data.name)
    ).subscribe(res => {
      this._designUtility.print(res, "elContainer");
    });
  }  
}