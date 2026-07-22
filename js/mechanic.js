const jobList = document.getElementById("jobList");

if (!jobList) {
    throw new Error("Required HTML elements missing");
}

let jobs = loadJobs();

function printJobs() {
    console.log(jobs);
}

renderJobs();

function makeButton(text, className, onClick) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

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

        if (job.status === "pending") {

            const acceptButton = makeButton("Accept Job", "accept-btn", function() {
                job.status = "in_progress";
                saveJobs(jobs);
                renderJobs();
            });

            div.appendChild(acceptButton);
        } else if (job.status === "in_progress") {

            const completeButton = makeButton("Complete Job", "complete-btn", function() {
                job.status = "completed";
                saveJobs(jobs);
                renderJobs();
            });

            div.appendChild(completeButton);
        } else if (job.status === "completed") {
            const deleteButton = makeButton("Delete Job", "delete-btn", function() {
                jobs = jobs.filter(j => j.id !== job.id);
                saveJobs(jobs);
                renderJobs();
            });

            div.appendChild(deleteButton);
        }

        jobList.appendChild(div);
        
    });
}