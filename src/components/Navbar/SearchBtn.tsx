import { useEffect } from "react"
import {trackSearch} from "../../utils/API";

const SearchBtn = () => {

  useEffect(() => {
    getArtistList()
  },[])

  const getArtistList = () => {
        trackSearch("I need a dollar").then(res => {
            console.log(res)
        })
  }

  return (
    <>
      Search 
    </>
  )
}

export default SearchBtn
