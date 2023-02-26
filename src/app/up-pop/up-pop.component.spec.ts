import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPopComponent } from './up-pop.component';

describe('UpPopComponent', () => {
  let component: UpPopComponent;
  let fixture: ComponentFixture<UpPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
