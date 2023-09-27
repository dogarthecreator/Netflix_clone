const key = '439a06ab7f4fb2ab53457408f3ba3a78'
let requests = {
    requestPopular: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhMDZhYjdmNGZiMmFiNTM0NTc0MDhmM2JhM2E3OCIsInN1YiI6IjY1MTA3Nzc4M2E0YTEyMDBjNWFhNGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNVtpes9MSSj4VetX9fvImAoCfhfacBWxv3MLOT-Cxc'
        }
      }
}
export default requests
