import { db } from "../database/db.store";

const type = {
  Serie: {
    seasons: parent => {
      const seasonsList = [];
      parent.seasons.forEach(seasonId => {
        seasonsList.push(db.seasons.filter(season => season.id == seasonId)[0]);
      });
      return seasonsList;
    }
  }
}

export default type;