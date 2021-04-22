
async function getData() {
    const response = await fetch('task.csv');
    const data = await response.text();
    let tbl = document.createElement('table');
    const table = data.split('\n');
    table.forEach(row => {
        const columns = row.split(';');
        const firstcol = columns[0] + ' ';
        const thirdcol = columns[3] + ' ';
        const fourthcol = columns[4] + ' ';
        const last = columns[columns.length - 1];
        
        
        let tbl_row = document.createElement('tr'); // for each row
        let tbl_cell = document.createElement('td'); // for each cell
        let text1 = document.createTextNode(firstcol)
        let text2 = document.createTextNode(thirdcol)
        let text3 = document.createTextNode(fourthcol)
        let text4 = document.createTextNode(last)

        tbl.appendChild(tbl_row);
        tbl_row.appendChild(tbl_cell);
        tbl_cell.appendChild(text1);
        tbl_cell.appendChild(text2);
        tbl_cell.appendChild(text3);
        tbl_cell.appendChild(text4);
    })
    document.body.appendChild(tbl);
}

getData();
