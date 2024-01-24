function addrow(){
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = "cell 1 row 1";
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = "cell 2 row 2";
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "cell 3 row 2";
}
