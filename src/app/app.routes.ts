import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies/movies.component';
import { SeriesComponent } from './components/series/series/series.component';
import { DetailmoviesComponent } from './components/movies/movies/detailmovies/detailmovies.component';
import { DetailseriesComponent } from './components/series/series/detailseries/detailseries.component';


export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'movies',
        component: MoviesComponent
    },
    {
        path:'movie-details/:id',
        component: DetailmoviesComponent
    },
    {
        path:'series',
        component: SeriesComponent
    },
    {
        path:'series-details/:id',
        component: DetailseriesComponent
    },
];
