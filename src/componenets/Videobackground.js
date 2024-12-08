import React, { useState, useEffect } from "react";
import { options } from "../utilies/constants";
function Videobackground({ movie_id }) {
    //console.log(movie_id);
    const [finaltrailer, setFinalTrailer] = useState("");

    async function make_call_for_video() {
        try {
            

            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options);
            const res = await data.json();

            //console.log(res);

            // Filter for trailers
            const trailer = res.results.filter((movie) => movie.type === "Trailer");
            
            // Choose the first trailer or a fallback
            const finalTrailer = trailer.length > 0 ? trailer[0] : res.results[0];
            setFinalTrailer(finalTrailer);
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    }

    useEffect(() => {
        if (movie_id) {
            make_call_for_video();
        }
    }, [movie_id]);

    if (!finaltrailer || !finaltrailer.key) {
        return null; // Return nothing if there's no trailer
    }

    return (
        <div className="w-screen absolute z-10 ">
            <iframe 
                className="w-screen h-[100vh]"
                
               
                src={`https://www.youtube.com/embed/${finaltrailer.key}?autoplay=1&mute=1`}

                title="YouTube video player"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Videobackground;
