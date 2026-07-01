const submitBtn = document.getElementById("submitBtn");
const jobList = document.getElementById("jobList");

if (!submitBtn || !jobList) {
    console.error("HTML elements not found.");
}

// in-memory sotrage of jobs
let jobs = [];


// On-click button
document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const carModel = document.getElementById("carModel").value;
    const description = document.getElementById("description").value;

    if(!name || !carModel || !description) {
        alert("Please fill in all fields");
        return;
    }

    const job = {
        id: Date.now(),
        name: name,
        carModel: carModel,
        description: description,
        status: "waiting"
    };

    jobs.push(job);

    renderJobs();

    // Clear document
    document.getElementById("jobForm").reset();
});

function renderJobs() {
    jobList.innerHTML = "";

    jobs.forEach(job => {
        const div = document.createElement("div");
        div.classList.add("job", job.status);

        div.innerHTML = `
            <h3>${job.name} - ${job.carModel}</h3>
            <p>${job.description}</p>
            <small>Status: ${job.status}</small>
        `;

        jobList.appendChild(div);
    });
}