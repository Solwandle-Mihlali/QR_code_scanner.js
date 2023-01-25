let addItem = document.getElementById('addIcon')
let body = document.querySelector('body')



addItem.addEventListener('click',()=>{
 let addSection = document.createElement('div');
 addSection.id = "addBookSection";
 
 body.append(addSection)


 addSection.style.width = "25%";
 addSection.style.height = "80vh";
 addSection.style.border = "solid var(--primary) 1px"
 addSection.style.borderRadius = "20px"
 addSection.style.position = "absolute"
 addSection.style.top = "50%"
 addSection.style.left = "50%"
 addSection.style.transform = "translate(-50%, -50%)"

})