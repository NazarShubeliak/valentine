function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase().trim();
  const correctAnswer = "твоявідповідь"; // ти знаєш її 😉

  if (answer === correctAnswer) {
    window.location.href = "riddle2.html";
  } else {
    document.getElementById("error").textContent = "Спробуй ще раз 💕";
  }
}
