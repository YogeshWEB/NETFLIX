import { useEffect, useState } from "react";

const key = "Bearer " + import.meta.env.REACT_APP_API_ACCESS_TOKEN;
const baseURL = "http://image.tmdb.org/t/p/w300";

function Data() {
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzc0Y2NiOTA1YzQyOTcyZmU0ZDBhZDA4MTNlYzk1NyIsInN1YiI6IjY1YThmZDE2ZWEzOTQ5MDEzMTFmNDYwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7QYyy6-wCjsEt4gd9pYLfFJcaMw6wBHvIgvIEVHj2rk",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => setResult(response.results))
      .catch((err) => console.error(err));
  }, [page]);
  const pageinc = () => {
    setPage((page) => page + 1);
  };
  const pagedec = () => {
    setPage((page) => {
      if (page === 1) {
        return page;
      } else {
        return page - 1;
      }
    });
  };
  return (
    <>
      <div className="flex justify-between">
        <div
          className="flex m-2 bg-red-500 rounded-md size-12 justify-center items-center font-normal text-white cursor-pointer"
          onClick={pageinc}
        >
          Next
        </div>
        <div
          className="flex m-2 bg-red-500 rounded-md size-12 justify-center items-center font-normal text-white cursor-pointer"
          onClick={pagedec}
        >
          prev
        </div>
      </div>

      <div className="flex justify-start items-center overflow-scroll whitespace-nowrap">
        {result.map((val) => {
          return (
            <div key={val.id} className="size-full">
              <img
                src={baseURL + val.poster_path}
                alt="moive poster"
                className=" max-w-none h-[450px]"
              />
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;
