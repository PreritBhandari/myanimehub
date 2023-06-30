/**
* Application wide configuration.
*/
const config = {
  dev: process.env.NODE_ENV !== "production",
  apiUrl: process.env.NEXT_PUBLIC_APP_API_URL,
  endpoints: {
    animeList: {
      getByName: '/anime',
    },
  },
};

export default config;

