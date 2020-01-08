import { Component, OnInit } from '@angular/core';
import { asyncScheduler, Observable, of, queueScheduler, scheduled } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value: string;

  ngOnInit(): void {
    const data$ = this.fetchDataScheduler();

    data$
      .subscribe(value => {
        this.value = value;
      });
  }

  private fetchDataScheduler(): Observable<string> {
    return scheduled(of('foo'), asyncScheduler);
  }
}
