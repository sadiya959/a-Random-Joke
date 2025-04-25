async function getJoke() {
    const jokePara = document.getElementById("joke");
  
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
  
      const data = await response.json();
      jokePara.textContent = data.joke;
      
    } catch (error) {
      jokePara.textContent = "Oops! Something went wrong.";
      console.error("Error fetching joke:", error);
    }
  }
  