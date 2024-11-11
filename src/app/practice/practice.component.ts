import { Component } from '@angular/core';
import { FormlyComponent } from "./formly/formly.component";
import { AgFormComponent } from "./ag-form/ag-form.component";
import { AdvancedFormComponent } from "./advanced-form/advanced-form.component";

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [
    FormlyComponent,
    AgFormComponent,
    AdvancedFormComponent
],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {

}
