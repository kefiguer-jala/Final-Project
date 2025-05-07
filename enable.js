// Script for ten question quiz using response from checkboxes.

document.querySelector("#question1").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output1").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output1"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question2").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output2").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output2"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question3").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output3").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output3"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question4").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output4").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output4"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question5").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output5").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output5"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question6").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output6").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output6"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question7").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output7").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output7"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question8").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output8").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output8"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question9").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output9").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output9"
      ).textContent = `Incorrect.`;
    }
  });
  document.querySelector("#question10").addEventListener("click", (e) => {
    let selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer.id === "correct")
      document.querySelector("#output10").textContent =
        "Correct.";
    else {
      let answer =
      selectedAnswer.id[0].toUpperCase() + selectedAnswer.id.substring(1);
      document.querySelector(
        "#output10"
      ).textContent = `Incorrect.`;
    }
  });
  

  // Script for Bootstrap popover
  var popoverTriggerList = [].slice.call( 
    document.querySelectorAll('[data-bs-toggle="popover"]') 
); 
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) { 
    return new bootstrap.Popover(popoverTriggerEl); 
}); 
