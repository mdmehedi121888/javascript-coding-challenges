// Observer setup
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      getData(entry.target); // pass the observed hr
    }
  });
});

// First <hr> in DOM
const firstHr = document.querySelector("hr");
observer.observe(firstHr);

async function getData(currentHr) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Create container div
    let div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Users List";
    h1.style.textAlign = "center";
    h1.style.color = "green";
    div.appendChild(h1);

    users.forEach((user) => {
      const h1 = document.createElement("h1");
      h1.textContent = user.name;
      div.appendChild(h1);
    });

    document.body.appendChild(div);

    // Create new hr for infinite scroll
    let newHr = document.createElement("hr");
    document.body.appendChild(newHr);

    // Observe the new hr
    observer.observe(newHr);

    // Stop observing old hr (to prevent multiple triggers)
    observer.unobserve(currentHr);
  } catch (error) {
    console.error(error);
  }
}
