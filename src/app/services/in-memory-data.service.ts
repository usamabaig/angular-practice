import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Nabil' },
	  { id: 2, name: 'Ahmed' },
	  { id: 3, name: 'Anise' },
	  { id: 4, name: 'Aqueel' },
	  { id: 5, name: 'Zain' },
	  { id: 6, name: 'Ghani' },
	  { id: 7, name: 'Nazir' },
	  { id: 8, name: 'Dr Farida' },
	  { id: 9, name: 'Bilawal' },
	  { id: 10, name: 'Minza' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
