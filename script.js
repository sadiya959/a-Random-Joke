async function getJoke() {
    const jokePara = document.getElementById("joke");
    jokePara.textContent = "Loading... 🤔";
  
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
  
      const data = await response.json();
      jokePara.textContent = data.joke;
    } catch (error) {
      jokePara.textContent = "Oops! Couldn't fetch a joke 😓";
      console.error("Error:", error);
    }
  }
  