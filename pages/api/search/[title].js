export default async function handler(req, res) {
    const { title } = req.query
    const resp = await fetch("https://imdb8.p.rapidapi.com/title/find?q=" + encodeURIComponent(title), {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6d632d4d8amsh72046ee517197aap1267c2jsn9fdb1eddfb56", //"84c1b12800msh77ccfd48f414029p153ddfjsn8589fa71d3c1",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    });
    const json = await resp.json();
    const result = json.results.filter((item) => item.titleType === "movie" || item.titleType === "tvSeries");
    res.json(result);
}