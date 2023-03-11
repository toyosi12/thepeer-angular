import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepeerComponent } from './thepeer-send.component';

describe('ThepeerComponent', () => {
  let component: ThepeerComponent;
  let fixture: ComponentFixture<ThepeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThepeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThepeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
