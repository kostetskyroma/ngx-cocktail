# @ngx-cocktail

The package allows a developers to use features from Angular Ivy.

The Angular Ivy runtime introduces a new concept called component features. In the release of Ivy, component features are not publically available. However, component features are applied internally by Angular to all components.

Component features are mixins for components. They add, remove or modify traits at runtime.

Custom decorators are questionable. After several years, they are still not ratified in an ECMAScript standard. Their syntax or semantics might change. Hence, they might never make it into the language, rendering them in limbo in TypeScript and other transpiled languages.
Additionally, custom decorators are by default not tree-shakable.




Warning! This feature is experimental and can include known and undiscovered errors. 

## @ngx-cocktail/common

The library contains common code for ngx-cocktail features

## Install

        npm install @ngx-cocktail/common

## How to use

        import { Features } from '@ngx-cocktail/common';

        @Features([YourFeature()])
        export class AppComponent implements OnInit {}



[Source](https://github.com/kostetskyroma/ngx-cocktail/tree/master/projects/common)
<br>
[NPM](https://www.npmjs.com/package/@ngx-cocktail/common)

## @ngx-cocktail/destroyable

The library contains code for destoyable feature

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
        
[Source](https://github.com/kostetskyroma/ngx-cocktail/tree/master/projects/destroyable)
<br>
[NPM](https://www.npmjs.com/package/@ngx-cocktail/destroyable)
