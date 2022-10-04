import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  jsonUrl ='https://jsonplaceholder.typicode.com/posts'
  constructor() { }

  ngOnInit(): void {
  }

}
