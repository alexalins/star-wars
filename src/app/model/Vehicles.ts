import { Films } from './Films';
import { People } from './People';

export class Vehicles{
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
    vehicle_class ?: string;
    pilots ?: People[];
    films ?: Films[];
    created ?: string;
    edited ?: string;
    url ?: string;
}