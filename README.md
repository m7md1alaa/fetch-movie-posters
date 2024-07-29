# Directory Icon Setter for Movie Folders

This raycast extension automatically sets custom icons for movie directories on macOS based on the movie's poster.
It monitors a specified directory for newly added subdirectories (movie folders 🎬), fetches the movie poster using the TMDB API, and sets the poster as the folder icon using AppleScript.

## Features

- **Directory Watching**: Monitors a specified directory for new subdirectories.
- **Movie Name Cleaning**: Cleans up directory names to extract the movie title.
- **Poster Fetching**: Retrieves movie posters from the TMDB API.
- **Icon Setting**: Sets the downloaded poster as the folder icon on macOS.
- **Error Handling**: Provides clear console messages in case of issues.

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your macOS system.
- **TMDB API Key**: Obtain an API key from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api).

### Dependencies

Install the required Node.js packages:

```bash
npm install chokidar axios
