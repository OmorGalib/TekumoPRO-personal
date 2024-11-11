import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyFieldButton } from './app/create-order/button-type.component'; // Adjust path if necessary

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(
      FormlyModule.forRoot({
        types: [{ name: 'button', component: FormlyFieldButton }],
      }),
      FormlyMaterialModule,
      FormlyMatDatepickerModule,
      MatNativeDateModule,
    ),
  ],
}).catch((err) => console.error(err));
