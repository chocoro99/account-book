// window.onload = () => {
//     const contents = document.getElementById("contents")
//     const arry = [] 
//     console.log("w")

//     for(let i = 0; i < localStorage.length; i++){        
//         const newP = document.createElement("p");
//         newP.innerHTML = "<a class='board'>"+ `${localStorage.key(i)}`+"</a>"
//         contents.appendChild(newP);       
        
//         arry.push({ id : `${localStorage.key(i)}`});
//         // console.log(arry[i].id)
//         // console.log(newP.textContent)
//     }        
// }

document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('button')
    const saveBtn = document.querySelector('.contents_save')    
    
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
        localStorage.setItem(date, arry);
    }
    
    const open = () => {
        alert('확인')
    }

    // const board = document.querySelector('.board');  
    // console.log(board)
    
    
    // board.addEventListener('click',(e) => {
    //     console.log("currentTarget : ",e.currentTarget);
    //     console.log("Target : ",e.target);
    // })

    const load = () => {
        const contents = document.getElementById("contents")
        const arry = []      

        for(let i = 0; i < localStorage.length; i++){        
            const newP = document.createElement("p");
            newP.innerHTML = "<a class='board'>"+ `${localStorage.key(i)}`+"</a>"
            contents.appendChild(newP);       
            console.log(localStorage.length)
            arry.push({ id : `${localStorage.key(i)}`});
            console.log(arry[i].id)
            console.log(newP.textContent)
        }  
    }
    window.addEventListener('load', load)
    inputBtn.addEventListener('click', addInput)
    saveBtn.addEventListener('click', save)
}) 