
window.onresize=()=>{
    document.getElementById('resizeInnerW').textContent=window.innerWidth;
    document.getElementById('resizeInnerH').textContent=window.innerHeight;
    }


//floating shapes button..--------------------------------
    let animatemeid_Btn = document.getElementById('animatemeid_Btn');//shapesBtn for floating shapes..
    let animatemeid = document.getElementById('animatemeid');//shapesBtn for floating shapes..
     animatemeid_Btn.addEventListener("pointerdown",e =>{ //("pointerdown",e =>{
    //  console.log("e: "+e.pointerId)
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
 //floating shapes button..--------------------------------


//Handel pointer screen events (includes touch\click events to a degree..)
let lstMnuEvt= null; // last Menu events...
if ('onpointerdown' in window){
    document.addEventListener("pointerdown", (event) => { //For touch screens only.. 
        
        //get id and class events from '(event)' for Variables above..
        let elementId = event.target.id;
        let elementCls = event.target.classList; //event.target.classList.contains("my-class")
          //event.target.classList.contains("my-class") 
        console.log('all  elementId :'+ elementId);
        console.log('all  elementCls :'+ elementCls[0])//We assuming obj has only 1 element!

        //if menu open, close by clicking\touching other parts of the screen..
            if (document.getElementById("menu__toggle").checked===true){
                if (elementCls[0]==="menu__box"||elementCls[0]==="ctr0"||elementCls[0]==="ctr1"||elementCls[0]==="H2_pb")
                    { document.getElementById("menu__toggle").checked = false;  
                    console.log("Need to ensure all menu items are set!!") }          
              }
        
})}

//on scrolling fade containers in and out..-------------------------------
function scrlfInfOutFunc() {
    let fInfOut = document.querySelectorAll(".scrlfInfOutCl");
  
    for (let i = 0; i < fInfOut.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = fInfOut[i].getBoundingClientRect().top; //Top is the distance between Top of the window and top of container..
        let elementBtm = fInfOut[i].getBoundingClientRect().bottom;//Top is the distance between Top of the window and bottom of container..
        let elementVisible = 0;
        let elementInVisible = 150;
        console.log("elementTop -: "+ elementTop)
        console.log("elementBtm -: "+ elementBtm)
      if (elementTop < windowHeight - elementVisible) {
            fInfOut[i].classList.add("active");
          } 
          else {
            fInfOut[i].classList.remove("active");
        }
        if (elementBtm > windowHeight - elementInVisible) {
            fInfOut[i].classList.remove("active");
          } 
}}
  window.addEventListener("scroll", scrlfInfOutFunc);
  //on scrolling fade containers in and out..-------------------------------



/*
Boolean
Object
String
Symbol
BigInt
Undefined
Number
Null








*/