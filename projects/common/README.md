# @ngx-cocktail/common

The library contains common code for ngx-cocktail features and allows to use features from Angular Ivy.

Warning! This feature is experimental and can include known and undiscovered errors.

[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

[![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2011%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2012%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2013%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2014%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2015%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2016%2B-blue.svg?style=flat-square)]()

## What's New

- Angular 16 support 🥳

## Compatibility

| Angular 16  | Angular 15  | Angular 14  | Angular 13  | Angular 12  | Angular 11  | Angular 10  | Angular 9  |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ---------- |
| >=`v16.0.0` | >=`v15.0.0` | >=`v14.0.1` | >=`v13.0.1` | >=`v12.0.1` | >=`v11.0.1` | >=`v10.0.1` | >=`v9.0.1` |

## Installation

        npm install @ngx-cocktail/common

## Usage

        import { Features } from '@ngx-cocktail/common';

        @Features([YourFeature()])
        export class AppComponent implements OnInit {}

## Publishing

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:common`
4. Navigate to `dist/common`
5. Run `npm publish`
