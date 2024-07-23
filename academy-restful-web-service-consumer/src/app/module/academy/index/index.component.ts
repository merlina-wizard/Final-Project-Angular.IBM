import { Component, inject, Inject, OnInit } from '@angular/core';
import { academy_service_token, AcademyServiceI } from '../academyI.service';
import { AcademyService } from '../academy.service';
import { Academy } from '../../../model/Academy.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  providers:[{provide: academy_service_token, useClass: AcademyService}],
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  academies: Academy[] = [];

  private academyService = inject<AcademyServiceI>(academy_service_token);

  getAcademies(): void {
    this.academyService.getAcademies().subscribe({
      next: (res) => {
        this.academies = res;
        console.log('Data fetched successfully', res);
      },
      error: (err) => {
        console.error('Error fetching data', err);
      }
    });
  }

  removeAcademy(code: string) {

    this.academyService.deleteAcademy(code).subscribe(res => {
      console.log(res.data);
      this.getAcademies();
    });
  }

  ngOnInit(): void {
    this.getAcademies();
  }

}


