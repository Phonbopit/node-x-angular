import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  findAll() {
    return this.http.get('http://localhost:5000/api/heroes')
      .map(res => res.json());
  }

  findOne(id) {
    return this.http.get(`http://localhost:5000/api/heroes/${id}`)
      .map(res => res.json());
  }

}
