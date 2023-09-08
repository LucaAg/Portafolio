import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerProyectosComponent } from './spinner-proyectos.component';

describe('SpinnerProyectosComponent', () => {
  let component: SpinnerProyectosComponent;
  let fixture: ComponentFixture<SpinnerProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
