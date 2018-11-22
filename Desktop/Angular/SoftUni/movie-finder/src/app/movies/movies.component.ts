import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log(data);
      })

    this.moviesService.getTheaters()
      .subscribe(data => {
        this.theaters = data;
        data.results
        console.log(data);
      })
  }
}
