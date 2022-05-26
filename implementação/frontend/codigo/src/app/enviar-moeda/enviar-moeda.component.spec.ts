import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMoedaComponent } from './enviar-moeda.component';

describe('EnviarMoedaComponent', () => {
  let component: EnviarMoedaComponent;
  let fixture: ComponentFixture<EnviarMoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarMoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
