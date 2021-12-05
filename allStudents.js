var selectedRow = null;



fetch('students.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


        function appendData(data) {
            var table = document.getElementById('employeeList')

		for (var i = 0; i < data.length; i++){
        
			var row = `<tr>
							<th>${data[i].sid}</th>
							<th>${data[i].fname}</th>
							<th>${data[i].lname}</th>
                            <th>${data[i].dob}</th>
							<th>${data[i].JD}</th>
							<th>${data[i].email}</th>
							<th>${data[i].gender}</th>
                            <th>${data[i].drop}</th>
					  </tr>`

                table.innerHTML += row
            
 
            
           

        }}

function onFormSubmit() {
    if (validateID() && validatename() && validatelname() && validateemail() && validatedrop()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["sid"] = document.getElementById("sid").value;
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["jd"] = document.getElementById("jd").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["drop"] = document.getElementById("drop").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.jd;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.gender;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.drop;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a1 onClick="onEdit(this)">Edit</a>
                       <a1 onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("sid").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("jd").value = "";
    document.getElementById("email").value = "";
    document.getElementById("drop").value = "";
    document.getElementById("gender").value = "";




    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("jd").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[6].innerHTML;
    document.getElementById("drop").value = selectedRow.cells[7].innerHTML;



}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sid;
    selectedRow.cells[1].innerHTML = formData.fname;
    selectedRow.cells[2].innerHTML = formData.lname;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.jd;
    selectedRow.cells[5].innerHTML = formData.email;
    selectedRow.cells[6].innerHTML = formData.gender;
    selectedRow.cells[7].innerHTML = formData.drop;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validateID() {
    isValid = true;
    if (document.getElementById("sid").value == "") {
        isValid = false; 
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatename() {
    isValid = true;
    if (document.getElementById("fname").value == "") {
        isValid = false; 
        document.getElementById("fnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }
    return isValid;
}

function validatelname() {
    isValid = true;
    if (document.getElementById("lname").value == "") {
        isValid = false; 
        document.getElementById("lnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lnameValidationError").classList.contains("hide"))
            document.getElementById("lnameValidationError").classList.add("hide");
    }
    return isValid;
}


function validateemail() {
    isValid = true;
    if (document.getElementById("email").value == "") {
        isValid = false; 
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }
    return isValid;
}

function validatedrop() {
    isValid = true;
    if (document.getElementById("drop").value == "") {
        isValid = false; 
        document.getElementById("dropValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("dropValidationError").classList.contains("hide"))
            document.getElementById("dropValidationError").classList.add("hide");
    }
    return isValid;
}

function ab(){
var todayDate = new Date();
var month = todayDate.getMonth+1;
var day =todayDate.getDate();
var year= todayDate.getFullYear();
if(month<10)
    month='0' + month
if(day<10)
day= '0' + day
var maxDate= year + "-" +month + "-" +day;
document.getElementById("dob").setAttribute("max",maxDate);
}

function dobValidate(birth) {
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();
    var b = document.getElementById("dob").value;
    var birth = new Date(b);

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;
    DateDate

    if (age > 60) {
        alert("Sorry, you cannot be older than 60 years")
        return false;
    }
    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
        age = parseInt(age) - 1;

    }
    if ((age == 17 && age_month <= 0 && age_day <= 0) || age < 17) {
        alert("Sorry, you should be older than 17");
        return false;
    }
}



