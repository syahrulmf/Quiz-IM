var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

function printItems(array) {
    var output = ""
    for (var i = 0; i < array.length; i++) {
        output += `
            <div class="col-md-4 mt-2 mb-2">
                <div class="card shadow" style = "width: 100%;">
                    <img src="${array[i][4]}" class="card-img-top p-3" style="height: 230px;">
                    <div class="card-body" id="card>
                        <h5 class="card-title" id="itemName">${array[i][1]}</h5>
                        <p class="card-text" id="itemDesc">${array[i][3]}</p>
                        <p class="card-text">Rp.${array[i][2]}</p>
                        <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                    </div>
                </div>
            </div>`;
    }
    return output
}

document.getElementById("listBarang").innerHTML = printItems(items)

// form search
var formSearch = document.getElementById("formItem")
formSearch.addEventListener("submit", function (evt) {
    evt.preventDefault()
    var keyword = document.getElementById("keyword").value

    var filteredItems = filtering(keyword)
    console.log(filteredItems)
    document.getElementById("listBarang").innerHTML = printItems(filteredItems)
})

function filtering(string) {
        var filteredItems = []
        for(var j=0; j<items.length; j++){
            var itemNameLowerCase = items[j][1].toLowerCase()
            var stringToLowerCase = string.toLowerCase()
            if (itemNameLowerCase.includes(stringToLowerCase)) {
                filteredItems.push(items[j])
            }
        }
        return filteredItems
}