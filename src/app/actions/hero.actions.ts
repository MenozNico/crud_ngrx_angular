import { createAction, props } from '@ngrx/store';
import { Hero } from '../models/hero';

// Adding Hero to Hero-list
export const ADD_HERO = createAction('[Hero Component] Add Hero');

// Getting Hero Details 
export const GET_HERO = createAction(
    '[HeroDetail Component] Get Hero',
    props<{ payload: number }>()
);

// Update Hero
export const UPDATE_HERO = createAction(
    '[HeroUpdate Component] Update Hero',
    props<{ payload: string }>()
);

// Removing Hero to Hero List
export const REMOVE_HERO = createAction(
    '[RemoveHero Component] Remove Hero',
    props<{ payload: Hero }>()
);

// Searching Hero
export const SEARCH_HERO = createAction(
    '[HeroSearch Component] Search Hero',
    props<{ payload: string }>()
);
