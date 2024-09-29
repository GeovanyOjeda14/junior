import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAsistentesComponent } from './gestion-asistentes.component';

describe('GestionAsistentesComponent', () => {
  let component: GestionAsistentesComponent;
  let fixture: ComponentFixture<GestionAsistentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAsistentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAsistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
