import { MovieDatabase } from "./movies";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const movieDB = new MovieDatabase();

function mainMenu() {
  console.log("\nMovie Management System");
  console.log("1. Add Movie");
  console.log("2. Rate Movie");
  console.log("3. Get Average Rating");
  console.log("4. Get Top Rated Movies");
  console.log("5. Get Movies by Genre");
  console.log("6. Get Movies by Director");
  console.log("7. Search Movies by Keyword");
  console.log("8. Get Movie Details");
  console.log("9. Remove Movie");
  console.log("10. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice) {
      case "1":
        rl.question("Enter ID: ", (id) => {
        rl.question("Enter Title: ", (title) => {
        rl.question("Enter Director: ", (director) => {
        rl.question("Enter Release Year: ", (year) => {
        rl.question("Enter Genre: ", (genre) => {
        movieDB.addMovie(parseInt(id), title, director, parseInt(year), genre);
        console.log("Movie added successfully!");
        mainMenu();
                });
              });
            });
          });
        });
        break;
      case "2":
        rl.question("Enter Movie ID: ", (id) => {
          rl.question("Enter Rating (1-5): ", (rating) => {
            movieDB.rateMovie(parseInt(id), parseInt(rating));
            console.log("Movie rated successfully!");
            mainMenu();
          });
        });
        break;
      case "3":
        rl.question("Enter Movie ID: ", (id) => {
          console.log("Average Rating:", movieDB.getAverageRating(parseInt(id)));
          mainMenu();
        });
        break;
      case "4":
        console.log("Top Rated Movies:", movieDB.getTopRatedMovies());
        mainMenu();
        break;
      case "5":
        rl.question("Enter Genre: ", (genre) => {
          console.log("Movies in Genre:", movieDB.getMoviesByGenre(genre));
          mainMenu();
        });
        break;
      case "6":
        rl.question("Enter Director: ", (director) => {
          console.log("Movies by Director:", movieDB.getMoviesByDirector(director));
          mainMenu();
        });
        break;
      case "7":
        rl.question("Enter Keyword: ", (keyword) => {
          console.log("Matching Movies:", movieDB.searchMovies(keyword));
          mainMenu();
        });
        break;
      case "8":
        rl.question("Enter Movie ID: ", (id) => {
          console.log("Movie Details:", movieDB.getMovie(parseInt(id)));
          mainMenu();
        });
        break;
      case "9":
        rl.question("Enter Movie ID to Remove: ", (id) => {
          movieDB.removeMovie(parseInt(id));
          mainMenu();
        });
        break;
      case "10":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice, please try again.");
        mainMenu();
    }
  });
}

mainMenu();