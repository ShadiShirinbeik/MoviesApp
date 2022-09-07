export default {
  version: 'v1',
  prefix: '',
  controllers: {
    Movie: {
      name: 'Movie',
      actions: {
        GetAll: {
          name: 'GetAll',
          path: '3/discover/movie',
          method: 'get'
        },
        Details: {
          name: 'Details',
          path: '3/movie',
          method: 'get'
        },
        Genres: {
          name: 'Genres',
          path: '3/genre/movie/list',
          method: 'get'
        },
      }
    },
  }
}
