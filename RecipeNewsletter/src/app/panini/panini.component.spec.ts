import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniniComponent } from './panini.component';

describe('PaniniComponent', () => {
  let component: PaniniComponent;
  let fixture: ComponentFixture<PaniniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaniniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaniniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display Grilled Panini', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Grilled Panini'`, () => {
    const fixture = TestBed.createComponent(PaniniComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Grilled Panini');
  });

  it(`should have a boolean show = true`, () => {
    const fixture = TestBed.createComponent(PaniniComponent);
    const app = fixture.componentInstance;
    expect(app.show).toEqual(true);
  });
});
