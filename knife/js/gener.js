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

for (let i = 0; i < bladeStyleGroup.length; i++) {
  bladeStyleGroup[i].addEventListener('click', function () {
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

for (let i = 0; i < bladeFinishGroup.length; i++) {
  bladeFinishGroup[i].addEventListener('click', function () {
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

for (let i = 0; i < handleGroup.length; i++) {
  handleGroup[i].addEventListener('click', function () {
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

for (let i = 0; i < sizeGroup.length; i++) {
  sizeGroup[i].addEventListener('click', function () {
    getSizeCheckedValue();
  });
}

let getSizeCheckedValue = (sizeChecked) => {
  sizeChecked = document.querySelector('input[name="size"]:checked').value;

  paramGroup[3] = +sizeChecked;
  console.log(...paramGroup);

  let paramGroupString = paramGroup.join('');

  console.log(paramGroupString);

  console.log("img/gif/100mm/" + paramGroupString + ".gif");
}

let generateButton = document.getElementById('generate__button');
let changeButton = document.getElementById('change__button');
let generateNumber = document.getElementById('generate__number');
let generateGif = document.getElementById('generate-block');
let generateTitle = document.getElementById('generate__title');
let generateCounters = document.getElementById('final-counters');
let generateBlock = document.getElementById('generate-block');
let download = document.getElementById('downloadJpg');

let finalCount1 = document.getElementById('final-count1')
let finalCount2 = document.getElementById('final-count2')
let finalCount3 = document.getElementById('final-count3')
let finalCount4 = document.getElementById('final-count4')

generateButton.addEventListener('click', function () {
  let paramGroupString = paramGroup.join('');

  if (paramGroup[0] == 0) {
    console.log("1 - is empty");
    fullpage_api.moveTo(2);
  } else if (paramGroup[1] == 0) {
    console.log("2 - is empty");
    fullpage_api.moveTo(3);
  } else if (paramGroup[2] == 0) {
    console.log("3 - is empty");
    fullpage_api.moveTo(4);
  } else if (paramGroup[3] == 0) {
    console.log("4 - is empty");
    fullpage_api.moveTo(5);
  } else {
    console.log("all okay");

    //fading bg
    generateBlock.style.opacity = '0';

    function changeKnife() {
      document.getElementById('generationId').value = paramGroupString;

      // change background gif 
      generateGif.style.backgroundImage = "url('img/knifes/" + paramGroupString + ".gif')";

      // download link
      download.setAttribute('download', paramGroupString + '.gif');
      download.setAttribute('href', 'img/knifes/jpg/' + paramGroupString + '.jpg');
      download.style.display = 'block';

      // change title
      generateTitle.innerHTML = 'THIS IS YOUR PERSONAL INERTIX CONFIGURATION';

      // change button text
      generate__button.innerHTML = 'GET YOUR PERSONAL CONFIGURATION';
      generate__button.setAttribute('onclick', 'fullpage_api.moveTo(7)');

      // show counters
      generateCounters.style.display = 'flex';
      if(paramGroup[3] == 1){
        finalCount1.innerHTML = '100';
        finalCount2.innerHTML = '50';
        finalCount3.innerHTML = '4';
        finalCount4.innerHTML = '130g';
      } else if(paramGroup[3] == 2){
        finalCount1.innerHTML = '150';
        finalCount2.innerHTML = '50';
        finalCount3.innerHTML = '4';
        finalCount4.innerHTML = '217g';
      } else{
        generateCounters.style.display = 'none';
      }

      // show button for changing config
      changeButton.style.display = 'block';
      
      setTimeout("generateBlock.style.opacity = '1'", 300);
    }

    setTimeout(changeKnife, 500);
  }


  

});

changeButton.addEventListener('click', function () {
  //fading bg
  generateBlock.style.opacity = '0';

  function clearKnife(){
    fullpage_api.moveTo(2);
    generateGif.style.backgroundImage = "url('img/knifes/knife-model.gif')";

    //hide download link
    download.style.display = 'none';

    // change title
    generateTitle.innerHTML = 'GENERATE YOUR PERSONAL KNIFE MODEL';

    // change button text
    generate__button.innerHTML = 'GENERATE';
    generate__button.setAttribute('onclick', 'console.log("created by crayfish.studio")');

    // hide counters
    generateCounters.style.display = 'none';

    // hide button for changing config
    changeButton.style.display = 'none';

    setTimeout("generateBlock.style.opacity = '1'", 300);
  }

  setTimeout(clearKnife, 500);

});

