import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

  data;
  data2;

  users = [
    {
      name: "Ritesh",
      skills: "Angular, React, Node",
      job: {
        title: "Full Stack Developer",
        exp: "10 years"
      }
    },
    {
      name: "Alex",
      skills: "Angular",
      job: {
        title: "Angular Developer",
        exp: "5 years"
      }
    },
    {
      name: "John",
      skills: "React",
      job: {
        title: "React Developer",
        exp: "8 years"
      }
    },
    {
      name: "Robert",
      skills: "HTML & CSS",
      job: {
        title: "Front end Developer",
        exp: "12 years"
      }
    },

  ]

  ngOnInit() {

    // Ex - 01

    from(this.users).pipe(
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data = res;
    })

    // Ex - 02

    from(this.users).pipe(
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })
  }

}