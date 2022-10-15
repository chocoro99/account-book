document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('button')        
    const contents = document.getElementById("contents")
    const contentsInput = document.getElementById("contents_input")
    const saveBtn = document.querySelector('.contents_save')    
 
    // index.html 목록 띄우는 함수
    const load = () => {                     
        for(let i = 0; i < localStorage.length; i++){        
            contents.innerHTML += "<p class='?'>"+ `${localStorage.key(i)}`+"</p>"
        }        
        open();              
    }    

    // 클릭해서 정보 띄우기
    const open = () => {
        const clickP = document.querySelectorAll('.contents p')           
        clickP.forEach(p => {
            p.onclick = function() {
                contents.innerHTML =""
                const storage = localStorage[this.textContent].split(",")
                console.log(storage)
                for(let i=0; i<storage.length; i+=2){
                    contents.innerHTML += "<input type='text' value="+`${storage[i]}`+ "><input type='number' value="+`${storage[i+1]}`+">"
                }
            }
        })
    }

    // 작성 칸 추가 함수
    const addInput = () => {
        const newP = document.createElement("p");
        newP.innerHTML = "<input type='text'><input type='number'>";
        contentsInput.appendChild(newP);
    }
    
    // 작성 내용 저장 함수
    const save = () => {        
        const input = contentsInput.querySelectorAll("input");
        const date = new Date().toLocaleDateString();
        const arryInput = []

        input.forEach(x => {
            arryInput.push(x.value)
        })
        localStorage.setItem(date, arryInput);
    }

    // 목록에서 내용 확인 하는 함수
    

    window.addEventListener('load', load)
    inputBtn.addEventListener('click', addInput)
    if(saveBtn!=null) saveBtn.addEventListener('click', save)
})