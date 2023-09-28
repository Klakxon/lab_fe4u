// Створення масиву вчителів
let teachers = [
    {name: "Daisy Alexander", specialty: "Chemistry", age: 28, gender: "Female", nationality: "Vietnam"},
    {name: "Julia Bradley", specialty: "Math", age: 26, gender: "Female", nationality: "USA"},
    {name: "Rita Hart", specialty: "Art", age: 41, gender: "Female", nationality: "Ireland"},
    {name: "Jonathan Jacobs", specialty: "Math", age: 32, gender: "Male", nationality: "England"},
    {name: "Nathaniel White", specialty: "Computer Science", age: 37, gender: "Male", nationality: "Austria"},
    {name: "Frank Medina", specialty: "English", age: 43, gender: "Male", nationality: "Italy"},
    {name: "Ella Curtis", specialty: "Chess", age: 34, gender: "Female", nationality: "USA"},
    {name: "Claire Simmmons", specialty: "Art", age: 38, gender: "Female", nationality: "Netherlands"},
    {name: "Benjamin Knight", specialty: "Biology", age: 44, gender: "Male", nationality: "Scotland"},
    {name: "Norma Rose", specialty: "Statistics", age: 36, gender: "Female", nationality: "France"},
];

// Функція для створення таблиці HTML
function createTable(teachers) {
    let table = "<table class='statistics'>";
    table += "<h2>Statistics</h2>";
    table += "<tr><th class='first_th'>Name</th><th>Spciality</th><th>Age</th><th>Gender</th><th>Nationality</th></tr>";
    for (let i = 0; i < teachers.length; i++) {
        table += "<tr class='first_tr'>";
        table += "<td>" + teachers[i].name + "</td>";
        table += "<td>" + teachers[i].specialty + "</td>";
        table += "<td>" + teachers[i].age + "</td>";
        table += "<td>" + teachers[i].gender + "</td>";
        table += "<td>" + teachers[i].nationality + "</td>";
        table += "</tr>";
        i++;
        table += "<tr class='second_tr'>";
        table += "<td>" + teachers[i].name + "</td>";
        table += "<td>" + teachers[i].specialty + "</td>";
        table += "<td>" + teachers[i].age + "</td>";
        table += "<td>" + teachers[i].gender + "</td>";
        table += "<td>" + teachers[i].nationality + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    return table;
}

// Функція для вставки таблиці у HTML
function insertTable() {
    document.getElementById("section_Statistics").innerHTML = createTable(teachers);
}

// Виклик функції insertTable після завантаження сторінки
window.onload = insertTable;