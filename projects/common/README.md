# @ngx-cocktail/common

The library contains common code for ngx-cocktail features

## Install

        npm install @ngx-cocktail/common

## How to use

        import { Features } from '@ngx-cocktail/common';

        @Features([YourFeature()])
        export class AppComponent implements OnInit {}

## How to publish

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:common`
4. Navigate to `dist/common`
5. Run `npm publish`
