import { db } from "../database/db.store";
const fs = require('fs');

const mutation = {
    Mutation: {
        newMovie(parent, args, context) {
            const movie = {
                id: args.movie.id,
                title: args.movie.title,
                year: args.movie.year,
                image: args.movie.image,
                runningTimeInMinutes: args.movie.runningTimeInMinutes,
                viewed: false
            };
            const data = db.movies;
            if (data.filter(item => item.id == movie.id).length === 0) {
                data.push(movie)
                let dataJSON = JSON.stringify(data);
                fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/movies.json', dataJSON, (err) => {
                    if (err) throw err;
                });
            }
            return movie;
        },
        newSerie(parent, args, context) {
            const serie = {
                id: args.serie.id,
                title: args.serie.title,
                year: args.serie.year,
                image: args.serie.image,
                numberOfEpisodes: args.serie.numberOfEpisodes,
                seasons: []
            };
            const data = db.series;
            if (data.filter(item => item.id == serie.id).length === 0) {
                data.push(serie)
                let dataJSON = JSON.stringify(data);
                fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/series.json', dataJSON, (err) => {
                    if (err) throw err;
                });
            }
            return serie;
        },
        addSeasons(parent, args, context) {
            const idSerie = args.idSerie
            const seasons = [];
            const seasonsIds = [];
            args.seasons.forEach(item => {
                const id = idSerie + '_' + item.season;
                const episodes = []
                item.episodes.forEach(episode => {
                    episodes.push({
                        id: episode.id,
                        title: episode.title,
                        year: episode.year,
                        episode: episode.episode,
                        season: episode.season,
                        titleType: episode.titleType,
                        viewed: false
                    })
                });
                seasons.push({
                    id: id,
                    season: item.season,
                    episodes: episodes
                })
                seasonsIds.push(id)
            });
            const data = db.seasons;
            seasons.forEach(season => {
                data.push(season)
            });
            let dataJSON = JSON.stringify(data);
            fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/seasons.json', dataJSON, (err) => {
                if (err) throw err;
            });
            const dataSerie = db.series;
            const serie = dataSerie.filter(item => item.id == idSerie)[0];
            serie.seasons = seasonsIds;
            const newSerieData = dataSerie.filter(item => item.id != idSerie);
            newSerieData.push(serie)
            let dataJSONnewSerie = JSON.stringify(newSerieData);
            fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/series.json', dataJSONnewSerie, (err) => {
                if (err) throw err;
            });
            return serie;
        },
        setEpisodeViewed(parent, args, context) {
            const seasonId = args.seasonId;
            const episodeId = args.episodeId;
            const seasons = db.seasons;
            const dataSeasons = db.seasons;
            const newSeason = dataSeasons.filter(item => item.id == seasonId)[0];
            const newEpisode = newSeason.episodes.filter(item => item.id == episodeId)[0];
            newEpisode.viewed = true
            const newEpisodes = newSeason.episodes.filter(item => item.id != episodeId);
            newEpisodes.push(newEpisode)
            const NewSeasons = dataSeasons.filter(item => item.id != seasonId);
            NewSeasons.push(newSeason)
            let dataJSONNewSeasons = JSON.stringify(NewSeasons);
            fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/seasons.json', dataJSONNewSeasons, (err) => {
                if (err) throw err;
            });
            return NewSeasons;
        },
        setMovieViewed(parent, args, context) {
            const movieId = args.movieId;
            const movies = db.movies;
            const newMovie = movies.filter(item => item.id == movieId)[0];
            newMovie.viewed = true;
            const newMovies = movies.filter(item => item.id != movieId);
            newMovies.push(newMovie)
            let dataJSON = JSON.stringify(newMovies);
            fs.writeFile('c:/Sources/Objetivos/peliculas/graphql/database/movies.json', dataJSON, (err) => {
                if (err) throw err;
            });
            return newMovie;
        }
    }
}

export default mutation;