import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

async function getMovies() {
    try {
        const response = await fetch('https://allnews.ng/entertainment/movie-review/nollywood');
        const body = await response.text();
        const $ = cheerio.load(body);
        //console.log(body);

        let items = [];
        $('.container > .row > .col-xl-9 > .movie_list_items > .movie_list_items-wrap').map((i, el) => {

            const name = $(el).find('.movie_list-content h4').text().trim();
            const genre = $(el).find('.movie_list-content span:first').text();
            const rating = $(el).find('span.rating_label').text().trim();
           

            console.log(name);
            //console.log(genre);
           // console.log(rating);
            items.push({
                name,
                genre,
                rating
            })
        });

        /* fs.writeFile('movie.json', JSON.stringify(items), function(err){
            if(err) return console.log(err);
            console.log('Movie Reviews saved successfully as: movie.JSON');
        }) */


    } catch (error) {
        console.log(error);
    }
} 

getMovies();
