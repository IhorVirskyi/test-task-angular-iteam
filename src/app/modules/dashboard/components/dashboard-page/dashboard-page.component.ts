import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Assessment } from 'src/app/core/models/assesment.model';
import { AssessmentsService } from 'src/app/core/services';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})
export class DashboardPageComponent implements OnInit {

  assessments$: Observable<Assessment[]> = this.assessmentService.getAll();

  constructor(private assessmentService: AssessmentsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSelectAssessment(assessment: Assessment) {
    this.router.navigate(['dashboard', 'graph'], {queryParams: {id: assessment.id}});
    // TODО перекинути на нову сторінку з інфою this.router.navigate(['/graph', assessment.id])
  }
}
