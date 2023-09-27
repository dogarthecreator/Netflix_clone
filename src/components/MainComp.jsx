import React from "react";
import axios from "axios";
import requests from "../Requests.js";

const MainComp = () => {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios
            .request(requests.requestPopular)
            .then(function (response) {
                setMovies(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);
    const truncateString = (str, num) => {
        if (str != null && str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    };
    const movie = movies[Math.floor(Math.random() * movies.length)] || {};
    return (
        <div className="w-full h-[550px] text-white">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <div className="w-full h-full">
                <img
                    className="w-full h-full object-cover "
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <div className="w-full absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        {movie.title}
                    </h1>
                    <div className="my-4">
                        <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border border-gray-300 text-black bg-gray-300 py-2 px-5">
                            Play
                        </button>
                        <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none border border-gray-300 text-white  py-2 px-5 ml-4 hover:opacity-100">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Released: {movie.release_date}
                    </p>
                    <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainComp;
