interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: "Godwin",
  lastName: "Laryea",
  age: 27,
  location: "Accra",
};

const Student2: Student = {
  firstName: "Naadu",
  lastName: "Mills",
  age: 30,
  location: "Kumasi",
};

const studentList: Student[] = [Student1, Student2];

const table: HTMLTableElement = document.createElement("table");
table.style.width = "50%";
table.style.borderCollapse = "collapse";

studentList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "0.75rem";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "0.75rem";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
