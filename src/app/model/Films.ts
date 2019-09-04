import { People } from './People';
import { Planets } from './Planets';
import { Starships } from './Starships';
import { Vehicles } from './Vehicles';
import { Species } from './Species';

export class Films{
    title ?: string;
    episode_id ?: number;
    opening_crawl ?: string;
    director ?: string;
    producer ?: string;
    release_date ?: string;
    characters ?: People[];
    planets ?: Planets[];
    starships ?: Starships[];
    vehicles ?: Vehicles[];
    species ?: Species[];
    created ?: string;
    edited ?: string;
    url ?: string;
}