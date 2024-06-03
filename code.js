function nextQuestion(currentQuestion) {
    const current = document.getElementById(`question${currentQuestion}`);
    const next = document.getElementById(`question${currentQuestion + 1}`);

    if (next) {
        current.style.display = 'none';
        next.style.display = 'block';
    } else {
        // If there is no next question, show submit button
        current.style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    }
}

function submitQuiz() {
    const answers = {
        q1: '8',
        q2: 'Earth',
        q3: 'Jupiter',
        q4: 'Neptune',
        q5: 'Mercury'
        // Add the correct answers for the remaining questions
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;
    Object.keys(answers).forEach(question => {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You scored ${score} out of ${totalQuestions}`;
    document.getElementById('submitBtn').style.display = 'none'; // Hide submit button after scoring
}
