const preJokes = [];

async function getJoke() {
    const jokePara = document.getElementById("joke");
    const jokeHistory = document.getElementById("joke-history");
    const spinner = document.getElementById("spinner");
    jokePara.textContent = "";



    spinner.classList.remove("hidden")

  
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
  
      const data = await response.json();
      const newJoke = data.joke
      
      spinner.classList.add("hidden")
      jokePara.textContent = newJoke.joke;
      
      preJokes.unshift(newJoke);
      if (preJokes.length > 5) preJokes.pop();




      jokeHistory.innerHTML = ""

      preJokes.forEach(joke => {
        jokeList = document.createElement("li")
        jokeList.textContent = joke

        jokeHistory.appendChild(jokeList)

      })


    } catch (error) {
      jokePara.textContent = "Oops! Couldn't fetch a joke 😓";
      console.error("Error:", error);
    }
  }
  