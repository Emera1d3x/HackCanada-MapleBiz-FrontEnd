document.getElementById("clearFile").addEventListener("click", function () {
    document.getElementById("fileUpload").value = "";
});


document.getElementById("add-product").addEventListener("click", function() {
    let productName = document.getElementById("product-name").value;
    let productCost = document.getElementById("product-cost").value;
    
    if (productName.trim() === "" || productCost.trim() === "") {
        alert("Please enter both product name and cost.");
        return;
    }
    
    let tableBody = document.querySelector(".product-table tbody");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${productName}</td>
        <td>$${productCost}</td>
        <td><button class="delete-btn">X</button></td>
    `;

    tableBody.appendChild(row);

    document.getElementById("product-name").value = "";
    document.getElementById("product-cost").value = "";
});

document.getElementById("pt").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        console.log("Deleting row...");
        event.target.closest("tr").remove();
    }
});
