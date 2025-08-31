import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarList } from './similar-list';

describe('SimilarList', () => {
  let component: SimilarList;
  let fixture: ComponentFixture<SimilarList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
