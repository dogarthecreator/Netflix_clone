import React from "react";
import axios from "axios";

import Movie from "./Movie";

const Row = ({ title, request }) => {

    const [movies, setMovies] = React.useState([]);


    React.useEffect(() => {
        axios
            .request(request)
            .then(function (response) {
                setMovies(response.data.results);
            })
           .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <h2 className="text-white font-extrabold md:text-xl p-4">
                {title}
            </h2>
            <div className="relative flex items-center">
                <div id={"slider"} className="relative w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth">
                    {movies.map((item,id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Row;
