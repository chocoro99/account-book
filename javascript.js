document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('.contents_input--btn')        
    const contents = document.getElementById("contents")
    const contentsInput = document.getElementById("contents_input")
    const saveBtn = document.querySelector('.contents_save')    
    const url = window.location.href.split("/")[window.location.href.split("/").length-1]



    console.log(localStorage.key(2))
    // index.html 목록 띄우는 함수
    const load = () => {                     
        for(let i = 0; i < localStorage.length; i++){        
            contents.innerHTML += "<br><span class='contents_main'>"+ `${localStorage.key(i)}`+"</span>"
        }        
        open();              
    }    

    // 클릭해서 정보 띄우기
    const open = () => {
        const clickP = document.querySelectorAll('.contents span')           
        clickP.forEach(p => {
            p.onclick = function() {                
                contents.innerHTML = ""
                const storage = localStorage[this.textContent].split(",")
                
                for(let i=0; i<storage.length; i+=2){
                    contents.innerHTML += "<input class='a' type='text' value="+`${storage[i]}`+ "><input class='b' type='number' value="+`${storage[i+1]}`+"><br>"
                }
                contents.innerHTML +="<br><input class='home' type='button' value='목록' onclick="+"location.href='index.html'"+">"
            }
            
        })
    }

    // 작성 칸 추가 함수
    const addInput = () => {
        const newP = document.createElement("p");
        newP.innerHTML = "<input type='text'> <input type='number'>";
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

    

    if(url == "index.html") window.addEventListener('load', load)
    inputBtn.addEventListener('click', addInput)
    if(saveBtn!=null) saveBtn.addEventListener('click', save)
})