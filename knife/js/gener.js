let bladeStyle = 0;
let bladeFinish = 0;
let handle = 0;
let size = 0;

let paramGroup = [bladeStyle, bladeFinish, handle, size];

/* 
//////////
BLADE STYLE - 1
//////////
*/

let bladeStyleGroup = document.querySelectorAll('input[name="blade-style"]');

for(let i = 0; i < bladeStyleGroup.length; i++) {
  bladeStyleGroup[i].addEventListener('click', function() {
    	getBladeStyleCheckedValue();
  });
}

let getBladeStyleCheckedValue = (bladeStyleChecked) => {
	bladeStyleChecked = document.querySelector('input[name="blade-style"]:checked').value;
  
  paramGroup[0] = +bladeStyleChecked;
	console.log(...paramGroup);
}

/* 
//////////
BLADE FINISH - 2 
//////////
*/

let bladeFinishGroup = document.querySelectorAll('input[name="blade-finish"]');

for(let i = 0; i < bladeFinishGroup.length; i++) {
  bladeFinishGroup[i].addEventListener('click', function() {
    	getBladeFinishCheckedValue();
  });
}

let getBladeFinishCheckedValue = (bladeFinishChecked) => {
	bladeFinishChecked = document.querySelector('input[name="blade-finish"]:checked').value;
  
  paramGroup[1] = +bladeFinishChecked;
	console.log(...paramGroup);
}

/* 
//////////
HANDLE - 3 
//////////
*/

let handleGroup = document.querySelectorAll('input[name="handle"]');

for(let i = 0; i < handleGroup.length; i++) {
  handleGroup[i].addEventListener('click', function() {
    	getHandleCheckedValue();
  });
}

let getHandleCheckedValue = (handleChecked) => {
	handleChecked = document.querySelector('input[name="handle"]:checked').value;
  
  paramGroup[2] = +handleChecked;
	console.log(...paramGroup);
}

/* 
//////////
SIZE - 4 
//////////
*/

let sizeGroup = document.querySelectorAll('input[name="size"]');

for(let i = 0; i < sizeGroup.length; i++) {
  sizeGroup[i].addEventListener('click', function() {
    	getSizeCheckedValue();
  });
}

let getSizeCheckedValue = (sizeChecked) => {
	sizeChecked = document.querySelector('input[name="size"]:checked').value;
  
  paramGroup[3] = +sizeChecked;
	console.log(...paramGroup);
  
  if(paramGroup[2] == 1 && paramGroup[3] == 3) {
      let img = document.getElementById("img");
     	img.src = "https://external-preview.redd.it/805rp8519zSGN2C_WECC4-o4n6A04qtzazHD1nb0Ukc.jpg?width=768&auto=webp&s=a2ac4717a2f59876968af617bb80625ddc8933a3";
  }

  let paramGroupString = paramGroup.join('');

  console.log(paramGroupString);

  console.log("./img/" + paramGroupString + ".png");
}

let generateButton = document.getElementById('generate__button');
let generateNumber = document.getElementById('generate__number');

generateButton.addEventListener('click', function() {
    
    let paramGroupString = paramGroup.join('');
    
    if(paramGroup[0] == 0) {
        console.log("1 - zero");
        fullpage_api.moveTo(2);
    } else if(paramGroup[1] == 0) {
        console.log("2 - zero");
        fullpage_api.moveTo(3);
    } else if(paramGroup[2] == 0) {
        console.log("3 - zero");
        fullpage_api.moveTo(4);
    } else if(paramGroup[3] == 0) {
        console.log("4 - zero");
        fullpage_api.moveTo(5);
    } else {
        console.log("all okay");
        /*fullpage_api.moveSectionDown();*/
        console.log(paramGroupString);
        generateNumber.innerHTML = paramGroupString;
    }
});