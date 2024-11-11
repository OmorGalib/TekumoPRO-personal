import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormComponent } from './ag-form.component';

describe('AgFormComponent', () => {
  let component: AgFormComponent;
  let fixture: ComponentFixture<AgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
