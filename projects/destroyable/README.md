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
