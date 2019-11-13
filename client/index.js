const URL = 'http://localhost:5000/api/pr/category/3064';

async function apiGetAll() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

apiGetAll().then(data => {
  const selectCategories = document.getElementById('categories');
  for (var i = 0; i < data.categories.length; i++) {
    var option = document.createElement('option');
    option.text = data.categories[i].text;
    option.value = data.categories[i].value;
    selectCategories.appendChild(option);
  }
});
