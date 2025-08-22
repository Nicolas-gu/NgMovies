import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivForm } from './reactiv-form';

describe('ReactivForm', () => {
  let component: ReactivForm;
  let fixture: ComponentFixture<ReactivForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
