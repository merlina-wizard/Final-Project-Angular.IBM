import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { academy_service_token, AcademyServiceI } from '../academyI.service';
import { AcademyService } from '../academy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Academy } from '../../../model/Academy.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [{ provide: academy_service_token, useClass: AcademyService }],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  code! : string;

  form!: FormGroup;

  academy!: Academy;


  private academyService = inject<AcademyServiceI>(academy_service_token);

  constructor(private route: ActivatedRoute, private router: Router) {}

  submit() {

    this.academyService.updateAcademy(this.form.value).subscribe((res: any) => {
      console.log('Academy updated successfully!');
      this.router.navigateByUrl('academy/index');
    })

  }
  ngOnInit(): void {

    //recupro il codice dell'academy da modificare
    this.code = this.route.snapshot.params['code'];
    //invochiamo il metodo  getAcademyByCode per farci restituire l'academy selezionata
    this.academyService.getAcademyByCode(this.code).subscribe((data) => {
      //trasformazione in oggetto academy
      this.academy = data;
      console.log(this.academy);
    });

      this.form = new FormGroup({
       code: new FormControl(''),
       title: new FormControl(''),
       cityLocation: new FormControl(''),
       studentsNumber: new FormControl()
  });
}
}
