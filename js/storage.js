const STORAGE_KEY = "jobs";

function saveJobs(jobs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

function loadJobs() {
    const jobs = localStorage.getItem(STORAGE_KEY);

    if (!jobs) {
        return [];
    }

    return JSON.parse(jobs);
}