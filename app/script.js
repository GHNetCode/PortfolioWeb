
window.onresize=()=>{
    document.getElementById('resizeInnerW').textContent=window.innerWidth;
    }


//shapes button..
    let animatemeid_Btn = document.getElementById('animatemeid_Btn');//shapesBtn for floating shapes..
    let animatemeid = document.getElementById('animatemeid');//shapesBtn for floating shapes..
 
    // On pointerdown..
    animatemeid_Btn.addEventListener("pointerdown",e =>{ //("pointerdown",e =>{
        console.log("e: "+e.pointerId)
        animatemeid_Btn.classList.toggle("animatemeCl_BtnOn");
        animatemeid.classList.toggle("animatemeCL_On");
})

function circularText(txt1, radius, classIndex) {
    txt1 = txt1.split("");
    classIndex = document.getElementsByClassName("circTxt")[classIndex];
    var deg = 310 / txt1.length, origin = -140;
    txt1.forEach((ea) => {
      ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;});
  }
  circularText("shapes", 24, 0);
 
  
  

//pointerdown includes both pointerdown and touchscreen events
//Must be used within an if('onpointerdown'..){}else{if('onclick'..) }
//to work correctly for both events on the same "click"..
let lstMnuEvt= null; // last Menu events...
if ('onpointerdown' in window) {
    document.addEventListener("pointerdown", (event) => { //For touch screens only.. 

        //get id and class events from '(event)' for Variables above..
        let elementId = event.target.id;
        let elementCls = event.target.classList; //event.target.classList.contains("my-class")
          //event.target.classList.contains("my-class") 
        console.log('all  elementId :'+ elementId);
        console.log('all  elementCls :'+ elementCls[0])//We assuming obj has only 1 element!


        //if open, close menu by clicking\touching other parts of the screen..
         //elementId :menu__toggle - menu has been opened\closed..
         //elementCls :menu__item  - Link in menu has been pressed.
         //elementCls :menu__box   - pressed inside menu box
         //elementCls :ctr0        - pressed on the background
        if (elementId==="menu__toggle"){// Let`s track it with lstEvntClId
            //console.log("menu now toggled..")
        }
        if (lstMnuEvt==="menu__toggle"&&elementCls[0]==="menu__box"||
            elementCls[0]==="ctr0"||elementCls[0]==="ctr1"
        ){
           //  console.log("menu Was toggled, and no menu items were pushed, close the menu..") 
             document.getElementById("menu__toggle").checked = false; 
             console.log("Need to ensure all menu items are set!!")
        }
        lstMnuEvt = elementId;//set lstMnuEvt at the End of menu if statement(s)..
     })}else{if ('onclick' in window){
//      window.preventDefault();
      document.addEventListener("click", (event) => { // For mouse clicks only..
          
          let elementId = event.target.id;
          let elementCls = event.target.classList; //event.target.classList.contains("my-class")
         console.log('click elementId : '+ elementId);
         console.log('click elementCls : '+ elementCls);
      
         if (elementId==="menu__toggle"){// Let`s track it with lstEvntClId
          console.log("menu now toggled..")
          //document.getElementById("menu__toggle").checked = true;
        //  menu__toggle_check();
      }

      if (lstMnuEvt==="menu__toggle"&&elementCls[0]!=="menu__item"
      ){
         //  console.log("menu Was toggled, and no menu items were pushed, close the menu..") 
           document.getElementById("menu__toggle").checked = false; 
          // menu__toggle_uncheck();
           console.log("Need to ensure all menu items are set!!")
      }
      lstMnuEvt = elementId;//set lstMnuEvt at the End of menu if statement(s)..
      
      }    ) }}


/*
Boolean
Object
String
Symbol
BigInt
Undefined
Number
Null








Boolean
Object
Symbol
String
Bigint
undefined
NUll
Number







*/