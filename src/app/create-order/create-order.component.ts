import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { HeaderComponent } from "../header/header.component";
import { FormlyFieldButton } from './button-type.component';



@Component({
  selector: 'app-create-order',
  standalone: true,
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    HeaderComponent,
    FormlyFieldButton
],
})
export class CreateOrderComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-row',
      fieldGroup: [
        // Order Details Column
        {
          className: 'column',
          fieldGroup: [
            { template: '<div class="column-title">Order Details</div>' },
            {
              key: 'dispatcher',
              type: 'select',
              defaultValue: 'Van Disel',
              props: {
                label: 'Select Dispatcher',
                required: true,
                options: [
                  { value: 'Van Disel', label: 'Van Disel' },
                  { value: 'dispatcher1', label: 'Dispatcher 1' },
                  { value: 'dispatcher2', label: 'Dispatcher 2' }
                ],
              },
            },
            {
              key: 'customer',
              type: 'select',
              props: {
                label: 'Select Customer',
                required: true,
                options: [
                  { value: 'value 1', label: 'Value 1' },
                  { value: 'value 2', label: 'Value 2' },
                  { value: 'value 3', label: 'Value 3' }
                ],
              },
            },
            {
              key: 'project',
              type: 'input',
              props: {
                className:'select-project',
                label: 'Type To Select Project',
                disabled:true,
              },
            },
            {
              key: 'subProject',
              type: 'input',
              props: {
                label: 'Type To Select Sub Project',
              },
            },
            {
              key: 'workType',
              type: 'select',
              props: {
                label: 'Select Types of Work',
                options: [
                  { value: 'value 1', label: 'Value 1' },
                  { value: 'value 2', label: 'Value 2' },
                  { value: 'value 3', label: 'Value 3' }
                ],
              },
            },
            {
              key: 'serviceType',
              type: 'select',
              props: {
                label: 'Select Types of Service',
               options: [
                  { value: 'value 1', label: 'Value 1' },
                  { value: 'value 2', label: 'Value 2' },
                  { value: 'value 3', label: 'Value 3' }
                ], 
              },
            },
            {
              key: 'template',
              type: 'select',
              props: {
                label: 'Select Template',
                options: [
                  { value: 'value 1', label: 'Value 1' },
                  { value: 'value 2', label: 'Value 2' },
                  { value: 'value 3', label: 'Value 3' }
                ],
              },
            },
            {
              key: 'stage',
              type: 'select',
              defaultValue: 'RECIVE',
              props: {
                label: 'Stage',
                options: [
                  { value: 'RECIVE', label: 'RECIVE' },
                  { value: 'value 2', label: 'Value 2' },
                  { value: 'value 3', label: 'Value 3' }
                ],
              },
            },
            {
              className:'checkbox-design',
              key: 'highProfile',
              type: 'checkbox',
              props: {
                label: 'High Profile',
                required: true,
              },
            },
            {
              className:'checkbox-design',
              key: 'billIndividually',
              type: 'checkbox',
              props: {
                label: 'Bill Individually',
                disabled: true,
              },
            },
            {
              key: 'customerOrderNumber',
              type: 'input',
              props: {
                label: 'Customer Work Order Number',
              },
            },
            {
              key: 'customerPoNumber',
              type: 'input',
              props: {
                label: 'Customer Po Number',
              },
            },
            {
              key: 'customerRefNumber',
              type: 'input',
              props: {
                label: 'Customer Ref Number',
              },
            },
            {
              key: 'selectTeam',
              type: 'input',
              props: {
                label: 'Select Team',
                disabled:true,
              },
            },
          ],
        },

        // Order Location Column
        {
          className: 'column',
          fieldGroup: [
            { template: '<div class="column-title">Order Location</div>' },
            {
              key: 'locationName',
              type: 'input',
              props: {
                label: 'Location Name',
                required: true,
              },
            },
            {
              fieldGroupClassName:'location-row',
              fieldGroup:[
                {
                  key: 'locationCode',
                  type: 'input',
                  props: {
                    label: 'Location Code',
                    disabled:true,
                  },
                },
                {
                  type:'button',
                  // wrappers: ['formly-field-button'],
                  props:{
                    text:'Save Location',
                    onClick: () => alert('You clicked me!'),
                    disabled:true
                  },
                }
              ]
            },
            {
              key: 'address',
              type: 'input',
              props: {
                label: 'Address (Street Number and Street Name)',
                required: true,
              },
            },
            {
              key: 'suiteUnit',
              type: 'input',
              props: {
                label: 'Suite/Unit #',
              },
            },
            {
              key: 'locationType',
              type: 'select',
              defaultValue: 'Commercial',
              props: {
                label: 'Select Location Type',
                required: true,
                options: [
                  { value: 'Commercial', label: 'Commercial' },
                  { value: 'dispatcher1', label: 'Dispatcher 1' },
                  { value: 'dispatcher2', label: 'Dispatcher 2' }
                ],
              },
            },
            {
              fieldGroupClassName:'address-row',
              fieldGroup:[
                {
                  key: 'city',
                  type: 'input',
                  props: {
                    label: 'City',
                    required: true,
                  },
                },
                {
                  key: 'state',
                  type: 'input',
                  props: {
                    label: 'State',
                    required: true,
                  },
                },
                {
                  key: 'zip',
                  type: 'input',
                  props: {
                    label: 'Zip',
                    required: true,
                  },
                },
                {
                  key: 'country',
                  type: 'input',
                  props: {
                    label: 'Country',
                    required: true,
                  },
                },
              ]
            },
            {
              key: 'siteNote',
              type: 'textarea',
              props: {
                label: 'Site Note',
                rows: 2,
              },
            },
            {
              fieldGroupClassName:'contact-row',
              fieldGroup:[
                {
                  key: 'contactName',
                  type: 'input',
                  props: {
                    label: 'Contact Name',
                  },
                },
                {
                  key: 'contactPhone',
                  type: 'input',
                  props: {
                    label: 'Contact Phone',
                  },
                },
                {
                  key: 'contactEmail',
                  type: 'input',
                  props: {
                    label: 'Contact Email',
                  },
                }
              ]
            },
            {
              fieldGroupClassName:'support-row',
              fieldGroup:[
                {
                  key: 'supportName',
                  type: 'input',
                  props: {
                    label: 'Support Name',
                  },
                },
                {
                  key: 'supportPhone',
                  type: 'input',
                  props: {
                    label: 'Support Phone',
                  },
                },
              ]
            },
          ],
        },
        {
          className: 'column',
          fieldGroup: [
            { template: '<div class="column-title">Order Location</div>' },
            {
              key: 'locationName',
              type: 'input',
              props: {
                label: 'Location Name',
                required: true,
              },
            },
            {
              fieldGroupClassName:'location-row',
              fieldGroup:[
                {
                  key: 'locationCode',
                  type: 'input',
                  props: {
                    label: 'Location Code',
                    disabled:true,
                  },
                },
                {
                  type:'button',
                  // wrappers: ['formly-field-button'],
                  props:{
                    text:'Save Location',
                    onClick: () => alert('You clicked me!'),
                    disabled:true
                  },
                }
              ]
            },
            {
              key: 'address',
              type: 'input',
              props: {
                label: 'Address (Street Number and Street Name)',
                required: true,
              },
            },
            {
              key: 'suiteUnit',
              type: 'input',
              props: {
                label: 'Suite/Unit #',
              },
            },
            {
              key: 'locationType',
              type: 'select',
              defaultValue: 'Commercial',
              props: {
                label: 'Select Location Type',
                required: true,
                options: [
                  { value: 'Commercial', label: 'Commercial' },
                  { value: 'dispatcher1', label: 'Dispatcher 1' },
                  { value: 'dispatcher2', label: 'Dispatcher 2' }
                ],
              },
            },
            {
              fieldGroupClassName:'address-row',
              fieldGroup:[
                {
                  key: 'city',
                  type: 'input',
                  props: {
                    label: 'City',
                    required: true,
                  },
                },
                {
                  key: 'state',
                  type: 'input',
                  props: {
                    label: 'State',
                    required: true,
                  },
                },
                {
                  key: 'zip',
                  type: 'input',
                  props: {
                    label: 'Zip',
                    required: true,
                  },
                },
                {
                  key: 'country',
                  type: 'input',
                  props: {
                    label: 'Country',
                    required: true,
                  },
                },
              ]
            },
            {
              key: 'siteNote',
              type: 'textarea',
              props: {
                label: 'Site Note',
                rows: 2,
              },
            },
            {
              fieldGroupClassName:'contact-row',
              fieldGroup:[
                {
                  key: 'contactName',
                  type: 'input',
                  props: {
                    label: 'Contact Name',
                  },
                },
                {
                  key: 'contactPhone',
                  type: 'input',
                  props: {
                    label: 'Contact Phone',
                  },
                },
                {
                  key: 'contactEmail',
                  type: 'input',
                  props: {
                    label: 'Contact Email',
                  },
                }
              ]
            },
            {
              fieldGroupClassName:'support-row',
              fieldGroup:[
                {
                  key: 'supportName',
                  type: 'input',
                  props: {
                    label: 'Support Name',
                  },
                },
                {
                  key: 'supportPhone',
                  type: 'input',
                  props: {
                    label: 'Support Phone',
                  },
                },
              ]
            },
          ],
        },
        {
          className: 'column',
          fieldGroup: [
            { template: '<div class="column-title">Order Location</div>' },
            {
              key: 'locationName',
              type: 'input',
              props: {
                label: 'Location Name',
                required: true,
              },
            },
            {
              fieldGroupClassName:'location-row',
              fieldGroup:[
                {
                  key: 'locationCode',
                  type: 'input',
                  props: {
                    label: 'Location Code',
                    disabled:true,
                  },
                },
                {
                  type:'button',
                  // wrappers: ['formly-field-button'],
                  props:{
                    text:'Save Location',
                    onClick: () => alert('You clicked me!'),
                    disabled:true
                  },
                }
              ]
            },
            {
              key: 'address',
              type: 'input',
              props: {
                label: 'Address (Street Number and Street Name)',
                required: true,
              },
            },
            {
              key: 'suiteUnit',
              type: 'input',
              props: {
                label: 'Suite/Unit #',
              },
            },
            {
              key: 'locationType',
              type: 'select',
              defaultValue: 'Commercial',
              props: {
                label: 'Select Location Type',
                required: true,
                options: [
                  { value: 'Commercial', label: 'Commercial' },
                  { value: 'dispatcher1', label: 'Dispatcher 1' },
                  { value: 'dispatcher2', label: 'Dispatcher 2' }
                ],
              },
            },
            {
              fieldGroupClassName:'address-row',
              fieldGroup:[
                {
                  key: 'city',
                  type: 'input',
                  props: {
                    label: 'City',
                    required: true,
                  },
                },
                {
                  key: 'state',
                  type: 'input',
                  props: {
                    label: 'State',
                    required: true,
                  },
                },
                {
                  key: 'zip',
                  type: 'input',
                  props: {
                    label: 'Zip',
                    required: true,
                  },
                },
                {
                  key: 'country',
                  type: 'input',
                  props: {
                    label: 'Country',
                    required: true,
                  },
                },
              ]
            },
            {
              key: 'siteNote',
              type: 'textarea',
              props: {
                label: 'Site Note',
                rows: 2,
              },
            },
            {
              fieldGroupClassName:'contact-row',
              fieldGroup:[
                {
                  key: 'contactName',
                  type: 'input',
                  props: {
                    label: 'Contact Name',
                  },
                },
                {
                  key: 'contactPhone',
                  type: 'input',
                  props: {
                    label: 'Contact Phone',
                  },
                },
                {
                  key: 'contactEmail',
                  type: 'input',
                  props: {
                    label: 'Contact Email',
                  },
                }
              ]
            },
            {
              fieldGroupClassName:'support-row',
              fieldGroup:[
                {
                  key: 'supportName',
                  type: 'input',
                  props: {
                    label: 'Support Name',
                  },
                },
                {
                  key: 'supportPhone',
                  type: 'input',
                  props: {
                    label: 'Support Phone',
                  },
                },
              ]
            },
          ],
        },
      ],
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
