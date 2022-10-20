**Read: [About project](README.md), [Parcel](README.uk.md).**

# Project Filmoteka

The final project for the **JavaScript** course of Full Stack Developer students (IT school **GoIT**).

## Developers

- [Julia Golban](https://github.com/JuliaGolban)
- [Iryna Kholodenko](https://github.com/IrynaKholod)
- [Rudenko Serhii](https://github.com/rudenkoserhii)
- [Heorgii Rushchak](https://github.com/Heorgii)
- [Dima Levchenko](https://github.com/Dima1409)
- [Semen Slipchenko](https://github.com/SemSlipchenko)
- [Roman Kashirin](https://github.com/Royale16)
- [Oleksandr Nehoda](https://github.com/Oleksandr-Nehoda)
- [Roman Vikulov](https://github.com/RomanVikulov)
- [Oleh Hritsenko](https://github.com/OlehHritsenko)

## Project preparation

- The project is compiled using `parcel-project-template`.
- The [axios](https://axios-http.com/) library is used for HTTP requests.
- For the backend, use the service's public API
  [The Movie Database API](https://api.themoviedb.org/3). Got yours
  unique access key and read the documentation.
- `async/await' syntax is used.
- All shards of js files are in the `src/js' folder and are imported into
  `index.js` to connect to the `index.html` page and `library.js` to
  connecting to the page `library.html`.
- All style files are in the `src/sass' folder and are imported into
  common `index.scss` to connect to `index.html` pages and
  `library.html`.
- Images and other media files are in `src/images` folder.

## Layout and API service

[Дayout](<https://www.figma.com/file/IOrJziFAjQD8Xb5V1fx0ib/Filmoteka-(Copy)-(Copy)?node-id=0%3A1>)

[ Film API](https://www.themoviedb.org/)

## Technical task

1. Create a header for the main page (mobile phone, tablet, desktop)
2. Clicking the ``Home'' logo/button displays the main page
3. When clicking on the ``My library'' button, the user's library is displayed
4. Footer markup (mobile phone, tablet, desktop) (same for two pages)
5. Make a single movie card template
6. Align the master page container to position the cards correctly
   movies (mobile phone, tablet, computer)
7. Implement uploading of popular movies to the main (first) page
8. Align or connect page numbers (**pagination**) on the main page
9. Moving to each page, draw the corresponding part of the films
10. Implement search and display of movies by keywords
11. Align the container of the ``My Library'' page to the correct position
    movie cards (mobile phone, tablet, desktop)
12. Create a header for the My Library page (mobile, tablet, desktop)
13. After clicking on the logo, the main page is displayed
14. When you click on the ``Watched'' button, the watched movies are shown
    user
15. When you click on the "Queue" button, movies added to the queue are shown
    user
16. Create a modal template for one movie (mobile, tablet, desktop)
17. After clicking on the movie card, any page should open
    Modalka with dynamically inserted information about the movie
18. By pressing the "Add to watched" button, the movie is added to the watched
    movies of the current user (**local storage**)
19. By clicking the "Add to queue" button, the movie is added to the current queue
    user (**local storage**)
20. Close the mode by pressing the ESC key and clicking Exit
    outside the modal don't forget to remove the listeners
21. Plug/compile `Loader (spinner)` for asynchronous requests
22. Implement user registration/authentication via ``Firebase''
23. Match the modal (mobile phone, tablet, desktop) with the participant information
    of your team, which will be opened by clicking on the text **"GoIT Students"**
    in the footer