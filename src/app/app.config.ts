import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideDynamicHooks } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './components/example/example.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideDynamicHooks({
      parsers: [ExampleComponent],
    })
  ]
};
