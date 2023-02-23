const empty1 = document.querySelector(".empty1");
const empty2 = document.querySelector(".empty2");
const empty3 = document.querySelector(".empty3");

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const submit = document.querySelector('.submit')

submit.addEventListener('click', function () {
  const form = document.forms[0];
  const required = form.querySelectorAll('[required]');
  const invalids = Array.from(required).filter(node => {
    return !node.checkValidity();
  })

  console.log(typeof invalids)
  invalids.forEach(invalid => {
    if (invalid == input1) {
      empty1.style.display = "flex";

    }
    if (invalid == input2) {
      empty2.style.display = "flex";
    }
    if (invalid == input3) {
      empty3.style.display = "flex";
    }
  })
})

input1.oninput = function () {
  if (input1.value.length > 0) {
    empty1.style.display = "none";
  } else {
    empty1.style.display = "flex";
  }
}

input2.oninput = function () {
  if (input2.value.length > 0) {
    empty2.style.display = "none";
  } else {
    empty2.style.display = "flex";
  }
}

input3.oninput = function () {
  if (input3.value.length > 0) {
    empty3.style.display = "none";
  } else {
    empty3.style.display = "flex";
  }
}