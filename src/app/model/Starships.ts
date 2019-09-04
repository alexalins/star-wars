import { People } from './People';
import { Films } from './Films';

export class Starships{
    name ?: string;
    model ?: string;
    manufacturer ?: string;
    cost_in_credits ?: string;
    length ?: string;
    max_atmosphering_speed ?: string;
    crew ?: string;
    passengers ?: string;
    cargo_capacity ?: string;
    consumables ?: string;
    hyperdrive_rating ?: string;
    MGLT ?: string;
    starship_class ?: string;
    pilots ?: People[];
    films ?: Films[];
    created ?: string;
    edited ?: string;
    url ?: string;
}