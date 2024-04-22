function addingEventListener() { // revisit this concept
    const input = document.getElementById("button");
    input.addEventListener("click", function () {
      alert("I was clicked!");
    });
  }