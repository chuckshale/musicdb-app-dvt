import { useEffect, useState } from 'react';
import { getArtistAlbums, getArtistFans, getArtistTopFiveTracks } from '../../utils/API';
import ArtistCover from '../ArtistCover';
import ArtistView from '../ArtistCover/ArtistView';


interface AlbumListProps {
    trackList: Array<any>
}

const AlbumList = (props: AlbumListProps) => {

    const initialState = {
        fanList: [],
        topTracks: [],
        albumList: [],
        showArtistView: false,
        artistViewResponse : {},
        cover : "",
        artist : ""

    }

    const [state, setstate] = useState(initialState)


    const getArtistView = (id: string,cover :string, artist:string) => {

        console.log(cover,artist)

        Promise.all([
            getArtistFans(id),
            getArtistTopFiveTracks(id),
            getArtistAlbums(id)
        ]).then((res => {
            console.log(typeof res, res)
            debugger
            setstate((prevState) => ({
                ...prevState,
                artistViewResponse : res,
                showArtistView: true,
                cover,
                artist
            }))
        })).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setstate((prevState) => ({
            ...prevState,
            showArtistView:false
        }))
    },[props])

    return (
        <>
            <div className="inner-container">
                <h1>Search List</h1>
                <div className="artist__list">
                    {!state.showArtistView && (

                        props.trackList && props.trackList.map((artist, index) => {
                            return (
                                <button key={index} onClick={() => getArtistView(artist.artist.id,artist.artist.picture_xl,artist.artist.name)} className="artist-cover__main">
                                    <ArtistCover album={artist.album.title} artist={artist.artist.name} imgUrl={artist.artist.picture_medium} trackName={artist.title} />
                                </button>
                            )
                        })
                    )}
                    {state.showArtistView && state.topTracks && (
                        <ArtistView artistViewResponse={state.artistViewResponse} cover={state.cover} artist={state.artist}/>
                    )}
                </div>
            </div>

        </>
    )
}

export default AlbumList
