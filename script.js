document.getElementById("fetch-data").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.innerHTML = "Cargando datos...";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        output.innerHTML = data
            .slice(0, 5) 
            .map(post => `<p><strong>${post.title}</strong><br>${post.body}</p>`)
            .join("");
    } catch (error) {
        output.innerHTML = "Error al cargar los datos.";
        console.error(error);
    }
});
