const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];




// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();



// Question 2

heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";



// Question 3

heading.style.fontSize = "2em";



// Question 4

heading.className = "subheading";



// Question 5

paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// Question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="color: yellow">New paragraph</p>`



// Question 7

function catList(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catList(cats);



// Question 8

const catContainer = document.querySelector(".cat-container");

let html = "";

function createCats(cats) {
    
    for(let i = 0; i < cats.length; i++) {

        let displayAge = "Age unknown";

        if(cats[i].age) {
            displayAge = cats[i].age;
        }

        html += `<div><h5>${cats[i].name}</h5>
                <p>Age: ${displayAge}</p>
            </div>`  
    }
    
    return html;
}

const newHTML = createCats(cats);
catContainer.innerHTML = newHTML;
