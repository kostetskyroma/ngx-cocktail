import { Component, OnInit } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { TitleFeature } from 'projects/title/src/public-api';

@Component({
  selector: 'app-title-nested-second',
  templateUrl: './title-nested-second.component.html',
  styleUrls: ['./title-nested-second.component.scss'],
  standalone: true,
})
@Features([TitleFeature('Title: Nested Second')])
export class TitleNestedSecondComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
