import React, { useEffect, useState } from 'react'
import SearchBtn from './SearchBtn'
import "./Navbar.module.scss";
import { trackSearch } from '../../utils/API';

const logo = "data:image/png;base64,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"
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
        <img src={logo} className="navbar-logo"/>
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
