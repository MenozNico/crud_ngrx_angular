import { HeroSearch } from './../models/hero-search';
import { Action, createReducer, on } from '@ngrx/store';
import * as HeroActions from '../actions/hero.actions';
import { Hero } from '../models/hero';

export interface State {
    searchTerms: string;
    results: HeroSearch[];
    selectedHero: Hero;
    heroList: Hero[];
}

const initialState: State =  {
    searchTerms: '',
    results: [],
    selectedHero: null,
    heroList: []
}

const heroReducer = createReducer(
    initialState,
    on(HeroActions.ADD_HERO, state => ({ ...state, heroList: [...state.heroList, state.selectedHero] })),
    on(HeroActions.GET_HERO, (state, { payload } ) => ({...state, id: state.selectedHero.id })),
    on(HeroActions.UPDATE_HERO, (state, { payload } ) => ({...state, id: state.selectedHero.id, name: state.selectedHero.name })),
    on(HeroActions.REMOVE_HERO, (state, { payload } ) => ({...state, id: state.selectedHero.id })),
  );
  
  export function reducers(state: State | undefined, action: Action) {
    return heroReducer(state, action);
  }

