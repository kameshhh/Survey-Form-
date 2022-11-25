import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesurveyComponent } from './singlesurvey.component';

describe('SinglesurveyComponent', () => {
  let component: SinglesurveyComponent;
  let fixture: ComponentFixture<SinglesurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
