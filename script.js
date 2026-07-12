const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const summaryInput = document.getElementById("summary");
const skillsInput = document.getElementById("skills");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewSummary = document.getElementById("previewSummary");
const previewSkills = document.getElementById("previewSkills");

const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn")


nameInput.addEventListener("input", function () {
    previewName.textContent = nameInput.value;
});

emailInput.addEventListener("input", function () {
    previewEmail.textContent = emailInput.value;
});

phoneInput.addEventListener("input", function () {
    previewPhone.textContent = phoneInput.value;
});

summaryInput.addEventListener("input", function () {
    previewSummary.textContent = summaryInput.value;
});

skillsInput.addEventListener("input", function () {
    previewSkills.textContent = skillsInput.value;
});

clearBtn.addEventListener("click", function () {

    document.getElementById("resumeForm").reset();

    previewName.textContent = "Your Name";
    previewEmail.textContent = "Email";
    previewPhone.textContent = "Phone";
    previewSummary.textContent = "";
    previewSkills.textContent = "";
});

downloadBtn.addEventListener("click", function () {

    const resume = document.querySelector(".preview-section");

    const options = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf().set(options).from(resume).save();

});