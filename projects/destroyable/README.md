# @ngx-cocktail/destroyable

The library contains code for destoyable feature.

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
[![Support](https://img.shields.io/badge/Support-Angular%2017%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2018%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2019%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2020%2B-blue.svg?style=flat-square)]()

## What's New

- Angular 20 support 🥳

## Compatibility

| Angular 20  | Angular 19  | Angular 18  | Angular 17  | Angular 16  | Angular 15  | Angular 14  | Angular 13  | Angular 12  | Angular 11  | Angular 10  |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| >=`v20.0.0` | >=`v19.0.0` | >=`v18.0.0` | >=`v17.0.0` | >=`v16.0.0` | >=`v15.0.0` | >=`v14.0.1` | >=`v13.0.1` | >=`v12.0.1` | >=`v11.0.1` | >=`v10.0.1` |

## Installation

        npm install @ngx-cocktail/destroyable

## Usage

        import { DestroyableFeature, Features } from '@ngx-cocktail/destroyable';

        @Features([DestroyableFeature()])
        export class AppComponent implements OnInit {
            public destroyed$!: Observable<unknown>;

            ngOnInit(): void {
                interval(1000)
                .pipe(takeUntil(this.destroyed$))
                .subscribe((value) => {
                    ...
                });
            }
        }

## Publishing

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:destroyable`
4. Navigate to `dist/destroyable`
5. Run `npm publish`
