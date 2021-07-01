interface SearchBtnProps {
    trackName?: string;
    getTrackNames : any;
}

const SearchBtn = (props:SearchBtnProps) => {
    

  return (
    <>
      <button className="primary-btn" onClick={() => props.getTrackNames()}> Search</button>
    </>
  )
}

export default SearchBtn
