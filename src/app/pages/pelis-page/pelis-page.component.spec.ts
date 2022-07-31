import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisPageComponent } from './pelis-page.component';

describe('PelisPageComponent', () => {
  let component: PelisPageComponent;
  let fixture: ComponentFixture<PelisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
