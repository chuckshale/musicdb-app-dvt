import { useEffect, useState } from "react"
import ArtistCover from "../ArtistCover";

interface ArtistViewProps {
  artistViewResponse: any;
  cover: string;
  artist: string;
  closeArtistView :any
}


const ArtistView = (props: ArtistViewProps) => {

  const initialState = {
    fanList: [],
    topTracks: [],
    albums: []
  }

  const [state, setstate] = useState(initialState)

  useEffect(() => {
    setstate((prevState) => ({
      ...prevState,
      fanList: props.artistViewResponse[0].data,
      topTracks: props.artistViewResponse[1].data,
      albums: props.artistViewResponse[2].data
    }))
  }, [props])

  return (
    <>
      <div className="artist-view__container">
        <div className="artist-view__close" onClick={() => props.closeArtistView()}>X</div>
        <div className="artist-view__description" style={{ backgroundImage: `url(${props.cover})` }}>
          <h1>{props.artist}</h1>
        </div>
        <div className="artist-view__top-tracks__container">

          <div className="trackList">
            <h4>Top Tracks</h4>
            {state.topTracks && state.topTracks.map((track: any, index) => {
              return (
                <ul>
                  <li> {index + 1}. {track.title}</li>
                </ul>
              )
            })}
            {state.albums.length < 1 && (
              <p>No top tracks to display</p>
            )}
          </div>
        </div>
        <div className="artist-albums">
          <h4>Albums</h4>
          <div className="artist__list">
            {state.albums && state.albums.map((album: any, index) => {
              return (
                <ArtistCover key={index} imgUrl={album.cover_medium} album={album.title} release_date={album.release_date} />
              )
            })}
          </div>
          {state.albums.length < 1 && (
            <p className="blank-message">No albums to display</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ArtistView
