import { Component, OnInit } from '@angular/core';
import { Features } from '@ngx-cocktail/common';
import { TitleFeature } from '../../../../../title/src/lib/title.feature';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
@Features([TitleFeature('Title: Main')])
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
