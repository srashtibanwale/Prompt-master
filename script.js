let level = 1;

function submitPrompt() {
    const userPrompt = document.getElementById('user-prompt').value;
    const feedbackDiv = document.getElementById('feedback');

    // Basic feedback logic for simplicity
    if (!userPrompt) {
        feedbackDiv.innerHTML = '<p>Please enter a prompt!</p>';
    } else if (userPrompt.toLowerCase().includes('recipe')) {
        feedbackDiv.innerHTML = '<p>Great job! Your prompt was clear and relevant.</p>';
    } else {
        feedbackDiv.innerHTML = '<p>Try to be more specific. What kind of recipe are you looking for?</p>';
    }

    // Move to the next level
    level++;
    if (level > 3) {
        feedbackDiv.innerHTML += '<p>You have completed all levels! Congratulations!</p>';
    } else {
        document.querySelector('h2').innerText = `Level: ${level}`;
        document.querySelector('p').innerText = `Task: Create a prompt to explain something about level ${level}`;
        document.getElementById('user-prompt').value = '';
    }
}
