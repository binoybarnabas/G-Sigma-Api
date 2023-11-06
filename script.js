

fetch('https://api.msigma.in/btech/v2/branches')
.then(res => res.json())
.then(
    (data)=>{
    console.log(data);
    data.branches.map(
        (branch,index)=>{
        if(index<10){   
            console.log(branch);
            let courseData = document.querySelector('.course-data');
            let courseCard = getCourseCards(branch);
            courseData.appendChild(courseCard);
        }
        }
    )}).
catch((err)=>{      
    console.error(err);
})

let getCourseCards=(branch)=>{
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const card = document.createElement('div');
    card.classList.add('course-card');

    const short = document.createElement('h2');
    short.style.color = randomColor;
    short.textContent = branch.short;
    short.classList.add('short-course');

    const long = document.createElement('p');
    long.textContent = branch.name;
    long.classList.add('long-course');

    const buttondiv =  document.createElement('div');
    buttondiv.classList.add('button-style')
    const button = document.createElement('button');
    button.style.borderColor = randomColor;
    button.style.color = randomColor;
    button.textContent = "Apply Now";

    const price = document.createElement('p');
    price.textContent = "Fee starting at ₹799 per subject";
    price.classList.add('course-price');

    card.appendChild(short);
    card.appendChild(long);
    buttondiv.appendChild(button);
    card.appendChild(buttondiv);
    card.appendChild(price)
    return card;
}



