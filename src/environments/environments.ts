export const environment = {
  production: false
}

export const SpotifyConfiguration = {
  clientId: 'd5499d35c68546fea0f9037cb751449c',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes:[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative"
  ]
}
