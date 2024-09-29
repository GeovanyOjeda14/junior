import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SweetAlertService } from '../../services/sweet-alert.service';


@Component({
  selector: 'app-gestion-eventos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gestion-eventos.component.html',
  styleUrl: './gestion-eventos.component.scss'
})
export class GestionEventosComponent implements OnInit {

  sweetAlertService = inject(SweetAlertService);
  formularioEventos!: FormGroup;

  ngOnInit(): void {
    this.inicializarFormualrio();
  }

  inicializarFormualrio() {

    this.formularioEventos = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      descripcion: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      lugar: new FormControl('', Validators.required),
      capacidad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(8)]),
      tipo: new FormControl('', Validators.required),
      valor_base: new FormControl('', [Validators.required, Validators.min(0)]),
      categoria: new FormControl('', Validators.required),
      fecha_apertura: new FormControl('', Validators.required),
      fecha_cierre: new FormControl('', Validators.required)
    });
  }

  guardarEvento() {

    console.log(this.formularioEventos);
    if(this.formularioEventos.invalid) {
      this.sweetAlertService.launchSwal('Error de validación', 'Error en el formulario por favor revisalo antes de enviar.', 'warning');
      return;
    }

    console.log('todo en orden');
  }

}
