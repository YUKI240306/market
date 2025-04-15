  fetch('js/k.json')
  .then((response) => response.json()) // Fixed parentheses
  .then((data) => {
    data.forEach((k, index) => { // Fixed arrow function syntax
      let kDiv = document.createElement("div");
      kDiv.classList.add("k");

      // Append the good div to the container
      document.getElementById("k").appendChild(kDiv);

      // Populate the good div with content
      kDiv.innerHTML = `
        
        <div class = "k-container">
          
          <h3 class = "k-name">${k.name}</h3>
          <img class = "U" src='img/${index + 1}.jpeg' alt="${k.name}" onerror="this.onerror=null;this.src='#';" />
          <p class = "pricee">${k.price}грн</p>
          <p class = "sale_price">${k.sale_price}грн</p>
        
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching k data:", error);
  });

