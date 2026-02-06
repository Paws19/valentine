function openGift() {
  const center = document.getElementById("center");
  const text = document.getElementById("text");

  // Hide text
  text.classList.add("hide-text");

  // Transform into heart
  center.classList.add("heart");

  // Fade everything away
  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 900);

  // Optional next step
  setTimeout(() => {
    window.location.href = "question.html";
    console.log("Heart faded 💖");
  }, 1600);
}

function showGift() {
  const center = document.getElementById("center");
  const text = document.getElementById("text");

  // Hide text
  text.classList.add("hide-text");

  // Transform into heart
  center.classList.add("heart");

  // Fade out page
  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 900);

  // Redirect AFTER animation
  setTimeout(() => {
    window.location.href =
      "https://media.tenor.com/HWPv_rwAX44AAAAM/triste-pleure.gif";
  }, 1600);
}
