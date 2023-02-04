

const table = document.getElementById("multi_table");

mountTable = () => {
    const rows  = prompt("Enter rows : ")
    const cols  = prompt("Enter columns : ")

    for (let i = 1; i <=rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 1; j <=cols; j++) {
            const td = document.createElement("td");
            td.innerHTML= i * j;
            tr.appendChild(td);
        }
        
    table.appendChild(tr);
    }



}
mountTable();