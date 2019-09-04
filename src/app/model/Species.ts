import { Planets } from './Planets';
import { People } from './People';
import { Films } from './Films';

export class Species{
    name ?: string;
    classification ?: string;
    designation ?: string;
    average_height ?: string;
    skin_colors ?: string;
    hair_colors ?: string;
    eye_colors ?: string;
    average_lifespan ?: string;
    homeworld ?: Planets;
    language ?: string;
    people ?: People[];
    films ?: Films[];
    created ?: string;
    edited ?: string;
    url ?: string;
}