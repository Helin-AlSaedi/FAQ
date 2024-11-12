//Fetch data

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const accordion = document.querySelector(".accordion");

    // toogle function
    function toggle(e) {
      const element = e.target;
      element.classList.toggle("active");
    }

    // Clear existing sections
    accordion.innerHTML = "<h1>FAQ</h1>";

    // forEach through data
    data.forEach((item, index) => {
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("title");
      titleDiv.textContent = `Section ${index + 1}: ${item.title}`;

      // description div
      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      descriptionDiv.textContent = item.body;
      descriptionDiv.style.display = "none"; // Hide description

      // toggle the description
      titleDiv.addEventListener("click", () => {
        descriptionDiv.style.display =
          descriptionDiv.style.display === "none" ? "block" : "none";
      });

      // title and description to the accordion
      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);
    });
  })
  .catch((error) => console.error("Fetch error:", error));
