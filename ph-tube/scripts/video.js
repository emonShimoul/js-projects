console.log("script added");

const loadCategories = () => {
  console.log("Loadcategories created!!");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (data) => {
  console.log(data);
};

loadCategories();
