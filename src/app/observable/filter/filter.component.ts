import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  dataArr = [
    { id: 1, name: "Ritesh", gender: "Male" },
    { id: 2, name: "Sujay", gender: "Female" },
    { id: 3, name: "Kapil", gender: "Male" },
    { id: 4, name: "Rahul", gender: "Male" },
    { id: 5, name: "Smriti", gender: "Female" },
    { id: 6, name: "Sanjana", gender: "Female" },
    { id: 7, name: "Steven", gender: "Male" },
    { id: 8, name: "Sanju", gender: "Male" },
    { id: 9, name: "Adyasha", gender: "Female" },
    { id: 10, name: "Riyan", gender: "Male" },
    { id: 11, name: "Jackline", gender: "Female" },
    { id: 12, name: "Shreyas", gender: "Male" },
  ];

  data;
  data2;
  data3;

  ngOnInit() {
    const source = from(this.dataArr);

    // Ex - 01 (Filter by length)

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data = res;
    });

    // Ex - 02 (Filter by Gender)

    source.pipe(
      filter(member => member.gender == "Male"),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data2 = res;
    })

    // Ex - 03 (nth item)

    source.pipe(
      filter(member => member.id <= 7),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data3 = res;
    })

  }

}