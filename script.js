// ===============================
// Live Preview
// ===============================

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const summaryInput = document.getElementById("summary");
const skillsInput = document.getElementById("skills");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewAddress = document.getElementById("previewAddress");
const previewSummary = document.getElementById("previewSummary");
const previewSkills = document.getElementById("previewSkills");


// Name
nameInput.addEventListener("input", () => {
    previewName.textContent = nameInput.value || "Your Name";
});

// Email
emailInput.addEventListener("input", () => {
    previewEmail.textContent = emailInput.value || "Email";
});

// Phone
phoneInput.addEventListener("input", () => {
    previewPhone.textContent = phoneInput.value || "Phone Number";
});

// Address
addressInput.addEventListener("input", () => {
    previewAddress.textContent = addressInput.value || "Address";
});

// Summary
summaryInput.addEventListener("input", () => {
    previewSummary.textContent =
        summaryInput.value || "Your summary will appear here...";
});

// Skills
skillsInput.addEventListener("input", () => {

    previewSkills.innerHTML = "";

    const skills = skillsInput.value.split(",");

    skills.forEach(skill => {

        if (skill.trim() !== "") {

            const li = document.createElement("li");
            li.textContent = skill.trim();

            previewSkills.appendChild(li);
        }

    });

});

// =======================================
// Add Education
// =======================================

const educationContainer = document.getElementById("educationContainer");
const previewEducation = document.getElementById("previewEducation");

document.getElementById("addEducation").addEventListener("click", () => {

    const div = document.createElement("div");

    div.classList.add("education-item");

    div.innerHTML = `
        <input type="text" placeholder="Degree">
        <input type="text" placeholder="College">
        <input type="text" placeholder="Year">
        <hr>
    `;

    educationContainer.appendChild(div);

    updateEducation();

    div.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateEducation);
    });

});

function updateEducation() {

    previewEducation.innerHTML = "";

    const items = educationContainer.querySelectorAll(".education-item");

    items.forEach(item => {

        const inputs = item.querySelectorAll("input");

        const degree = inputs[0].value;
        const college = inputs[1].value;
        const year = inputs[2].value;

        const p = document.createElement("p");

        p.innerHTML = `<strong>${degree}</strong><br>${college}<br>${year}`;

        previewEducation.appendChild(p);

    });

}

// =======================================
// Add Experience
// =======================================

const experienceContainer = document.getElementById("experienceContainer");
const previewExperience = document.getElementById("previewExperience");

document.getElementById("addExperience").addEventListener("click", () => {

    const div = document.createElement("div");

    div.classList.add("experience-item");

    div.innerHTML = `
        <input type="text" placeholder="Job Title">
        <input type="text" placeholder="Company">
        <input type="text" placeholder="Duration">
        <hr>
    `;

    experienceContainer.appendChild(div);

    updateExperience();

    div.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateExperience);
    });

});

function updateExperience() {

    previewExperience.innerHTML = "";

    const items = experienceContainer.querySelectorAll(".experience-item");

    items.forEach(item => {

        const inputs = item.querySelectorAll("input");

        const job = inputs[0].value;
        const company = inputs[1].value;
        const duration = inputs[2].value;

        const p = document.createElement("p");

        p.innerHTML = `<strong>${job}</strong><br>${company}<br>${duration}`;

        previewExperience.appendChild(p);

    });

}

// =======================================
// Clear Form
// =======================================

document.getElementById("clearBtn").addEventListener("click", () => {

    document.getElementById("resumeForm").reset();

    educationContainer.innerHTML = "";
    experienceContainer.innerHTML = "";

    previewName.textContent = "Your Name";
    previewEmail.textContent = "Email";
    previewPhone.textContent = "Phone Number";
    previewAddress.textContent = "Address";
    previewSummary.textContent = "Your summary will appear here...";

    previewSkills.innerHTML = "";
    previewEducation.innerHTML = "";
    previewExperience.innerHTML = "";

});


// =======================================
// download PDF
// =======================================

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

    const resume = document.querySelector(".resume");

    // Save old styles
    const oldWidth = resume.style.width;
    const oldMargin = resume.style.margin;
    const oldBoxShadow = resume.style.boxShadow;

    // Apply print styles
    resume.style.width = "100%";
    resume.style.margin = "0";
    resume.style.boxShadow = "none";

    html2pdf().set({
        margin: 10,
        filename: "resume.pdf",
        html2canvas: {
            scale: 2,
            scrollY: 0
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    }).from(resume).save().then(() => {

        // Restore styles
        resume.style.width = oldWidth;
        resume.style.margin = oldMargin;
        resume.style.boxShadow = oldBoxShadow;

    });

});