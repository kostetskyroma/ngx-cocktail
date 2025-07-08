import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Features } from '@ngx-cocktail/common';
import { TitleFeature } from '@ngx-cocktail/title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
@Features([TitleFeature('Title: Main')])
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
