import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../services/apiservice.service';
import { RouterLink } from '@angular/router';
import { Series } from '../../../models/series';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit{

  series: any = [];
  
  constructor(private apiService: ApiserviceService){}
  
  ngOnInit(): void {

    this.apiService.getSeries().subscribe(
      data => {
        console.log(data.results);
        this.series = data.results;
      },
      error => {
        console.error('Error al cargar series', error);
      }
    );
  }

}
