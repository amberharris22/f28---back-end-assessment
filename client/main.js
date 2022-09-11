const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addBtn = document.getElementById("addButton")
const list = document.querySelector('#list')
const form = document.querySelector('form')
const listContainer = document.querySelector('.list')
const inspiration = document.querySelector('.inspiration')
const input = document.querySelector('#addGoals')
const inspBtn = document.querySelector('#inspBtn')
const deleteBtn = document.querySelector('#deleteBtn')
const yesBtn = document.querySelector('#yesBtn')
const img = document.querySelector('img')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };
    
    fortuneBtn.addEventListener('click', getFortune)
    
    // const clearInput = () => input.innerHTML = ``
    
    const addGoal = (event) => {
        event.preventDefault()
              
    let goalInput = input.value
    let goalList=document.createElement('ul')
    listContainer.appendChild(goalList)
    // console.log(goalInput)
    let body = {
        newGoal: goalInput
    }
    
    axios.post("http://localhost:4000/api/goal/",body)
    .then((res) => {
        // console.log(res.data)
        let newGoal = document.createElement('li')
        newGoal.textContent = goalInput
        listContainer.appendChild(newGoal)
    })
    // clearInput ()
}
form.addEventListener('submit', addGoal)

// const updateImage = () => {
//     let img = document.querySelector('img')
//     img = ''
//     img.push(src ="http://www.freak4mypet.com/images/paws_motivational/Motivational_2.jpg")
// }
// const changeImage = (img) => {

//     axios.put(`http://localhost:4000/api/inspiration/`).then(updateImage)
//  }
//  inspBtn.addEventListener('click', changeImage)



const deleteImage = () => {
    axios.delete('http://localhost:4000/api/inspiration')
    .then(hideImg)
}


const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspiration/")
    .then(res => {
        let newImg = document.createElement('img')
        newImg.setAttribute('src', 'http://www.freak4mypet.com/images/paws_motivational/Motivational_2.jpg')
        newImg.setAttribute('style', 'visibility: "visible"')
        inspiration.appendChild(newImg)
        // let newBtns = document.createElement('section')
        // newBtns.innerHTML = `<button onclick = "changeImage">Try something new</button>
        // <button onclick = "deleteImage">This is not inspiring</button>`
        // inspiration.appendChild(newBtns)
    });
};
const hideImg = () => img.style.visibility = "hidden"

yesBtn.addEventListener('click', getInspiration)
deleteBtn.addEventListener('click', deleteImage)


