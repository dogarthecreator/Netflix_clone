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
      },
      requestUpcoming: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: {language: 'en-US', page: '2'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhMDZhYjdmNGZiMmFiNTM0NTc0MDhmM2JhM2E3OCIsInN1YiI6IjY1MTA3Nzc4M2E0YTEyMDBjNWFhNGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNVtpes9MSSj4VetX9fvImAoCfhfacBWxv3MLOT-Cxc'
        }
      },
      request2000: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'true',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          year: '2000'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhMDZhYjdmNGZiMmFiNTM0NTc0MDhmM2JhM2E3OCIsInN1YiI6IjY1MTA3Nzc4M2E0YTEyMDBjNWFhNGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNVtpes9MSSj4VetX9fvImAoCfhfacBWxv3MLOT-Cxc'
        }
      },
      requestHorror: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          with_genres: '27'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhMDZhYjdmNGZiMmFiNTM0NTc0MDhmM2JhM2E3OCIsInN1YiI6IjY1MTA3Nzc4M2E0YTEyMDBjNWFhNGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNVtpes9MSSj4VetX9fvImAoCfhfacBWxv3MLOT-Cxc'
        }
      },
      requestSciFi: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
          with_genres: '878'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhMDZhYjdmNGZiMmFiNTM0NTc0MDhmM2JhM2E3OCIsInN1YiI6IjY1MTA3Nzc4M2E0YTEyMDBjNWFhNGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNVtpes9MSSj4VetX9fvImAoCfhfacBWxv3MLOT-Cxc'
        }
      }
}
export default requests
