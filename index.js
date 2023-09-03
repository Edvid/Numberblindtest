import Counter from "./counter.js";

function run(){
    const tablerows = document.querySelectorAll("tr");
    tablerows.forEach(tr => {
        const cellsInRow = tr.querySelectorAll("th, td");
        cellsInRow.forEach(te => {
            new Counter(te, Math.random()>0.5, Math.ceil(Math.random()*10));
        });
    });
}

document.addEventListener("DOMContentLoaded", run);