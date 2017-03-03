import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero: any;

  title: string = 'zzzz';

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // const id = this.route.params['id'];
    console.log('id ', 2);
    this.heroService.findOne(2).subscribe(response => {
      console.log('response', response);
      this.hero = response.data;

      console.log('this.hero', this.hero);
    })
  }

}
