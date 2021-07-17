let data_array = []

function returnGender() {
    let genderList = document.getElementsByName("gender")
    for (i=0; i<genderList.length; i++) {
        if (genderList[i].checked) {
            val = genderList[i].value 
            genderList[i].checked = false
            return genderList[i].value 
        }
    }
}

function submitForm() {
    let first_name = document.getElementById("first_name").value
    document.getElementById("first_name").value = ""
    let last_name = document.getElementById("last_name").value
    document.getElementById("last_name").value = ""
    let address = document.getElementById("address").value
    document.getElementById("address").value = ""
    let pincode = document.getElementById("pincode").value
    document.getElementById("pincode").value = ""
    let gender = returnGender()
    let food = document.getElementById("food").value
    document.getElementById("food").value = ""
    let state = document.getElementById("state").value
    document.getElementById("state").value = ""
    let country = document.getElementById("country").value
    document.getElementById("country").value = ""
    const arr = [first_name, last_name, address, pincode, gender, food, state, country]
    data_array.push(arr)
    
    let table = document.createElement('table')
    for ( let i=0; i<data_array.length; i++) {
        let row = table.insertRow()
        for ( let j=0; j<data_array[i].length; j++) {
            let cell = row.insertCell()
            let bold = document.createElement('b')
            bold.textContent = data_array[i][j]
            cell.appendChild(bold)
            
        }
        document.getElementById("persons_table_body").appendChild(row)
    }
    
}
