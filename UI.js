const steps = document.querySelectorAll(".step");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentStep = 1;

// Update Steps UI
function updateSteps() {
  steps.forEach((step, index) => {
    const stepNumber = index + 1;

    if (stepNumber < currentStep) {
      step.classList.remove("disabled");
      step.classList.add("active");
    } else if (stepNumber === currentStep) {
      step.classList.remove("disabled");
      step.classList.add("active");
    } else {
      step.classList.add("disabled");
      step.classList.remove("active");
    }
  });

  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === steps.length;
}

// Button Actions
prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
  }
});

nextButton.addEventListener("click", () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateSteps();
  }
});

// Initialize
updateSteps();
