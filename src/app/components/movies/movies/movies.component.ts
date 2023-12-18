import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {

    this.apiService.getMovies().subscribe(
      data => {
        this.movies = data.results;
      },
      error => {
        console.error('Error al cargar películas', error);
      }
    );
  }
  
}
