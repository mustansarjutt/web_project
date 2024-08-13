let string = ""
let btns = document.querySelectorAll('.btn')

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            try{
                string = eval(string)
                document.querySelector('.input').value = string
            }
            catch(error){
                document.querySelector('.input').value = 'Error'
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = ''
            document.querySelector('.input').value = string
        }
        else if(e.target.textContent == 'M-'){
            string = -string
            document.querySelector('.input').value = string
        }
        else if(e.target.textContent == 'M+'){
            string = +string
            document.querySelector('.input').value = string
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('.input').value = string
        }
    })
})