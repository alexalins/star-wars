import { Films } from './Films';
import { Species } from './Species';
import { Vehicles } from './Vehicles';
import { Planets } from './Planets';
import { Starships } from './Starships';

export class People{
    name ?: string;
    height ?: string;
    mass ?: string;
    hair_color ?: string;
    skin_color ?: string;
    eye_color ?: string;
    birth_year ?: string;
    homeworld ?: Planets;
    gender ?: string;
    films ?: Films[];
    species ?: Species[];
    vehicles ?: Vehicles[];
    starships ?: Starships[];
    created ?: string;
    edited ?: string;
    url: string;
}