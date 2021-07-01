const endpoint = "https://api.deezer.com/"


export const trackSearch = (track: string) => {
    return fetch(`${endpoint}/search?q/${track}`).then(res => {
        res.json();
    })

}
