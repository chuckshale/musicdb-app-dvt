import { useEffect, useState } from "react";
import { convertDuration } from "../../helpers/convert";
import "./ArtistCover.module.scss";

interface ArtistCoverProps {
    imgUrl? : string;
    trackName? : string;
    artist? : string;
    album : string;
    release_date? : string;
    duration? : any;
}


const ArtistCover = (props:ArtistCoverProps) => {

  const [duration, setDuration] = useState();

useEffect(() => {

  const convert = convertDuration(props.duration);

},[props.duration])

  return (
    <>
      <div className="artist-cover__container">
          <img className="artist-cover__img" src={props.imgUrl} alt={props.artist}/>
          <div className="artist-cover__details">
                <h4 className="artist-cover__track-name">{props.trackName} 
                {props.duration && (
                  <span className="artist-cover__duration">{convertDuration(props.duration)}</span>

                )}
                </h4> 
                {props.release_date && (
                      <h4 className="artist-cover__track-name">Release date: {props.release_date}</h4>
                )}
                <p className="artist-cover__artist">By: {props.artist}</p>
                <h5 className="artist-cover__album">{props.album}</h5>
          </div>
      </div>
    </>
  )
}

export default ArtistCover
