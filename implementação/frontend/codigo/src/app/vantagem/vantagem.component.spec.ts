import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemComponent } from './vantagem.component';

describe('VantagemComponent', () => {
  let component: VantagemComponent;
  let fixture: ComponentFixture<VantagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
