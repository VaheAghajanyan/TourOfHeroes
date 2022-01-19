import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "../mock-heroes";
import {HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
      this.messageService.addMessage(`Selected hero's id is ${hero.id}`)
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
