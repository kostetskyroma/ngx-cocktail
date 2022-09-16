# @ngx-cocktail/destroyable

[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

[![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2011%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2012%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2013%2B-blue.svg?style=flat-square)]()

Warning! This feature is experimental and can include known and undiscovered errors.

The library contains code for destoyable feature

## Compatibility

| Angular 13  | Angular 12  | Angular 11  | Angular 10  | Angular 9  |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| >=`v13.0.1` | >=`v12.0.1` | >=`v11.0.1` | >=`v10.0.1` | >=`v9.0.1` |


## Install

        npm install @ngx-cocktail/common @ngx-cocktail/destroyable

## How to use

        import { Features } from '@ngx-cocktail/common';
        import { DestroyableFeature } from '@ngx-cocktail/destroyable';

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

## How to publish

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:destroyable`
4. Navigate to `dist/destroyable`
5. Run `npm publish`
