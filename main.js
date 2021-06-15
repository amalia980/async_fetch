
const ul = document.getElementById("myUl");
const URL = "https://cat-fact.herokuapp.com/facts";

function toLiTag(obj) {
    const li = document.createElement("li");
    li.innerText = obj.text;

    return li;
}

async function main() {
    const response = await fetch(URL);
    const catArray = await response.json();

    const liTags = catArray.map(toLiTag);
    liTags.forEach(li => ul.appendChild(li));
}

main();

