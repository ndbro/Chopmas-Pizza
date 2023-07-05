const  elSelect = document.querySelector("#select");
const  bread = document.querySelector('#bread');
const  sizeOfBread = document.querySelector('#sizeOfBread');
const  sizeWrapper = document.querySelector('.size-wrapper');
const  checkbox = document.querySelector('.checkbox-wrapper');
const  onThe = document.querySelector('#on-the');
const  checkboxWrapp = document.querySelector('.checkbox-wrapper')
const  onThe2 = document.querySelector('#additional-wrapper');

elSelect.addEventListener("change", ()=>{
    console.log(elSelect.value);
    bread.textContent = elSelect.value;
});

sizeWrapper.addEventListener('click', (evt)=>{
    const target = evt.target;
    if (target.className.includes("size-wrapper__input")) {
        let value = evt.target.dataset.size;
        sizeOfBread.textContent = value;
    }
});

checkbox.addEventListener('click', (e)=>{
    const target = e.target;
    if (target.className.includes('hold__input')) {
        let checkbox2 = target.dataset.add;
        onThe.textContent = checkbox2;
    }
});

checkboxWrapp.addEventListener('click', (evt)=>{
    const target2 = evt.target;
    console.log(target2);
    if (target2.className.includes('hold__inputt')) {
        let result = target2.dataset.extra;
        onThe2.textContent = result;
    }
})