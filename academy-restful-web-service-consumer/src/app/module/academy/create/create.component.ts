import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { academy_service_token, AcademyServiceI } from '../academyI.service';
import { AcademyService } from '../academy.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  providers:[{provide:academy_service_token,useClass:AcademyService}],
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  private router:Router = new Router();

  form!: FormGroup;

  private academyService = inject<AcademyServiceI>(academy_service_token);

  submit() {

    this.academyService.saveAcademy(this.form.value).subscribe((res: any) => {
      console.log('Academy created successfully!');
      this.router.navigateByUrl('academy/index');
    })

  }


  ngOnInit() {
    this.form = new FormGroup({
     code: new FormControl(''),
     title: new FormControl(''),
     cityLocation: new FormControl(''),
     studentsNumber: new FormControl(0)
    });

  }

}
