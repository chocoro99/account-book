document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector('.contents_input--btn')        
    const contents = document.getElementById("contents")
    const contentsInput = document.getElementById("contents_input")
    const saveBtn = document.querySelector('.contents_save')    
    const url = window.location.href.split("/")[window.location.href.split("/").length-1]

     
    // index.html 목록 띄우는 함수
    const load = () => {         
        const localStorageKey = []
    
        for(let i=0; i<localStorage.length; i++){
            localStorageKey.push(localStorage.key(i))
        }
        localStorageKey.sort()
        for(let i of localStorageKey){        
            contents.innerHTML += "<br><span class='contents_list'>"+ `${i}`+"</span>"
        }        
        open();              
    }    

    // 클릭해서 정보 띄우기
    const open = () => {
        const clickP = document.querySelectorAll('.contents span')           
        clickP.forEach(p => {
            p.onclick = function() {                
                contents.innerHTML = "<div class='contents_main'></div>"
                const contentsDiv = contents.querySelector(".contents_main")
                const storage = localStorage[this.textContent].split(",")
                let money = 0
                
                const newDiv1 = document.createElement("div")
                const newDiv2 = document.createElement("div")
                for(let i=0; i<storage.length; i+=2){
                    newDiv1.innerHTML += "<p>"+`${storage[i]}`+"</p>"
                }
                contentsDiv.appendChild(newDiv1)
                for(let i=0; i<storage.length; i+=2){
                    newDiv2.innerHTML += "<p>"+`${storage[i+1]}`+"</p>"
                    money += parseInt(`${storage[i+1]}`)
                }
                contentsDiv.appendChild(newDiv2)
                contents.innerHTML +="<span>총지출 : "+`${money}`+"</span>"+"<br><button class='home' onclick="+"location.href='index.html'"+">목록</button>"
            }
            
        })
    }

    // 작성 칸 추가 함수
    const addInput = () => {
        const newP = document.createElement("p");
        newP.innerHTML = "<input type='text'> <input class='add_input--b' type='number'>";
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
    if(url == "write.html") inputBtn.addEventListener('click', addInput)
    if(saveBtn!=null) saveBtn.addEventListener('click', save)
})