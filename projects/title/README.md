# @ngx-cocktail/title

[![npm version](https://img.shields.io/npm/v/@ngx-cocktail/title.svg)](https://www.npmjs.com/package/@ngx-cocktail/title)
[![npm downloads](https://img.shields.io/npm/dm/@ngx-cocktail/title.svg)](https://www.npmjs.com/package/@ngx-cocktail/title)
[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-cocktail)](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE)

A lightweight Angular library that provides declarative document title management through a feature-based approach. Set and manage page titles with minimal boilerplate code using Angular's feature system.

## ✨ Features

- **Declarative title setting**: Set document titles using a simple feature decorator
- **Feature-based architecture**: Uses Angular's feature system for clean, declarative code
- **Hierarchical title management**: Nested components can override parent titles
- **Zero boilerplate**: No need to manually inject Title service or manage title state
- **Type-safe**: Full TypeScript support with proper typing
- **Framework integration**: Seamlessly works with Angular's built-in Title service
- **Lightweight**: Minimal bundle size impact

## 🚀 Quick Start

### Installation

```bash
npm install @ngx-cocktail/title
```

### Basic Usage

```typescript
import { Component } from "@angular/core";
import { TitleFeature, Features } from "@ngx-cocktail/title";

@Component({
  selector: "app-example",
  template: "<div>My Page Content</div>",
})
@Features([TitleFeature("My Website: Home Page")])
export class ExampleComponent {}
```

## 📖 Documentation

### How It Works

The `TitleFeature` automatically injects Angular's `Title` service and sets the document title when the component is initialized. The feature uses Angular's dependency injection system to access the Title service from `@angular/platform-browser`.

### API Reference

#### `TitleFeature(title: string)`

A feature function that sets the document title for a component.

**Parameters:**

- `title` - The title string to set for the document

**Returns:** `FeatureFunction` - A feature function that can be used with the `@Features()` decorator.

#### `Features(features: FeatureFunction[])`

A decorator that applies features to a component.

**Parameters:**

- `features` - Array of feature functions to apply

### Advanced Usage

#### Nested Component Hierarchy

When you have parent and nested components with `TitleFeature`, the nested component's title will take precedence:

```typescript
// Parent component
@Component({
  selector: "app-parent",
  template: "<app-child></app-child>",
})
@Features([TitleFeature("Parent Title")])
export class ParentComponent {}

// Child component
@Component({
  selector: "app-child",
  template: "<div>Child content</div>",
})
@Features([TitleFeature("Child Title")])
export class ChildComponent {}
// Result: Document title will be "Child Title"
```

#### Dynamic Titles

You can use template literals or computed values for dynamic titles:

```typescript
@Component({
  selector: "app-dynamic",
  template: "<div>User Profile</div>",
})
@Features([TitleFeature(`User Profile: ${this.userName}`)])
export class DynamicComponent {
  userName = "John Doe";
}
```

#### Multiple Features

Combine with other features using the `@Features()` decorator:

```typescript
import { DestroyableFeature } from "@ngx-cocktail/destroyable";
import { TitleFeature, Features } from "@ngx-cocktail/title";

@Component({
  selector: "app-advanced",
  template: "<div>Advanced component</div>",
})
@Features([TitleFeature("Advanced Page"), DestroyableFeature()])
export class AdvancedComponent {
  // Component with both title and destroyable features
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

## 📚 Best Practices

1. **Use descriptive titles** that clearly indicate the current page or section
2. **Follow a consistent naming pattern** across your application (e.g., "App Name: Page Name")
3. **Consider SEO implications** when setting titles for public pages
4. **Use nested titles strategically** to provide context in complex component hierarchies
5. **Combine with other features** for comprehensive component functionality

## 📝 Important Notes

- This feature is **experimental** and may contain known or undiscovered issues
- Requires the `Title` service to be available in your application (included by default in Angular)
- The title is set when the component is initialized, not when it's destroyed
- Nested components will override parent titles when both use `TitleFeature`
- Works best with Angular's standalone components and modern Angular patterns

## 🚧 TODO

- [ ] Add opportunity to set default title for application
- [ ] Support for dynamic title updates during component lifecycle
- [ ] Integration with Angular Router for automatic title management

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](https://github.com/kostetskyroma/ngx-cocktail/blob/master/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kostetskyroma/ngx-cocktail/blob/master/LICENSE) file for details.

## 🔗 Related

- [@ngx-cocktail/common](https://www.npmjs.com/package/@ngx-cocktail/common) - Common utilities for ngx-cocktail
- [@ngx-cocktail/destroyable](https://www.npmjs.com/package/@ngx-cocktail/destroyable) - Automatic subscription cleanup for Angular

## 💬 Support

- 📧 [GitHub Issues](https://github.com/kostetskyroma/ngx-cocktail/issues)
- 📖 [Documentation](https://github.com/kostetskyroma/ngx-cocktail)
- ⭐ [Star the project](https://github.com/kostetskyroma/ngx-cocktail/stargazers)

## 📦 Publishing

1. Commit & push your changes
2. Update a version in package.json
3. Run `npm run build:title`
4. Run `cd dist/title`
5. Run `npm publish`

---

Made with ❤️ by the ngx-cocktail team
