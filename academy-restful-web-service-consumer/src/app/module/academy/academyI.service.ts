import { inject, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const academy_service_token = new InjectionToken<AcademyServiceI>('academy_service_token');
export interface AcademyServiceI{

	getAcademies(): Observable<any>;

	getAcademyByCode(code: string): Observable<any>;

	saveAcademy(academy: any): Observable<any>;

	updateAcademy(academy: any): Observable<any>;

	deleteAcademy(code: string): Observable<any>;

}


