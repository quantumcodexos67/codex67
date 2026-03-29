function setVisibleUseCase(id) {
  const panels = document.querySelectorAll(".use-case-desc");
  const buttons = document.querySelectorAll(".toggle-button");

  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.id === id);
  });

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === id);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const firstPanel = document.querySelector(".use-case-desc");
  if (firstPanel) {
    setVisibleUseCase(firstPanel.id);
  }
});
