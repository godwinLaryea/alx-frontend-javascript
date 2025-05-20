var Student1 = {
    firstName: "Godwin",
    lastName: "Laryea",
    age: 27,
    location: "Accra",
};
var Student2 = {
    firstName: "Naadu",
    lastName: "Mills",
    age: 30,
    location: "Kumasi",
};
var studentList = [Student1, Student2];
var table = document.createElement("table");
table.style.width = "50%";
table.style.borderCollapse = "collapse";
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "0.75rem";
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "0.75rem";
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
