import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';

import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';

import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';

import { FormlyMatSliderModule } from '@ngx-formly/material/slider';


@Component({
  selector: 'app-formly',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule,
    CommonModule,
    FormlyMatNativeSelectModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    FormlyMatToggleModule,
    FormlyMatSliderModule
  ],
  templateUrl: './formly.component.html',
  styleUrl: './formly.component.scss'
})
export class FormlyComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Select',
      type: 'select',
      props: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'select_multi',
      type: 'select',
      props: {
        label: 'Select Multiple',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        multiple: true,
        selectAllOption: 'Select All',
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'Radio',
      type: 'radio',
      props: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'Input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'NativeSelect',
      type: 'native-select',
      props: {
        label: 'Native select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
        ],
      },
    },
    {
      key: 'Datepicker',
      type: 'datepicker',
      props: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'Toggle',
      type: 'toggle',
      props: {
        label: 'Toggle label',
        description: 'Toggle Description',
        required: true,
      },
    },
    {
      key: 'Slider',
      type: 'slider',
      props: {
        label: 'Slider label',
        // placeholder: 'Slider Placeholder',
        // thumbLabel: true,
        description: 'Slider Description',
        required: true,
      },
    },
  ];
}
