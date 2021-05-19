import { db } from "../database/db.store";

const query = {
  Query: {
    movies(parent, args, context) {
      return db.movies;
    },
    movie(parent, args, context) {
      const id = args.id;
      return db.movies.filter(movie => movie.id == id)[0];
    },
    series(parent, args, context) {
      return db.series;
    },
    serie(parent, args, context) {
      const id = args.id;
      return db.series.filter(serie => serie.id == id)[0];
    },
    stats(parent, args, context) {
      const viewedMovies = db.movies.filter(item => item.viewed == true).length;
      const moviesToView = db.movies.filter(item => item.viewed != true).length;
      var viewedEpisodes = 0;
      var episodesToView = 0;
      db.seasons.forEach(season => {
        viewedEpisodes = viewedEpisodes + season.episodes.filter(item => item.viewed == true).length;
        episodesToView = episodesToView + season.episodes.filter(item => item.viewed != true).length;
      });
      const totalMovies = viewedMovies + moviesToView;
      const totalEpisodes = viewedEpisodes + episodesToView;
      const stats = {
        viewedMovies: viewedMovies,
        moviesToView: moviesToView,
        viewedEpisodes: viewedEpisodes,
        episodesToView: episodesToView,
        totalMovies: totalMovies,
        totalEpisodes: totalEpisodes
      };
      return stats;
    }
  }
}

export default query;