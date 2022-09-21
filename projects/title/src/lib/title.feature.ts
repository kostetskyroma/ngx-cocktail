import { inject, ɵDirectiveDef } from '@angular/core';
import { Writable } from '@ngx-cocktail/common';
import { Title } from '@angular/platform-browser';

export function TitleFeature(title: string) {
  return <T>(directiveDef: Writable<ɵDirectiveDef<T>>) => {
    const { factory, type } = directiveDef;

    directiveDef.factory = () => {
      const instance = factory?.(type) as T;

      try {
        const titleService = inject(Title);
        titleService.setTitle(title);
      } catch (err) {
        throw new Error(
          `inject(Title) not found! Please, provide it or remove TitleFeature() decorator`
        );
      }

      return instance;
    };
  };
}
