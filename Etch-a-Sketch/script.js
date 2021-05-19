const container = document.querySelector('.container');

const buttonBlack = document.createElement('button');
const buttonRGB = document.createElement('button');
const buttonGrey = document.createElement('button');
const buttonSize = document.createElement('button');
const buttonReset = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');



window.onload = () => {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseover', () =>{
        box.style.background = 'black';
    }));
}




function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++){
        const div = document.createElement('div');
        //div.style.border = '1px solid light grey';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
        
    }
}

createDivs(16, 16);

// Resets the grid to be empty
function resetGrid(){
    buttonReset.textContent = 'Reset';
    buttonReset.addEventListener('click', () => {
        reset();
        createDivs(16,16);
        blackColor();
        greyColor();
        rgbColor();
        
    });

    

    buttonsContainer.appendChild(buttonReset).classList.add('reset-button');
    

}
resetGrid();



//reset function call
function reset (){
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}
    window.onclick = () => {
        const boxes = container.querySelectorAll('.box');
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background = 'black';
        }));
    
}

//resizes the grid to custom number
function resizeGrid(){
    buttonSize.textContent = 'Change Size';
    buttonSize.addEventListener('click', () => {
      let user = prompt('What size do you want your grid? (Maximum Value: 100)');
      if(user === null || user < 1){
          reset();
          createDivs(16,16);
          blackColor();
          greyColor();
          rgbColor();
          
      } else {
        reset();
        createDivs(user,user);
        blackColor();
        greyColor();
        rgbColor();
        

      }
    });

    buttonsContainer.appendChild(buttonSize).classList.add('resize-button');

    
}
resizeGrid();


//Function that creates black sketch
function blackColor(){
    const boxes = container.querySelectorAll('.box');
    buttonBlack.textContent = 'Black';
    buttonBlack.addEventListener('click' , ()=> {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }));
        
        
    });
    buttonsContainer.appendChild(buttonBlack).classList.add('black-button');

}

blackColor();

//Function that creates grey sketch
function greyColor(){
    const boxes = container.querySelectorAll('.box');
    buttonGrey.textContent = 'Grayscale';
    buttonGrey.addEventListener('click' , ()=> {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rNum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${rNum}, ${rNum}, ${rNum})`
        }));
        
        
    });
    buttonsContainer.appendChild(buttonGrey).classList.add('grey-button');

}

greyColor();

//Function that creates colorful sketch
function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    buttonRGB.textContent = 'Colorful';
    buttonRGB.addEventListener('click' , ()=> {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${red}, ${green}, ${blue})`;
        }));
        
        
    });
    buttonsContainer.appendChild(buttonRGB).classList.add('rgb-button');

}

rgbColor();























