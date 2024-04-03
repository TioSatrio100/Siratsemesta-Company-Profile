document.addEventListener("DOMContentLoaded", function () {
  const openChatbotButton = document.getElementById("openChatbot");
  const chatbotContainer = document.querySelector(".chatbot");

  openChatbotButton.addEventListener("click", function () {
    // Toggle kelas untuk menampilkan atau menyembunyikan chatbot
    chatbotContainer.classList.toggle("show");
  });
});
