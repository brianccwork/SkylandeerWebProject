document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("contributors-grid");
    if (!grid) return;

    fetch("../data/contributors.json")
        .then((res) => res.json())
        .then((contributors) => {
            contributors.forEach((c) => {

                // Column
                const col = document.createElement("div");
                col.className =
                    "col-12 col-md-4 d-flex justify-content-center";

                // Card wrapper
                const card = document.createElement("div");
                card.className =
                    "contributor-card d-flex flex-column align-items-center p-4";

                // Avatar
                const img = document.createElement("img");
                img.src = c.image;
                img.alt = c.name;
                img.className = "img-fluid rounded-circle contributor-img mb-3";

                // Panel
                const panel = document.createElement("div");
                panel.className =
                    "contributor-info bg-dark text-white rounded-4 px-4 py-3 w-100 text-center";

                const name = document.createElement("h5");
                name.className = "mb-1";
                name.textContent = c.name;

                const role = document.createElement("p");
                role.className = "mb-0 opacity-75";
                role.textContent = c.role;

                panel.appendChild(name);
                panel.appendChild(role);

                // Build
                card.appendChild(img);
                card.appendChild(panel);
                col.appendChild(card);
                grid.appendChild(col);
            });
        })
        .catch((err) => {
            console.error("Error loading contributors.json", err);
        });
});
