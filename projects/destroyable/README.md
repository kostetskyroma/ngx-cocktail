# @ngx-cocktail/destroyable

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

## How to publish

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:destroyable`
4. Navigate to `dist/destroyable`
5. Run `npm publish`
