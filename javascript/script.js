document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("contributors-grid");
    if (!grid) return; // not on contributors page

    fetch("../data/contributors.json")
        .then((res) => res.json())
        .then((contributors) => {
            contributors.forEach((c) => {
                const col = document.createElement("div");
                col.className =
                    "col-12 col-md-4 d-flex flex-column align-items-center";

                // Avatar
                const img = document.createElement("img");
                img.src = c.image;
                img.alt = c.name;
                img.className = "img-fluid rounded-circle contributor-img";
                // Black info panel
                const panel = document.createElement("div");
                panel.className =
                    "bg-dark text-white rounded-4 px-4 py-3 mt-3 w-100 text-center text-md-start contributor-panel";

                const name = document.createElement("h5");
                name.className = "mb-1";
                name.textContent = c.name;

                const role = document.createElement("p");
                role.className = "mb-0";
                role.textContent = c.role;

                panel.appendChild(name);
                panel.appendChild(role);

                col.appendChild(img);
                col.appendChild(panel);

                grid.appendChild(col);
            });
        })
        .catch((err) => {
            console.error("Error loading contributors.json", err);
        });
});
