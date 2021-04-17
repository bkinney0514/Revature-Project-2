import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreekPastaSaladComponent } from './greek-pasta-salad.component';

describe('GreekPastaSaladComponent', () => {
  let component: GreekPastaSaladComponent;
  let fixture: ComponentFixture<GreekPastaSaladComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreekPastaSaladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreekPastaSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Greek Pasta Salad', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Greek Pasta Salad'`, () => {
    const fixture = TestBed.createComponent(GreekPastaSaladComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Greek Pasta Salad');
  });

  it(`should have a boolean show = true`, () => {
    const fixture = TestBed.createComponent(GreekPastaSaladComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });

});
