import { Component, OnInit } from '@angular/core';
import { from, interval, of,  Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users = [
    {name: "Ritesh", skills: "Angular, Flutter, React"},
    {name: "Kapil", skills: "Flutter, React"},
    {name: "Sujay", skills: "React, Node"},
    {name: "Ramesh", skills: "Kuchh nahi"},
  ]
  sourceSubscription: Subscription;
  constructor() { }

  ngOnInit() {

    // Ex - 01
    const source = interval(1000);

    this.sourceSubscription = source.pipe(take(5),toArray())
      .subscribe(res => {
      console.log(res);
    })

    //Ex - 02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe(res => {
      console.log("Users: ", res);
    })

    // Ex - 03
    const source3 = of("Ritesh", "Kapil", "Sujay", "Ramesh");

    source3.pipe(toArray()).subscribe(res => {
      console.log("Users array: ", res);
    })
  }

}