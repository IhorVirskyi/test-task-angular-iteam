import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from 'src/app/core/models/assesment.model';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl;
const routes = {
  assessments: () => `${BASE_URL}/userassessments`
};

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(routes.assessments());
  }
}
