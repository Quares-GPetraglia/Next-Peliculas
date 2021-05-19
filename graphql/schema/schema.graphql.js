import { gql } from 'apollo-server-micro'

export default gql `
    type Query {
        "Listado de las Peliculas"
        movies: [Movie!]!
        "Informacion de la Pelicula por ID"
        movie(id: ID!): Movie!
        "Listado de las Series"
        series: [Serie!]!
        "Informacion de la Serie por ID"
        serie(id: ID!): Serie!
        "Estadisticas"
        stats: Stats!
    },
    type Mutation {
        "Agregar una Pelicula"
        newMovie(movie: MovieInput!): Movie
        "Agregar una Serie"
        newSerie(serie: SerieInput!): Serie
        "Cargar Temporadas de una Serie"
        addSeasons(idSerie: ID!, seasons: [SeasonsInput!]!): Serie
        "Actualizar un Episodio como visto"
        setEpisodeViewed(episodeId: ID!, seasonId: ID!): [Seasons]
        "Actualizar una Pelicula como vista"
        setMovieViewed(movieId: ID!): Movie
    },
    "Datos de la Pelicula"
    input MovieInput {
        "Identificador de la Pelicula"
        id: ID!
        "Titulo de la Pelicula"
        title: String!
        "Año de la Pelicula"
        year: String!
        "Imagen de la Pelicula"
        image: String!
        "Tiempo en minutos de la Pelicula"
        runningTimeInMinutes: String!
    },
    "Datos de la Serie"
    input SerieInput {
        "Identificador de la Serie"
        id: ID!
        "Titulo de la Serie"
        title: String!
        "Año de la Serie"
        year: String!
        "Imagen de la Serie"
        image: String!
        "Numero de Episodios de la Serie"
        numberOfEpisodes: String!
    },
    "Datos de la Temporada"
    input SeasonsInput {
        "Numero de la Temporada"
        season: Int
        "Episodios de la Temporada"
        episodes: [EpisodesInput]
    },
    "Datos del Episodio"
    input EpisodesInput {
        "Identificador del Episodio"
        id: ID
        "titulo del Episodio"
        title: String
        "Año del Episodio"
        year: Int  
        "Numero del Episodio"
        episode: Int
        "Numero de la Temporada"
        season: Int
        "Tipo"
        titleType: String
    }
    "Informacion de la Pelicula"
    type Movie {
        "Identificador de la Pelicula"
        id: ID!
        "Titulo de la Pelicula"
        title: String!
        "Año de la Pelicula" 
        year: Int!
        "Imagen de la Pelicula"
        image: String!
        "Tiempo en minutos de la Pelicula"
        runningTimeInMinutes: Int!
        "Pelicula Vista"
        viewed: Boolean
    },
    "Informacion de la Serie"
    type Serie {
        "Identificador de la Serie"
        id: ID!
        "Titulo de la Serie"
        title: String!
        "Año de la Serie"
        year: Int!
        "Imagen de la Serie"
        image: String!
        "Numero de Episodios de la Serie"
        numberOfEpisodes: Int!
        "Temporadas de la Serie"
        seasons: [Seasons]
    },
    "Informacion de las Temporadas"
    type Seasons {
        "Identificador de la Temporada"
        id: ID
        "Numero de la Temporada"
        season: Int,
        "Episodios de la Temporada"
        episodes: [Episodes]
    },
    "Informacion del Episodio"
    type Episodes {
        "Identificador del Episodio"
        id: ID
        "Titulo del Episodio"
        title: String
        "Año del Episodio"
        year: Int  
        "Numero del Episodio"
        episode: Int
        "Numero de la Temporada"
        season: Int
        "Tipo de Episodio"
        titleType: String
        "Episodio Visto"
        viewed: Boolean
    },
    "Informacion de las Estadisticas"
    type Stats {
        "Cantidad de Peliculas vistas"
        viewedMovies: Int
        "Cantidad de Peliculas por ver"
        moviesToView: Int
        "Cantidad de Episodios vistas"
        viewedEpisodes: Int
        "Cantidad de Episodios por ver"
        episodesToView: Int
        "Cantidad de Peliculas"
        totalMovies: Int
        "Cantidad de Episodios"
        totalEpisodes: Int
    },
`