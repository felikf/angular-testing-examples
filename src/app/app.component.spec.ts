import { TestBed, async, fakeAsync, ComponentFixture, flush, tick } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

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

  xit('async - flush', fakeAsync(() => {
    expect(component.value).toBeFalsy();

    fixture.detectChanges(); // ngOnInit

    expect(component.value).toBeFalsy();
    flush(); // flush does not flush recurring events

    expect(component.value).toBe('foo');
  }));

  it('async - tick', fakeAsync(() => {
    expect(component.value).toBeFalsy();

    fixture.detectChanges(); // ngOnInit

    expect(component.value).toBeFalsy();
    tick();

    expect(component.value).toBe('foo');
  }));

  it('should pass', done => {
    const eventEmitter2 = new EventEmitter();
    eventEmitter2.emit('B');
    eventEmitter2.subscribe(v => {
      expect(v).toBe('B');
      done();
    });
  });
});
