const enrolledStudent = document.querySelector(".record");
const studentList = [];

const generateStudent= (details) => {
    enrolledStudent.insertAdjacentHTML(
        "afterbegin",
        `<div class="student-card">
            <h3>
                <em>${details.name}</em>
            </h3>
            <h3>
                <em>${details.age}</em>
            </h3>
            <h3>
                <em>${details.email}</em>
            </h3>
            <h3>
                <em>${details.gender}</em>
            </h3>
            <h3>
                <em>${details.skills}</em>
            </h3>
        </div>`
    );
};

const studentAdded = (e) => {
    e.preventDefault();
    const details = {
        id: `${Date.now()}`,
        name: document.getElementById("name").value,
        // name: document.getElementById("last name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        gender: document.querySelector("input[name='gender']:checked").value,
        skills: document.querySelector("input[name='skills']:checked").value,
    };

    generateStudent(details);

    studentList.push(details);
    localStorage.setItem("studentList", JSON.stringify(studentList));
};

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", studentAdded);