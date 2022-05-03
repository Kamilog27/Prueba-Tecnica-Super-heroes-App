export interface Heroe {
    ok:     boolean;
    heroes: Hero[];
    heroesciu:Hero[];
    heroesnom:Hero[];
}

export interface Hero {
    _id?:       string;
    nombre:    string;
    grupo:     string;
    ciudad:    string;
    condicion: string;
    poder:     string[];
    imagen?:       string;
    vehiculo:   string;
    __v?:       number;
}

