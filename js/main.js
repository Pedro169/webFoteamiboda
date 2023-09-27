const gallery = document.querySelectorAll(".image");
const modal = document.querySelector(".modal");
const modalContent = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

gallery.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.src = image.querySelector("img").src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
