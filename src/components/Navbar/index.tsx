import React, { useEffect, useState } from 'react'
import SearchBtn from './SearchBtn'
import "./Navbar.module.scss";
import { trackSearch } from '../../utils/API';

interface NavbarProps {
  getTrackList: any;
}

const Navbar = (props: NavbarProps) => {

  const initialState = {
    tracks: [],
    searchText: "",
    error: ""
  }

  const [state, setstate] = useState(initialState);


  const getTrackist = (tracks: any) => {

    trackSearch(tracks).then((res) => {

      if (!res.error) {
        setstate((prevState) => ({
          ...prevState,
          tracks: res.data,
          error: ""
        }))
      } else {
        setstate((prevState) => ({
          ...prevState,
          tracks: [],
          error: "Opps something went wrong, please try again"
        }))
      }
    }).catch((error) => {
      console.log('Internal server', error)
    })

  }

  useEffect(() => {
    props.getTrackList(state)
  }, [state])

  return (
    <>
      <nav className="navbar">
        <SearchBtn getTrackNames={() => getTrackist(state.searchText)} />
        <input className="navbar-search" type="text" onChange={(e) => {
          setstate((prevState) => ({
            ...prevState,
            searchText: e.target.value
          }))
        }} />

      </nav>
    </>
  )
}

export default Navbar
