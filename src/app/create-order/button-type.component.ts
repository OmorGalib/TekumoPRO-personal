import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-button',
  standalone: true,
  template: `
    <button type="button" (click)="onClick($event)">
      {{ props['text'] }}
    </button>
  `,
})
export class FormlyFieldButton extends FieldType {
  onClick($event: Event) {
    if (this.props['onClick']) {
      this.props['onClick']($event);
    }
  }
}
