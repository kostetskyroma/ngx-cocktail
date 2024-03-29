# @ngx-cocktail

The package allows a developers to use features from Angular Ivy.

The Angular Ivy runtime introduces a new concept called component features. In the release of Ivy, component features are not publically available. However, component features are applied internally by Angular to all components.

Component features are mixins for components. They add, remove or modify traits at runtime.

Custom decorators are questionable. After several years, they are still not ratified in an ECMAScript standard. Their syntax or semantics might change. Hence, they might never make it into the language, rendering them in limbo in TypeScript and other transpiled languages.
Additionally, custom decorators are by default not tree-shakable.

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

## What's New

- Angular 14 support 🥳

## Compatibility

| Angular 14  | Angular 13  | Angular 12  | Angular 11  | Angular 10  | Angular 9  |
| ----------- | ----------- | ----------- | ----------- | ----------- | ---------- |
| >=`v14.0.1` | >=`v13.0.1` | >=`v12.0.1` | >=`v11.0.1` | >=`v10.0.1` | >=`v9.0.1` |

## @ngx-cocktail/common

The library contains common code for ngx-cocktail features

## Installation

        npm install @ngx-cocktail/common

## Usage

        import { Features } from '@ngx-cocktail/common';

        @Features([YourFeature()])
        export class AppComponent implements OnInit {}

[Source](https://github.com/kostetskyroma/ngx-cocktail/tree/master/projects/common)
<br>
[NPM](https://www.npmjs.com/package/@ngx-cocktail/common)

## @ngx-cocktail/destroyable

The library contains code for destoyable feature

## Installation

        npm install @ngx-cocktail/common @ngx-cocktail/destroyable

## Usage

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

[Source](https://github.com/kostetskyroma/ngx-cocktail/tree/master/projects/destroyable)
<br>
[NPM](https://www.npmjs.com/package/@ngx-cocktail/destroyable)

## @ngx-cocktail/title

The library contains code for title feature.

The feature sets the title of a current HTML document. Underhood, it injects Title from '@angular/platform-browser' and set your custom title.

Notes:

- If there are parent and nested components with TitleFeature, it will use nested.
- The title should be handled manually defining them on components

## Installation

        npm install @ngx-cocktail/common @ngx-cocktail/title

## Usage

        import { Features } from '@ngx-cocktail/common';
        import { Title } from '@ngx-cocktail/title';

        @Features([TitleFeature('My Website: My Title')])
        export class AppComponent implements OnInit {}

[Source](https://github.com/kostetskyroma/ngx-cocktail/tree/master/projects/title)
<br>
[NPM](https://www.npmjs.com/package/@ngx-cocktail/title)
