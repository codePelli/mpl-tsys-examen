import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../../../services/apiservice.service';

@Component({
  selector: 'app-detailmovies',
  standalone: true,
  imports: [],
  templateUrl: './detailmovies.component.html',
  styleUrl: './detailmovies.component.css'
})
export class DetailmoviesComponent implements OnInit{

  movieId: number = 0;
  movieDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private apiservice: ApiserviceService){}

  ngOnInit(): void {
    this.loadMovieDetails();
  }

  loadMovieDetails(){
    this.apiservice.getMovieById(this.movieId).subscribe(
      (data) => {
        this.movieDetails = data;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    )
  }

}
