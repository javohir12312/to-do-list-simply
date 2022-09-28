import { data } from "./users.js";

let res = document.body.querySelector(".res")

function creatEl(task) {
  res.innerHTML = ''
  for (let i = 0; i < task.length; i++) {

    //img
    let newLi = document.createElement('li')
    newLi.style.height = "auto"
    newLi.classList = "py-4 d-flex align-content-between justify-content-between"
    let newImg = document.createElement('img');
    newImg.classList = "rounded-circle"
    newImg.style.height = "40px"
    newImg.src = task[i].ava;
    newLi.appendChild(newImg);
    res.append(newLi)

    //linked
    let newDiv = document.createElement('div')
    newDiv.className = 'text-center'
    let newH5 = document.createElement('h5')
    newH5.className = "m-0 fs-6"
    newH5.textContent = task[i].address
    let newp = document.createElement('p')
    newp.textContent = task[i].date_of_register;
    newDiv.append(newH5, newp)
    newLi.append(newDiv)
    res.append(newLi)

    //name

    let newDiv2 = document.createElement('div')
    newDiv2.className = 'text-center'
    let newH52 = document.createElement('h5')
    newH52.className = "m-0 fs-6"
    newH52.textContent = task[i].name
    let newp2 = document.createElement('p')
    newp2.textContent = task[i].date_of_onliine;
    newDiv2.append(newH52, newp2)
    newLi.append(newDiv2)
    res.append(newLi)

    //data

    let newDiv3 = document.createElement('div')
    newDiv3.className = 'text-center'
    let newH53 = document.createElement('h5')
    newH53.className = "m-0 fs-6"
    newH53.textContent = task[i].phone
    let newp3 = document.createElement('p')
    newp3.textContent = task[i].time;
    newDiv3.append(newH53, newp3)
    newLi.append(newDiv3)
    res.append(newLi)

    //high

    let newDiv4 = document.createElement('div')
    newDiv4.style.width = "70px"
    newDiv4.className = 'text-center'
    let h6 = document.createElement('h6')
    h6.className = "bg-danger p-2 rounded-4"
    h6.textContent = task[i].priority;
    newDiv4.appendChild(h6);
    newLi.append(newDiv4)

    if (h6.textContent == 'high') {
      h6.className = 'text-bg-danger '
    } else if (h6.textContent == 'normal') {
      h6.className = 'text-bg-success '
    } else if (h6.textContent == 'low') {
      h6.className = 'text-bg-info '
    }

  }
}

creatEl(data);

let filitr = document.querySelector(".filter")
filitr.addEventListener("change", (evt) => {

  let filterTwo = evt.target.value;
  let filterOne = data.filter((elData) => elData.priority == filterTwo);
  creatEl(filterOne);
})

let sort = document.querySelector(".sort");

sort.addEventListener("change", (evt) => {

  let sortTwo = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
      // return -1;
    }
    if (a.name < b.name) {
      return -1;
    }
  })
  creatEl(sortTwo)
})

let search = document.querySelector(".search");

search.addEventListener("input", (evt) =>{

  let newSearch = evt.target.value.trim().toLowerCase();
  let searchArr = data.filter((searchEl) => {
    if(searchEl.name.toLowerCase().includes(newSearch)){
      return searchEl;
    }
  })
  creatEl(searchArr)
})