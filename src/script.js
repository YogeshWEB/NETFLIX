const baseURL = "https://image.tmdb.org/t/p/w300";
const accesToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzc0Y2NiOTA1YzQyOTcyZmU0ZDBhZDA4MTNlYzk1NyIsInN1YiI6IjY1YThmZDE2ZWEzOTQ5MDEzMTFmNDYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7QYyy6-wCjsEt4gd9pYLfFJcaMw6wBHvIgvIEVHj2rk";
const container = document.querySelector('.container');
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: accesToken,
    }
  };
  
 let req= fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
 .then(response => response.json())
 .then(response => hello(response) )
 .catch(err => console.error(err));

   
      function hello(data){
        console.log(data);
        data.results.forEach(result => {
        //  console.log( result.original_title);
         const el =document.createElement('p');
         const div = document.createElement('div');
         const div1 = document.createElement('div');
         div1.className = "card"
         const inimg = "<img src = " +baseURL+result.poster_path+">";
        //  console.log(inimg)
         const intext = `${result.original_title}`;
         el.innerHTML= (intext);
          div.innerHTML = inimg;
          div1.appendChild(div)
          container.appendChild(div1);
         div1.appendChild(el);
        });
      }
    