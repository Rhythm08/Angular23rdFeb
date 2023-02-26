import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpThePopComponent } from './up-the-pop.component';

describe('UpThePopComponent', () => {
  let component: UpThePopComponent;
  let fixture: ComponentFixture<UpThePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpThePopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpThePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
