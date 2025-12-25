const questions = {
    1: "Little interest or pleasure in doing things?",
    2: "Feeling down, depressed, or hopeless?",
    3: "Trouble falling or staying asleep, or sleeping too much?",
    4: "Feeling tired or having low energy?",
    5: "Trouble concentrating on studies or daily tasks?",
    6: "Feeling bad about yourself or like a failure?",
    7: "Moving/speaking slowly or feeling restless?",
    8: "Feeling nervous, anxious, or on edge?",
    9: "Unable to stop or control worrying?",
    10: "Worrying too much about different things?",
    11: "Trouble relaxing?",
    12: "Feeling so restless it’s hard to sit still?",
    13: "Becoming easily annoyed or irritable?",
    14: "Feeling afraid something bad might happen?",
    15: "Current academic pressure?",
    16: "Stress from deadlines, assignments, or exams?",
    17: "Difficulty maintaining focus while studying?",
    18: "Feeling overwhelmed by academic workload?",
    19: "Overall sleep quality?",
    20: "Physical exhaustion level?",
    21: "Skipping meals due to stress?",
    22: "Feeling supported by friends or family?",
    23: "Comfort discussing problems with someone?",
    24: "Feeling socially isolated or lonely?",
    25: "Using healthy coping methods?",
    26: "Using unhealthy coping methods?",
    27: "Confidence in handling stress?"
};

document.querySelectorAll(".question").forEach(q => {
    const id = q.dataset.id;
    const scale = q.classList.contains("scale5") ? 5 : 3;

    let html = `<label>${id}. ${questions[id]}</label><div class="options">`;

    for (let i = (scale === 5 ? 1 : 0); i <= scale; i++) {
        html += `
            <label>
                <input type="radio" name="q${id}" value="${i}" required>
                ${i}
            </label>
        `;
    }

    html += `</div>`;
    q.innerHTML = html;
});

document.getElementById("mentalHealthForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let total = 0;
    const data = new FormData(this);

    for (let value of data.values()) {
        total += Number(value);
    }

    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `
        <strong>Total Score:</strong> ${total}<br><br>
        This score is not a diagnosis. If distress feels persistent or overwhelming, reaching out to a counselor or mental-health professional is strongly recommended.
    `;
});
