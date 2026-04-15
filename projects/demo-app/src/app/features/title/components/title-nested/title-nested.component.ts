import { Component, OnInit } from '@angular/core';
import { Features, TitleFeature } from 'projects/title/src/public-api';

@Component({
  selector: 'app-title-nested',
  templateUrl: './title-nested.component.html',
  styleUrls: ['./title-nested.component.scss'],
  standalone: true,
})
@Features([TitleFeature('Title: Nested')])
export class TitleNestedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit: TitleNestedComponent');
  }
}
