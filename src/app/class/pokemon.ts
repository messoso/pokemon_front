import {Status} from './status';

export interface Pokemon {
    id: number;
    branch: number;
    name: string;
    status: Status;
    type1: string;
    type2: string;
}
