import React from "react";
import axios from "axios";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import Movie from "./Movie";

const Row = ({ title, request,id }) => {

    const [movies, setMovies] = React.useState([]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 480
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft + 480
    }


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
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full opacity-50 hover:opacity-100 text-black cursor-pointer absolute z-10 hidden group-hover:block left-2" size={40}/>
                <div id={"slider" + id} className="relative w-full h-full overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth">
    
                    {movies.map((item,id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className="bg-white rounded-full opacity-50 hover:opacity-100 text-black cursor-pointer absolute z-10 hidden group-hover:block right-2" size={40}/>

            </div>
        </>
    );
};

export default Row;
