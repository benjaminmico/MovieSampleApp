export interface IMovieListItem {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genres[];
  homepage: string | null;
  imdb_id: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status:
    | 'Rumored'
    | 'Planned in Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: ICast[];
  crew: ICrew[];
}

type Person = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
};

export interface ICast extends Person {
  cast_id: number;
  character: string;
  order: number;
}

export interface ICrew extends Person {
  department: string;
  job: string;
}

type ProductionCompanies = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type Genres = {
  id: number;
  name: string;
};

type SpokenLanguages = {
  iso_3166_1: string;
  name: string;
};
