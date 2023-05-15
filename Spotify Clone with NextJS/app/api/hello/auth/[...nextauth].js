import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"


const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-currently-playing",
    "user-modify-playback-state"
].join(",")


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization : LOGIN_URL
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)