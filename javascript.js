document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('button')
    const saveBtn = document.querySelector('.contents__save')

    const addInput = () => {
        const contentsInput = document.getElementById("contents_input");
        const newP = document.createElement("p");
        newP.innerHTML = "<input type='text'><input type='number'>";
        contentsInput.appendChild(newP);
    }

    const save = () => {
        const contents = document.getElementById("contents_input");
        const input = contents.querySelectorAll("input");
        const date = new Date().toLocaleDateString();
        const arry = []
        input.forEach(x => {
            arry.push(x.value)
        })
        console.log(arry)
        localStorage.setItem(date, arry);
    }

    inputBtn.addEventListener('click', addInput)
    saveBtn.addEventListener('click', save)
}) 
{/* <button type='button' onclick='addInput()'><img src='plusicon.png' height='10' width='10'></img> */}

// const remove = (obj) => {
//     document.getElementById('input').removeChild(obj.parentNode);
// }

// const contents = document.getElementsByClassName("contents")
// if(contents.style.display != none){
//     const newP = document.createElement("p")
//     newP.innerHTML = "<input type='text'>";
//     input.appendChild(newP);
// }
// window.onload = () => {
//     const contents = document.getElementById("contents")
//     const newSpan = document.createElement("span");
//     newSpan.innerHTML = "<button type='button' onclick='input()'>작성</button>";
//     contents.appendChild(newSpan);
// }

// const input = () => {
//     const contents = document.getElementById("contents");
//     contents.innerHTML = "<form id='contents_input'><input type='text' class='key'><input type='number' class='value'><button type='button' onclick='addInput()'><img src='plusicon.png' height='10' width='10'></button><input type='submit' onclick='save()' value='저장'></form>";
// }


