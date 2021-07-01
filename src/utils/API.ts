const endpoint = "https://api.deezer.com/"

export const trackSearch = (track: string) => {
    return fetch(`${endpoint}/search?q=${track}`).then(res =>  res.json())
    .then(data => { 
        return(data)
       
    }).catch((error) => {
        return (error)
    })  
}

export const getArtistTopFiveTracks = (id: string) => {
    return fetch(`${endpoint}/artist/${id}/top`).then(res =>  res.json())
    .then(data => { 
        return(data)
       
    }).catch((error) => {
        return (error)
    })  
}

export const getArtistFans = (id: string) => {
    return fetch(`${endpoint}/artist/${id}/fans`).then(res =>  res.json())
    .then(data => { 
        return(data)
       
    }).catch((error) => {
        return (error)
    })  
}

export const getArtistAlbums = (id: string) => {
    return fetch(`${endpoint}/artist/${id}/albums`).then(res =>  res.json())
    .then(data => { 
        return(data)
       
    }).catch((error) => {
        return (error)
    })  
}

