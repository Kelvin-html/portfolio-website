// TOGGLE MODAL ON LETS TALK//
function toggleModal(){
  const modal = document.getElementById('modalOverlay');
  if (modal.style.display ==='none' ||  modal.style.display === ''){modal.style.display = 'flex'} else {modal.style.display = 'none'}
}const wrapper = document.getElementById("menuIcon");
const icon = wrapper.querySelector(".icon-button");
const menu = document.getElementById("dropdownMenu");

let isMenuOpen = false;

wrapper.addEventListener("click", (event) => {
  // Prevent click from bubbling to window (important)
  event.stopPropagation();

  if (isMenuOpen) {
    menu.classList.remove("show");
    menu.classList.add("hide");
    icon.classList.replace("fa-xmark", "fa-bars");

    setTimeout(() => {
      menu.style.display = "none";
      menu.classList.remove("hide");
    }, 300);
  } else {
    menu.style.display = "block";
    menu.classList.add("show");
    icon.classList.replace("fa-bars", "fa-xmark");
  }

  isMenuOpen = !isMenuOpen;
});



// Close on outside click
window.addEventListener("click", (event) => {
  if (!wrapper.contains(event.target) && isMenuOpen) {
    menu.classList.remove("show");
    menu.classList.add("hide");
    icon.classList.replace("fa-xmark", "fa-bars");

    setTimeout(() => {
      menu.style.display = "none";
      menu.classList.remove("hide");
    }, 300);
    isMenuOpen = false;
  }
});



//TOGGLE MODAL FOR CONTACT INf0
const modal = document.getElementById('modalOverlay');
 const closeBtn= document.getElementById("close-modal")
function toggleModal() {
  modal.classList.toggle('active');
}
document.getElementById('contactLink').addEventListener('click', function(e) {
  e.preventDefault();
  toggleModal();
});
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this);{  toggleModal();
  }
});
closeBtn.addEventListener('click', () => {toggleModal()});