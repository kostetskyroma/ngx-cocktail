# @ngx-cocktail/common

[![npm version](https://img.shields.io/npm/v/@ngx-cocktail/common.svg)](https://www.npmjs.com/package/@ngx-cocktail/common)
[![npm downloads](https://img.shields.io/npm/dm/@ngx-cocktail/common.svg)](https://www.npmjs.com/package/@ngx-cocktail/common)
[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

**[Live Demo →](https://ngx-cocktail.netlify.app/)**

A foundational Angular library that provides the core infrastructure for feature-based component and directive enhancement. This library enables the use of Angular Ivy's feature system to create reusable, composable features that can be applied to components and directives through decorators.

## ⚠️ Experimental Status

**Warning!** This library is experimental and leverages Angular's internal Ivy APIs. It may contain known and undiscovered issues. Use with caution in production environments.

## ✨ Features

- **Feature-based architecture**: Create reusable features that can be applied to any component or directive
- **Ivy integration**: Leverages Angular's internal Ivy feature system for optimal performance
- **Type-safe**: Full TypeScript support with proper typing and IntelliSense
- **Composable**: Combine multiple features on a single component or directive
- **Framework agnostic**: Works with any Angular application using Ivy
- **Lightweight**: Minimal bundle size impact
- **Decorator-based**: Clean, declarative syntax using `@Features()` decorator

## 🚀 Quick Start

### Installation

```bash
# Latest version (current Angular major)
npm install @ngx-cocktail/common

# Specific Angular version via dist-tag
npm install @ngx-cocktail/common@v18
```

### Basic Usage

```typescript
import { Component } from "@angular/core";
import { Features } from "@ngx-cocktail/common";

// Define a custom feature
function MyFeature() {
  return (componentDef: any) => {
    // Your feature logic here
    console.log("MyFeature applied to component");
  };
}

@Component({
  selector: "app-example",
  template: "<div>Hello from enhanced component!</div>",
})
@Features([MyFeature()])
export class ExampleComponent {
  // Your component logic here
}
```

## 📖 Documentation

### Core Concepts

The `@ngx-cocktail/common` library provides the foundation for creating feature-based enhancements in Angular applications. It consists of several key components:

#### `Features` Decorator

The main decorator that applies features to components and directives.

```typescript
@Features([Feature1(), Feature2(), Feature3()])
export class MyComponent {}
```

#### Component Features

Features that can be applied to Angular components:

```typescript
import { ComponentFeature } from "@ngx-cocktail/common";

const MyComponentFeature: ComponentFeature = (componentDef) => {
  // Modify component definition
  // Add lifecycle hooks, properties, methods, etc.
};
```

#### Directive Features

Features that can be applied to Angular directives:

```typescript
import { DirectiveFeature } from "@ngx-cocktail/common";

const MyDirectiveFeature: DirectiveFeature = (directiveDef) => {
  // Modify directive definition
  // Add lifecycle hooks, properties, methods, etc.
};
```

### API Reference

#### `Features(features: Feature[])`

A decorator that applies features to a component or directive.

**Parameters:**

- `features` - Array of feature functions to apply

**Returns:** `ClassDecorator` - A decorator function

#### `ComponentFeature`

Interface for component features.

```typescript
interface ComponentFeature extends DirectiveFeature {
  <T>(componentDef: ɵComponentDef<T>): void;
  ngInherit?: true;
}
```

#### `DirectiveFeature`

Interface for directive features.

```typescript
interface DirectiveFeature {
  <T>(directiveDef: ɵDirectiveDef<T>): void;
  ngInherit?: true;
}
```

#### `Writable<T>`

Utility type that makes all properties of type `T` writable.

```typescript
type Writable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

### Advanced Usage

#### Creating Custom Features

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

@Component({
  selector: 'app-logged',
  template: '<div>Logged component</div>'
})
@Features([LoggingFeature()])
export class LoggedComponent {}
```

#### Combining Multiple Features

```typescript
@Component({
  selector: "app-enhanced",
  template: "<div>Enhanced component</div>",
})
@Features([LoggingFeature(), PerformanceFeature(), AnalyticsFeature()])
export class EnhancedComponent {}
```

#### Feature with Inheritance

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

1. **Keep features focused**: Each feature should have a single responsibility
2. **Use TypeScript**: Leverage TypeScript for better type safety and developer experience
3. **Test thoroughly**: Features modify internal Angular APIs, so comprehensive testing is essential
4. **Document your features**: Provide clear documentation for any custom features you create
5. **Handle errors gracefully**: Features can affect component lifecycle, so proper error handling is crucial
6. **Consider inheritance**: Use `ngInherit: true` for features that should be inherited by child components

## ⚠️ Important Notes

- **Experimental**: This library uses Angular's internal Ivy APIs which may change between versions
- **Breaking changes**: Updates to Angular may require updates to this library
- **Testing**: Always test features thoroughly in your specific use case
- **Performance**: Features are applied at component creation time, so keep them lightweight
- **Debugging**: Features can make debugging more complex, so use them judiciously

## 🔗 Related Libraries

This library serves as the foundation for other ngx-cocktail libraries:

- [@ngx-cocktail/destroyable](https://www.npmjs.com/package/@ngx-cocktail/destroyable) - Automatic subscription cleanup
- [@ngx-cocktail/title](https://www.npmjs.com/package/@ngx-cocktail/title) - Title management for Angular applications

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](https://github.com/kostetskyroma/ngx-cocktail/blob/master/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE) file for details.

## 💬 Support

- 📧 [GitHub Issues](https://github.com/kostetskyroma/ngx-cocktail/issues)
- 📖 [Documentation](https://github.com/kostetskyroma/ngx-cocktail)
- ⭐ [Star the project](https://github.com/kostetskyroma/ngx-cocktail/stargazers)

## 📦 Publishing

Each release branch (`release/vN`) maps to one Angular major. Use dist-tags so `latest` always points to the current Angular major.

**New Angular major** (publishes as `latest`):
```bash
npm run build:common
cd dist/common && npm publish --access public
```

**Patch on an older version** (use `--tag` to avoid overwriting `latest`):
```bash
npm run build:common
cd dist/common && npm publish --tag v18 --access public
```

See the [root README](https://github.com/kostetskyroma/ngx-cocktail#-publishing) for the full dist-tag workflow.

---

Made with ❤️ by the ngx-cocktail team
