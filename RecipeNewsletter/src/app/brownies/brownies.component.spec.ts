import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesComponent } from './brownies.component';

describe('BrowniesComponent', () => {
  let component: BrowniesComponent;
  let fixture: ComponentFixture<BrowniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Brownies', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Brownies'`, () => {
    const fixture = TestBed.createComponent(BrowniesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Brownies');
  });

  it(`should have a boolean show = true`, () => {
    const fixture = TestBed.createComponent(BrowniesComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
