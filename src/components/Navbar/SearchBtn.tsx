import { useEffect } from "react"
import {trackSearch} from "../../utils/API";

interface SearchBtnProps {
    trackName?: string;
    getTrackNames : any;
}

const SearchBtn = (props:SearchBtnProps) => {
    

  return (
    <>
      <button onClick={() => props.getTrackNames()}> Search</button>
    </>
  )
}

export default SearchBtn
