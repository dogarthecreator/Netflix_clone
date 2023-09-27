import React from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa';

const Movie = ({item}) => {
    const [like,setLike] = React.useState(false);
    const toggleLike = () => {setLike(!like)}
    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2">
            <img

                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
            ></img>
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-2">
                    {item.title}
                </p>
                <p>
                    {like ? (
                        <FaHeart className="absolute top-3 left-3 text-red-600" onClick={toggleLike}/>
                    ) : (
                        <FaRegHeart className="absolute top-3 left-3 text-gray-300" onClick={toggleLike}/>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Movie;
