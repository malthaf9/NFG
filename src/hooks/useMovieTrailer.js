import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slice/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = async (movieId) =>{
    const dispatch = useDispatch()
    const getMovieVideos = async (movieId) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const response = await fetch(url, API_OPTIONS)
      const data = await response.json()
      const filterData = data?.results?.filter(movie => movie.type === "Trailer")
      const trailer = filterData?.length ? filterData[0] : data?.results[0]
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(() => {
      movieId && getMovieVideos(movieId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useMovieTrailer;