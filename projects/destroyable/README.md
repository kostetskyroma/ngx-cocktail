# @ngx-cocktail/destroyable

[![npm version](https://img.shields.io/npm/v/@ngx-cocktail/destroyable.svg)](https://www.npmjs.com/package/@ngx-cocktail/destroyable)
[![npm downloads](https://img.shields.io/npm/dm/@ngx-cocktail/destroyable.svg)](https://www.npmjs.com/package/@ngx-cocktail/destroyable)
[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

**[Live Demo →](https://ngx-cocktail.netlify.app/#destroyable)**

A lightweight Angular library that provides automatic subscription cleanup through a feature-based approach. Eliminate memory leaks by automatically managing RxJS subscriptions with minimal boilerplate code.

## ✨ Features

- **Automatic cleanup**: Automatically unsubscribe from RxJS observables when components are destroyed
- **Feature-based architecture**: Uses Angular's feature system for clean, declarative code
- **Zero boilerplate**: No need to manually implement `OnDestroy` or manage subscription arrays
- **Type-safe**: Full TypeScript support with proper typing
- **Framework agnostic**: Works with any RxJS-based Angular application
- **Lightweight**: Minimal bundle size impact

## 🚀 Quick Start

### Installation

```bash
# Latest version (current Angular major)
npm install @ngx-cocktail/destroyable

# Specific Angular version via dist-tag
npm install @ngx-cocktail/destroyable@v18
```

### Basic Usage

```typescript
import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DestroyableFeature, Features } from "@ngx-cocktail/destroyable";

@Component({
  selector: "app-example",
  template: "<div>Counter: {{ counter }}</div>",
})
@Features([DestroyableFeature()])
export class ExampleComponent implements OnInit {
  public destroyed$!: Observable<unknown>;
  public counter = 0;

  ngOnInit(): void {
    // This subscription will be automatically cleaned up when the component is destroyed
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.counter = value;
      });
  }
}
```

## 📖 Documentation

### How It Works

The `DestroyableFeature` automatically injects a `destroyed$` observable into your component. When the component is destroyed, this observable emits and completes, allowing you to use it with `takeUntil()` to automatically unsubscribe from any RxJS subscriptions.

### API Reference

#### `DestroyableFeature()`

A feature function that adds destroyable functionality to a component.

**Returns:** `FeatureFunction` - A feature function that can be used with the `@Features()` decorator.

#### `Features(features: FeatureFunction[])`

A decorator that applies features to a component.

**Parameters:**

- `features` - Array of feature functions to apply

#### `destroyed$: Observable<unknown>`

An observable that emits when the component is destroyed. Use this with `takeUntil()` to automatically unsubscribe from subscriptions.

### Advanced Usage

#### Multiple Subscriptions

```typescript
@Component({
  selector: "app-advanced",
  template: `
    <div>Data: {{ data }}</div>
    <div>Status: {{ status }}</div>
  `,
})
@Features([DestroyableFeature()])
export class AdvancedComponent implements OnInit {
  public destroyed$!: Observable<unknown>;
  public data: any;
  public status = "idle";

  ngOnInit(): void {
    // Multiple subscriptions with automatic cleanup
    this.dataService
      .getData()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => (this.data = data));

    this.statusService
      .getStatus()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((status) => (this.status = status));
  }
}
```

#### Custom Cleanup Logic

```typescript
@Component({
  selector: "app-custom-cleanup",
  template: "<div>Component with custom cleanup</div>",
})
@Features([DestroyableFeature()])
export class CustomCleanupComponent implements OnInit {
  public destroyed$!: Observable<unknown>;

  ngOnInit(): void {
    // Your subscriptions here
  }

  ngOnDestroy() {
    // Custom cleanup logic
    console.log("Component destroyed with custom cleanup");
  }
}
```

## 🔧 Compatibility

| Angular Version | Library Version |
| --------------- | --------------- |
| Angular 21      | >= v21.0.0      |
| Angular 20      | >= v20.0.0      |
| Angular 19      | >= v19.0.0      |
| Angular 18      | >= v18.0.0      |
| Angular 17      | >= v17.0.0      |
| Angular 16      | >= v16.0.0      |
| Angular 15      | >= v15.0.0      |
| Angular 14      | >= v14.0.1      |
| Angular 13      | >= v13.0.1      |
| Angular 12      | >= v12.0.1      |
| Angular 11      | >= v11.0.1      |
| Angular 10      | >= v10.0.1      |

## 📚 Best Practices

1. **Always use `takeUntil(this.destroyed$)`** for RxJS subscriptions in components with the `DestroyableFeature`
2. **Don't manually unsubscribe** from subscriptions that use `takeUntil(this.destroyed$)`
3. **Keep the `destroyed$` property** as `Observable<unknown>` - the library handles the typing internally
4. **Use with standalone components** for the best experience
5. **Combine with other features** using the `@Features()` decorator

## 📝 Important Notes

- This feature is **experimental** and may contain known or undiscovered issues
- Always test thoroughly in your specific use case
- The `destroyed$` observable is automatically injected and should not be manually initialized
- Works best with Angular's standalone components and modern Angular patterns

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](https://github.com/kostetskyroma/ngx-cocktail/blob/master/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE) file for details.

## 🔗 Related

- [@ngx-cocktail/common](https://www.npmjs.com/package/@ngx-cocktail/common) - Common utilities for ngx-cocktail
- [@ngx-cocktail/title](https://www.npmjs.com/package/@ngx-cocktail/title) - Title management for Angular applications

## 💬 Support

- 📧 [GitHub Issues](https://github.com/kostetskyroma/ngx-cocktail/issues)
- 📖 [Documentation](https://github.com/kostetskyroma/ngx-cocktail)
- ⭐ [Star the project](https://github.com/kostetskyroma/ngx-cocktail/stargazers)

## 📦 Publishing

Each release branch (`release/vN`) maps to one Angular major. Use dist-tags so `latest` always points to the current Angular major.

**New Angular major** (publishes as `latest`):
```bash
npm run build:destroyable
cd dist/destroyable && npm publish --access public
```

**Patch on an older version** (use `--tag` to avoid overwriting `latest`):
```bash
npm run build:destroyable
cd dist/destroyable && npm publish --tag v18 --access public
```

See the [root README](https://github.com/kostetskyroma/ngx-cocktail#-publishing) for the full dist-tag workflow.

---

Made with ❤️ by the ngx-cocktail team
