document.querySelector(".cube-list").addEventListener("click", (ev) => {
  const target = ev.target;
  if (target.classList.contains("more")) {
    const desc = target.parentNode.querySelector(".cubeDescription");
    if (desc.style.display == "block") {
      desc.style.display = "none";
      target.textContent = "See more";
    } else {
      desc.style.display = "block";
      target.textContent = "HIDE";
    }
  }
});
