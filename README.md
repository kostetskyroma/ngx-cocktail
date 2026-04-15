# @ngx-cocktail

[![npm version](https://img.shields.io/npm/v/ngx-cocktail.svg)](https://www.npmjs.com/package/ngx-cocktail)
[![npm downloads](https://img.shields.io/npm/dm/ngx-cocktail.svg)](https://www.npmjs.com/package/ngx-cocktail)
[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

A comprehensive Angular library suite that leverages Angular Ivy's component features to provide powerful, composable functionality for modern Angular applications. Built with a feature-based architecture that enables clean, declarative code with minimal boilerplate.

## 🎯 What is ngx-cocktail?

ngx-cocktail is a collection of Angular libraries that utilize Angular Ivy's internal component features system to provide enhanced functionality for components and directives. Instead of traditional decorators, ngx-cocktail uses Angular's feature system to add, remove, or modify component traits at runtime.

### Why Component Features?

- **Performance**: Leverages Angular's internal Ivy APIs for optimal performance
- **Tree-shakable**: Features are automatically tree-shakable by default
- **Composable**: Combine multiple features on a single component
- **Type-safe**: Full TypeScript support with proper typing
- **Future-proof**: Uses Angular's internal architecture rather than experimental decorators

## ⚠️ Experimental Status

**Warning!** This library suite is experimental and leverages Angular's internal Ivy APIs. While these APIs are used internally by Angular, they are not officially part of the public API and may change between versions. Use with caution in production environments.

## 📦 Available Packages

### Core Package

| Package                                   | Description                                                 | NPM                                                                                                                         |
| ----------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [@ngx-cocktail/common](./projects/common) | Core infrastructure for feature-based component enhancement | [![npm version](https://img.shields.io/npm/v/@ngx-cocktail/common.svg)](https://www.npmjs.com/package/@ngx-cocktail/common) |

### Feature Packages

| Package                                             | Description                           | NPM                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [@ngx-cocktail/destroyable](./projects/destroyable) | Automatic RxJS subscription cleanup   | [![npm version](https://img.shields.io/npm/v/@ngx-cocktail/destroyable.svg)](https://www.npmjs.com/package/@ngx-cocktail/destroyable) |
| [@ngx-cocktail/title](./projects/title)             | Declarative document title management | [![npm version](https://img.shields.io/npm/v/@ngx-cocktail/title.svg)](https://www.npmjs.com/package/@ngx-cocktail/title)             |

## 🚀 Quick Start

### Installation

Install the packages you need:

```bash
# Core package (required for all features)
npm install @ngx-cocktail/common

# Feature packages (install as needed)
npm install @ngx-cocktail/destroyable
npm install @ngx-cocktail/title
```

### Basic Usage

```typescript
import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Features } from "@ngx-cocktail/common";
import { DestroyableFeature } from "@ngx-cocktail/destroyable";
import { TitleFeature } from "@ngx-cocktail/title";

@Component({
  selector: "app-example",
  template: "<div>Counter: {{ counter }}</div>",
})
@Features([DestroyableFeature(), TitleFeature("My App: Counter Page")])
export class ExampleComponent implements OnInit {
  public destroyed$!: Observable<unknown>;
  public counter = 0;

  ngOnInit(): void {
    // Automatic cleanup with takeUntil
    interval(1000)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.counter = value;
      });
  }
}
```

## 📖 Documentation

### Core Concepts

#### Component Features

Component features are mixins that can be applied to Angular components at runtime. They modify the component definition to add new functionality, lifecycle hooks, properties, or methods.

```typescript
import { ComponentFeature } from '@ngx-cocktail/common';

function LoggingFeature() {
  return (componentDef: any) => {
    const originalFactory = componentDef.factory;

    componentDef.factory = () => {
      const instance = originalFactory();
      console.log(`Component ${componentDef.type.name} created`);
      return instance;
    };
  } as ComponentFeature;
}
```

#### The Features Decorator

The `@Features()` decorator applies one or more features to a component or directive:

```typescript
@Features([Feature1(), Feature2(), Feature3()])
export class MyComponent {}
```

### Available Features

#### 🧹 Destroyable Feature

Automatically manage RxJS subscriptions with zero boilerplate.

```typescript
import { DestroyableFeature, Features } from "@ngx-cocktail/destroyable";

@Component({
  selector: "app-clean",
  template: "<div>Clean component</div>",
})
@Features([DestroyableFeature()])
export class CleanComponent implements OnInit {
  public destroyed$!: Observable<unknown>;

  ngOnInit(): void {
    // Automatically cleaned up on destroy
    this.dataService
      .getData()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => (this.data = data));
  }
}
```

**Benefits:**

- ✅ No manual `OnDestroy` implementation
- ✅ No subscription arrays to manage
- ✅ Automatic memory leak prevention
- ✅ Clean, declarative syntax

#### 📄 Title Feature

Set document titles declaratively with hierarchical support.

```typescript
import { TitleFeature, Features } from "@ngx-cocktail/title";

@Component({
  selector: "app-page",
  template: "<div>Page content</div>",
})
@Features([TitleFeature("My App: Dashboard")])
export class PageComponent {}
```

**Benefits:**

- ✅ No manual Title service injection
- ✅ Hierarchical title management
- ✅ SEO-friendly
- ✅ Clean, declarative syntax

### Advanced Usage

#### Creating Custom Features

```typescript
import { ComponentFeature } from '@ngx-cocktail/common';

function PerformanceFeature() {
  return (componentDef: any) => {
    const originalFactory = componentDef.factory;

    componentDef.factory = () => {
      const startTime = performance.now();
      const instance = originalFactory();
      const endTime = performance.now();

      console.log(`Component created in ${endTime - startTime}ms`);
      return instance;
    };
  } as ComponentFeature;
}

@Component({
  selector: 'app-monitored',
  template: '<div>Monitored component</div>'
})
@Features([PerformanceFeature()])
export class MonitoredComponent {}
```

#### Combining Multiple Features

```typescript
@Component({
  selector: "app-advanced",
  template: "<div>Advanced component</div>",
})
@Features([DestroyableFeature(), TitleFeature("Advanced Page"), PerformanceFeature(), LoggingFeature()])
export class AdvancedComponent {
  // Component with multiple features
}
```

#### Feature Inheritance

Features can be marked as inheritable to propagate to child components:

```typescript
function InheritableFeature() {
  const feature = (componentDef: any) => {
    // Feature logic
  };

  feature.ngInherit = true; // Makes the feature inheritable
  return feature as ComponentFeature;
}
```

## 🔧 Compatibility

| Angular Version | Library Version | npm tag   | Status       |
| --------------- | --------------- | --------- | ------------ |
| Angular 20      | >= v20.0.0      | `latest`  | ✅ Supported |
| Angular 19      | >= v19.0.0      | `v19`     | ✅ Supported |
| Angular 18      | >= v18.0.0      | `v18`     | ✅ Supported |
| Angular 17      | >= v17.0.0      | `v17`     | ✅ Supported |
| Angular 16      | >= v16.0.0      | `v16`     | ✅ Supported |
| Angular 15      | >= v15.0.0      | `v15`     | ✅ Supported |
| Angular 14      | >= v14.0.1      | `v14`     | ✅ Supported |
| Angular 13      | >= v13.0.1      | `v13`     | ✅ Supported |
| Angular 12      | >= v12.0.1      | `v12`     | ✅ Supported |
| Angular 11      | >= v11.0.1      | `v11`     | ✅ Supported |
| Angular 10      | >= v10.0.1      | `v10`     | ✅ Supported |

Install for a specific Angular version using its npm tag:

```bash
npm install @ngx-cocktail/common@v18
npm install @ngx-cocktail/destroyable@v18
npm install @ngx-cocktail/title@v18
```

## 📚 Best Practices

### 1. Feature Composition

- Combine related features for comprehensive functionality
- Use the `@Features()` decorator for clean, declarative code
- Keep features focused and single-purpose

### 2. Performance Considerations

- Features are applied at component definition time, not runtime
- Use features sparingly to avoid performance overhead
- Consider the impact of multiple features on bundle size

### 3. Type Safety

- Always use proper TypeScript types for features
- Leverage the provided interfaces (`ComponentFeature`, `DirectiveFeature`)
- Use the `Writable<T>` utility type when modifying component definitions

### 4. Testing

- Test features in isolation
- Mock dependencies appropriately
- Verify feature behavior in component lifecycle

## 🚧 Limitations & Considerations

### Known Limitations

- **Experimental APIs**: Uses Angular's internal Ivy APIs which may change
- **Version Lock-in**: Features may not work across major Angular versions
- **Debugging**: Internal APIs may be harder to debug than public APIs
- **Documentation**: Limited official documentation for internal APIs

### Migration Considerations

- Features may need updates when upgrading Angular versions
- Test thoroughly after Angular upgrades
- Monitor for breaking changes in internal APIs

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](./CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/kostetskyroma/ngx-cocktail.git
cd ngx-cocktail

# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Start demo application
npm start
```

### Project Structure

```
ngx-cocktail/
├── projects/
│   ├── common/          # Core infrastructure
│   ├── destroyable/     # Subscription cleanup feature
│   ├── title/          # Title management feature
│   └── demo-app/       # Demo application
├── README.md
└── package.json
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🔗 Related Projects

- [Angular](https://angular.io/) - The web framework for building mobile and desktop web applications
- [RxJS](https://rxjs.dev/) - A library for reactive programming using Observables
- [ng-packagr](https://github.com/ng-packagr/ng-packagr) - Transpile your libraries to Angular Package Format

## 💬 Support & Community

- 📧 [GitHub Issues](https://github.com/kostetskyroma/ngx-cocktail/issues) - Report bugs and request features
- 📖 [Documentation](https://github.com/kostetskyroma/ngx-cocktail) - Browse the documentation
- ⭐ [Star the project](https://github.com/kostetskyroma/ngx-cocktail/stargazers) - Show your support
- 🐛 [Report bugs](https://github.com/kostetskyroma/ngx-cocktail/issues/new) - Help improve the library

## 📦 Publishing

Each release branch (`release/vN`) maps to one Angular major version. npm **dist-tags** (`latest`, `v20`, `v18`, …) let users install the right version for their Angular version without knowing exact patch numbers.

### dist-tags

| Tag      | Resolves to           | Who it's for                        |
| -------- | --------------------- | ----------------------------------- |
| `latest` | newest Angular major  | `npm install @ngx-cocktail/common`  |
| `v20`    | latest patch for v20  | Angular 20 users pinned to that tag |
| `v18`    | latest patch for v18  | Angular 18 users pinned to that tag |
| …        | …                     | …                                   |

> **Rule:** always publish with the default tag (`latest`) for the current Angular major. Always pass `--tag vN` for older Angular versions so `latest` is never overwritten.

### Publishing a new Angular major (e.g. Angular 22)

```bash
git checkout release/v22
npm install                        # get correct Angular version

npm run build:common
npm run build:destroyable
npm run build:title

# No --tag: defaults to "latest"
cd dist/common && npm publish --access public && cd ../..
cd dist/destroyable && npm publish --access public && cd ../..
cd dist/title && npm publish --access public && cd ../..
```

### Publishing a patch to an older version

```bash
git checkout release/v18
# bump version in projects/*/package.json first
npm install

npm run build:common
npm run build:destroyable
npm run build:title

# --tag v18 prevents overwriting "latest"
cd dist/common && npm publish --tag v18 --access public && cd ../..
cd dist/destroyable && npm publish --tag v18 --access public && cd ../..
cd dist/title && npm publish --tag v18 --access public && cd ../..
```

### Adding a dist-tag to an already-published version

```bash
npm dist-tag add @ngx-cocktail/common@18.0.0 v18
npm dist-tag add @ngx-cocktail/destroyable@18.0.3 v18
npm dist-tag add @ngx-cocktail/title@18.0.1 v18
```

### Verifying tags

```bash
npm dist-tag ls @ngx-cocktail/common
# latest: 20.0.1
# v19: 19.0.0
# v18: 18.0.0
# …
```

## 🎉 Acknowledgments

- The Angular team for the amazing Ivy architecture
- The open-source community for inspiration and feedback
- All contributors who help make this library better

---

<div align="center">
  <strong>Made with ❤️ by the ngx-cocktail team</strong>
  
  [![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail?style=social)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail?style=social)](https://github.com/kostetskyroma/ngx-cocktail/network)
  [![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
</div>
