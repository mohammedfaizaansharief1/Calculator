let string = ""
// let string1 = ""
let input = document.querySelector('.input') //selecting input
let buttons = document.querySelectorAll('.button') //selecting buttons

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0,-1)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            // string = `${string}%`
            // string = (string*10)/100
            // string = `${string}`
            // console.log(string)
            // document.querySelector('input').value = string;

            try {
                var result = eval(document.querySelector('.input').value);
                result = (result / 100).toFixed(2);
                document.querySelector('.input').value = result;
            } catch (error) {
                document.querySelector('.input').value = 'Error';
            }
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

function calculatePercentage() {
    try {
        var result = eval(document.querySelector('.input').value);
        result = (result / 100).toFixed(2);
        document.querySelector('.input').value = result;
    } catch (error) {
        document.querySelector('.input').value = 'Error';
    }
}