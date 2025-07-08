# @ngx-cocktail/title

The library contains code for title feature.

The feature sets the title of a current HTML document. Underhood, it injects Title from '@angular/platform-browser' and set your custom title.

Notes:

- If there are parent and nested components with TitleFeature, it will use nested.
- The title should be handled manually defining them on components

TODO:

- Add opportunity to set default title for application

Warning! This feature is experimental and can include known and undiscovered errors.

[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

[![Support](https://img.shields.io/badge/Support-Angular%2014%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2015%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2016%2B-blue.svg?style=flat-square)]()

## What's New

- Angular 16 support 🥳

## Compatibility

| Angular 16  | Angular 15  | Angular 14  |
| ----------- | ----------- | ----------- |
| >=`v16.0.0` | >=`v15.0.0` | >=`v14.0.1` |

## Installation

        npm install @ngx-cocktail/common @ngx-cocktail/title

## Usage

        import { Features } from '@ngx-cocktail/common';
        import { Title } from '@ngx-cocktail/title';

        @Features([TitleFeature('My Website: My Title')])
        export class AppComponent implements OnInit {}

## Publishing

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:title`
4. Navigate to `dist/title`
5. Run `npm publish`
