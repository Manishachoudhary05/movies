export class Movie {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];

    constructor(id: number, title: string, director: string, releaseYear: number, genre: string) {
      this.id = id;
      this.title = title;
      this.director = director;
      this.releaseYear = releaseYear;
      this.genre = genre;
      this.ratings = [];
    }
  }
  
  export class MovieDatabase {
    movies: Movie[];

    constructor() {
      this.movies = [];
    }
  
    addMovie(id: number, title: string, director: string, releaseYear: number, genre: string) {
      if (this.movies.some(movie => movie.id === id)) {
        console.log(`Movie with ID ${id} already exists.`);
        return;
      }
      this.movies.push(new Movie(id, title, director, releaseYear, genre));
    }
  
    rateMovie(id: number, rating: number) {
      const movie = this.movies.find(movie => movie.id === id);
      if (!movie) return console.log("Movie not found.");
      if (rating < 1 || rating > 5) return console.log("Rating must be between 1 and 5.");
      movie.ratings.push(rating);
    }
  
    getAverageRating(id: number) {
      const movie = this.movies.find(movie => movie.id === id);
      if (!movie || movie.ratings.length === 0) return undefined;
      return movie.ratings.reduce((sum, rate) => sum + rate, 0) / movie.ratings.length;
    }
  
    getTopRatedMovies() {
      return [...this.movies].sort((a, b) => (this.getAverageRating(b.id) || 0) - (this.getAverageRating(a.id) || 0));
    }
  
    getMoviesByGenre(genre: string) {
      return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }
  
    getMoviesByDirector(director: string) {
      return this.movies.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
    }
  
    searchMovies(keyword: string) {
      return this.movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
    }
  
    getMovie(id: number) {
      return this.movies.find(movie => movie.id === id);
    }
  
    removeMovie(id: number) {
      const index = this.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        this.movies.splice(index, 1);
        console.log("Movie removed successfully.");
      } else {
        console.log("Movie not found.");
      }
    }
  }