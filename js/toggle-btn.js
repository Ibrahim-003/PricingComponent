const d = document;
const $checkBtn = d.querySelector("#btn-price");
const $listPlans = d.querySelectorAll(".card__price");
const anualPrice = {
  basic: 199.99,
  professional: 249.99,
  master: 399.99,
};

const monthPrice = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99,
};

$checkBtn.addEventListener("click", () => {
  $listPlans.forEach((el) => {
    let typePlan = el.getAttribute("data-plan");

    if ($checkBtn.checked) {
      el.innerHTML = anualPrice[typePlan];
    } else if (!$checkBtn.checked) {
        el.innerHTML = monthPrice[typePlan];
    }
  });
  
});
