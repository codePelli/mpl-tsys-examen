import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  popularMovies: any[] = [];
  popularSeries: any[] = [];

  constructor(private apiService: ApiserviceService, private router: Router){}

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe(data => {
      this.popularMovies = data.results;
    });

    this.apiService.getPopularSeries().subscribe(data => {
      this.popularSeries = data.results;
    });
  }

}
