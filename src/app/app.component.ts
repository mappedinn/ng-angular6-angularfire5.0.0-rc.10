import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  exercises: any[];
  availableExercisesSubs: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.availableExercisesSubs = this.dataService.availableExercicesChanged.subscribe(ex => {
      this.exercises = ex;
    });
    this.dataService.fetchAvailableExercices();
  }
}
