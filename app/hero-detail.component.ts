import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:'my-hero-detail',
    template: ` 
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id:</label>{{hero.id}}</div>
            <div>
                <label>name one-way data binding:</label>
                <input value="{{hero.name}}" placeholder="name">
            </div>
            <div>
                <label>name two-way data binding:</label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>`
})

export class HeroDetailComponent {
    @Input()
     hero: Hero;

}