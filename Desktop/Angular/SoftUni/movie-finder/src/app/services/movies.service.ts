import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movies } from "../models/movies";

const apiKey = '5c71445705e5950c57c6b342e8a0a0a0';

@Injectable()

export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    authentication: string = '&api_key=';
    theaters: string = 'discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22';

    constructor(private http: HttpClient) {  }

    getPopular () : Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }

    getTheaters() : Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
    }
}