const classifica = [
    { nome: "Squadra A", punti: 9 },
    { nome: "Squadra B", punti: 6 },
    { nome: "Squadra C", punti: 3 },
    { nome: "Squadra D", punti: 1 }
];

const tbody = document.querySelector("#classifica tbody");

classifica.sort((a, b) => b.punti - a.punti);
classifica.forEach((squadra, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${squadra.nome}</td>
        <td>${squadra.punti}</td>
    `;
    tbody.appendChild(row);
});
