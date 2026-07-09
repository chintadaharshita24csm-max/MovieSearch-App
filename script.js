const apikey = "a26cf6a5";

function searchMovie() {
    const movieName = document.getElementById("movieName").value;

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`)
        .then(response => response.json())
        .then(data => {

            if (data.Response === "False") {
                document.getElementById("result").innerHTML =
                    "<h3>Movie not found!</h3>";
                return;
            }

            document.getElementById("result").innerHTML = `
                <img src="${data.Poster}" alt="${data.Title}" width="200">
                <h2>${data.Title}</h2>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML =
                "<h3>Something went wrong!</h3>";
            console.error(error);
        });
}
