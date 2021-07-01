import "./ArtistCover.module.scss";

interface ArtistCoverProps {
    imgUrl? : string;
    trackName? : string;
    artist? : string;
    album : string;
    release_date? : string;
}

const ArtistCover = (props:ArtistCoverProps) => {
  return (
    <>
      <div className="artist-cover__container">
          <img className="artist-cover__img" src={props.imgUrl} alt={props.artist}/>
          <div className="artist-cover__details">
                <h4 className="artist-cover__track-name">{props.trackName}</h4>
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
