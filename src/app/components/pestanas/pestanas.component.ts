import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pestanas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pestanas.component.html',
  styleUrl: './pestanas.component.scss'
})
export class PestanasComponent implements OnInit{

  apiService = inject(ApiService);
  isActive: string = 'eventos';

  ngOnInit(): void {
    this.apiService.getRequest('https://www.prevenirexpress.com:5000/')
  }


}
