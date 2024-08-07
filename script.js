document.addEventListener("DOMContentLoaded", function() {
    const authors = [
        {
            name: "John Michael",
            email: "john@creative-tim.com",
            function: "Manager",
            organization: "Organization",
            status: "ONLINE",
            employed: "23/04/18",
            img: "./img/profile.png" // Substitua pelo caminho correto da imagem
        },
        {
            name: "Alexa Liras",
            email: "alexa@creative-tim.com",
            function: "Programator",
            organization: "Developer",
            status: "OFFLINE",
            employed: "11/01/19",
            img: "./img/profile.png"  // Substitua pelo caminho correto da imagem
        },
        {
            name: "Laurent Perrier",
            email: "laurent@creative-tim.com",
            function: "Executive",
            organization: "Projects",
            status: "ONLINE",
            employed: "19/09/17",
            img: "./img/profile.png"  // Substitua pelo caminho correto da imagem
        },
        {
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            function: "Programator",
            organization: "Developer",
            status: "ONLINE",
            employed: "24/12/08",
            img: "./img/profile.png"  // Substitua pelo caminho correto da imagem
        }
    ];
  
    const tableBody = document.querySelector("#authors-table tbody");
  
    authors.forEach(author => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
            <td>
                <img src="${author.img}" alt="Author Image"> 
                <div>${author.name}<br><span>${author.email}</span></div>
            </td>
            <td>${author.function} <span>${author.organization}</span></td>
            <td><span class="status ${author.status.toLowerCase()}">${author.status}</span></td>
            <td>${author.employed}</td>
            <td><a href="#" class="edit-btn">Edit</a></td>
        `;
  
        tableBody.appendChild(row);
    });
});
