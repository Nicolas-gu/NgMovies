import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRelease } from './latest-release';

describe('LatestRelease', () => {
  let component: LatestRelease;
  let fixture: ComponentFixture<LatestRelease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestRelease]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestRelease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
