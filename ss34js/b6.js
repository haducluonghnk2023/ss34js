function addItem(){
    var inputValue = document.getElementById("inputValue").value;
    if (inputValue.trim() !== "") {
        var itemList = document.getElementById("itemList");
        var liElement = document.createElement("li");
        liElement.textContent = inputValue;
        itemList.appendChild(liElement);
        document.getElementById("inputValue").value = "";
    }
}