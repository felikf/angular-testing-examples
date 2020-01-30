import { TestBed, async, fakeAsync, ComponentFixture, flush, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('async - flush', fakeAsync(() => {
    expect(component.value).toBeFalsy();

    fixture.detectChanges(); // ngOnInit

    expect(component.value).toBeFalsy();
    flush();

    expect(component.value).toBe('foo');
  }));

  it('async - tick', fakeAsync(() => {
    expect(component.value).toBeFalsy();

    fixture.detectChanges(); // ngOnInit

    expect(component.value).toBeFalsy();
    tick();

    expect(component.value).toBe('foo');
  }));

});
