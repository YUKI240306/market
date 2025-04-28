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

          <div class="parts-pay">
            ${k.mono ? `<div class="pay"><img src="img/paws.png" alt="">${k.mono}</div>` : ''}
            ${k.pb ? `<div class="pay"><img src="img/circular-diagram-2.png" alt="">${k.pb}</div>` : ''}
          </div>

          <div class="price-block">
            <p class="old-price">${k.pricer}грн</p>
            <p class="new-price">${k.sale_price}грн</p>
          </div>

          <div class="coupon-price">
            <span>ціна за купоном</span>
            <span class="price">${k.price}грн</span>
          </div>

          
        
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching k data:", error);
  });

  document.querySelector("#fixed-footer").classList.add("fixed-footer")
