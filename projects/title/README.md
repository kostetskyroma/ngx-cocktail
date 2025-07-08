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
[![Support](https://img.shields.io/badge/Support-Angular%2017%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2018%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2019%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2020%2B-blue.svg?style=flat-square)]()

## What's New

- Angular 20 support 🥳

## Compatibility

| Angular 20  | Angular 19  | Angular 18  | Angular 17  | Angular 16  | Angular 15  | Angular 14  |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| >=`v20.0.0` | >=`v19.0.0` | >=`v18.0.0` | >=`v17.0.0` | >=`v16.0.0` | >=`v15.0.0` | >=`v14.0.1` |

## Installation

        npm install @ngx-cocktail/title

## Usage

        import { Title, Features } from '@ngx-cocktail/title';

        @Features([TitleFeature('My Website: My Title')])
        export class AppComponent implements OnInit {}

## Publishing

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:title`
4. Navigate to `dist/title`
5. Run `npm publish`
