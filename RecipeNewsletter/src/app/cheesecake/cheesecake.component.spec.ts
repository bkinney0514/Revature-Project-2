import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakeComponent } from './cheesecake.component';

describe('CheesecakeComponent', () => {
  let component: CheesecakeComponent;
  let fixture: ComponentFixture<CheesecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheesecakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Cheesecake', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Cheesecake'`, () => {
    const fixture = TestBed.createComponent(CheesecakeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cheesecake');
  });

  it(`should have a boolean show = true`, () => {
    const fixture = TestBed.createComponent(CheesecakeComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
