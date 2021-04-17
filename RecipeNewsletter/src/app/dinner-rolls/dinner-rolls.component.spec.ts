import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRollsComponent } from './dinner-rolls.component';

describe('DinnerRollsComponent', () => {
  let component: DinnerRollsComponent;
  let fixture: ComponentFixture<DinnerRollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerRollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Sweet Dinner Rolls', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Sweet Dinner Rolls'`, () => {
    const fixture = TestBed.createComponent(DinnerRollsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Sweet Dinner Rolls');
  });

  it(`should have a boolean show = true`, () => {
    const fixture = TestBed.createComponent(DinnerRollsComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
