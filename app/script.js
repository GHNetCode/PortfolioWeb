
window.onresize=()=>{
    document.getElementById('resizeInnerW').textContent=window.innerWidth;
    document.getElementById('resizeInnerH').textContent=window.innerHeight;
    }


    let menu__item_sub1 = document.getElementById('menu__item_sub1');

    // As we need to wait 1 second for this the request, lets had some visual effects 
  // on the 'Shorten IT!' button..
  // Setup Animations for the spinning arrow.:
  let durationms=2000;
  const effect = new KeyframeEffect(//for Button
    menu__item_sub1, // Element to animate.. 
    [{transform: ' scalex(0.3)'},{transform: ' scalex(0.0)'}], //,{transform: 'scalex(1)'},{transform: 'scalex(2)'}],// Keyframes
    {duration: durationms} // Keyframe settings   15sec..  
    );

    const rotatect1D1Btn = new Animation(effect, document.timeline);
    //rotatect1D1Btn.play();
    //rotatect1D1Btn.reverse();
    //rotatect1D1Btn.cancel();// to stop the animation before set duration..
  


    
const menuBoxlistItems = document.querySelectorAll('.menuBox>.listItem'); //for subMenuBtn    
const subMenu1listItems = document.querySelectorAll('.subMenu_1 .listItem'); //for subMenuBtn
const subMenu2listItems = document.querySelectorAll('.subMenu_2 .listItem'); //for subMenuBtn
const subMenu3listItems = document.querySelectorAll('.subMenu_3 .listItem'); //for subMenuBtn
const subMenu4listItems = document.querySelectorAll('.subMenu_4 .listItem'); //for subMenuBtn
const copyCopiedBtn = document.getElementById('copyCopiedBtn');
const emailAdr = document.getElementById('emailAdr');copyCopiedBtn
function menuBoxLitems(){
	menuBoxlistItems.forEach(lstItem => {
		if(lstItem.classList.contains('active')){
			lstItem.classList.remove('active');
		}})}
    
function subMenu1(){
	subMenu1listItems.forEach(lstItem => {
		if(lstItem.classList.contains('active')){
			lstItem.classList.remove('active');
		}})}
function subMenu2(){
	subMenu2listItems.forEach(lstItem => {
		if(lstItem.classList.contains('active')){
			lstItem.classList.remove('active');
		}})}
function subMenu3(){
  subMenu3listItems.forEach(lstItem => {
    if(lstItem.classList.contains('active')){
      lstItem.classList.remove('active');
}})}
function subMenu4(){
  subMenu4listItems.forEach(lstItem => {
    if(lstItem.classList.contains('active')){
      lstItem.classList.remove('active');
}})}
//Handel pointer screen events (includes touch\click events to a degree..) 

if ('onpointerdown' in window){
    document.addEventListener("pointerdown", (event) => {  
        
        //get id and class events from '(event)' to interact with..
          let elementId = event.target.id;
          let elementCls = event.target.classList; //event.target.classList.contains("my-class")

         //event.target.id;
         console.log('element Id :'+ event.target.id); 
        //event.target.classList;
         event.target.classList.forEach(el => {
          console.log('all  el :'+ el)
        });

         //if menu opened, close by pressing other parts of the screen..
         if (document.getElementById("menu__toggle").checked===true){
          if (elementCls[0]==="menuBox"||elementCls[0]==="ctr0"||
              elementCls[0]==="ctr0_ctr1"||elementCls[0]==="H2_pb"||
              elementCls[0]==="ctr1_pgrC"
            )
              { document.getElementById("menu__toggle").checked = false; 
                menuBoxLitems();
                //document.getElementsByClassName('.menuBox').?????????
                //????????????????????????????? menuBox ctr1_pgrC menu__aItem


              // console.log("Need to ensure all menu items are set!!") 
            }} 

        if (elementId==="menu__toggle"){	//toggle the menu via the btn
         console.log("menu__toggle pushed ");
         subMenu1(); subMenu2(); subMenu3(); subMenu4();
         menuBoxlistItems.forEach(lstItem => {
           lstItem.classList.toggle('active');
         })  }

       
          if (elementCls[0]==="subMenuBtn1"){	
           //console.log("subMenuBtn1 pushed ")
            subMenu2(); subMenu3(); subMenu4();//reset or collapse other submenu listItems
             subMenu1listItems.forEach(lstItem => {
               lstItem.classList.toggle('active');
             })}
          if (elementCls[0]==="subMenuBtn2"){	 
             //console.log("subMenuBtn2 pushed ")
             subMenu1(); subMenu3(); subMenu4();//reset or collapse other submenu listItems
              subMenu2listItems.forEach(lstItem => {
                lstItem.classList.toggle('active');
              })}
          if (elementCls[0]==="subMenuBtn3"){ 
           //console.log("subMenuBtn3 pushed ");
            subMenu1(); subMenu2(); subMenu4();//reset or collapse other submenu listItems
            subMenu3listItems.forEach(lstItem => {
              lstItem.classList.toggle('active');
            })}
          if (elementCls[0]==="subMenuBtn4"){ 
            //console.log("subMenuBtn4 pushed ");
            subMenu1(); subMenu2(); subMenu3();//reset or collapse other submenu listItems
            copyCopiedBtn.style.background='#9c7a0a';// reset back to original color
            copyCopiedBtn.innerText='Copy'

            subMenu4listItems.forEach(lstItem => {
              lstItem.classList.toggle('active');
            })} 

            

                if (elementId==="copyCopiedBtn"&&copyCopiedBtn.innerText==='Copy'){ 
                  console.log("copyCopiedBtn pushed ");
                  //copyTextElem();

                 // const textarea = document.getElementById('subMBtn4Email').innerText;
                  //const textarea = document.getElementById('subMBtn4Email').innerText;
                  const textarea2 = emailAdr.innerText;
                  console.log("text -: " +textarea2);
                //  textarea.selectNodeContents(0, textarea.length);
                try {
                 // navigator.clipboard.writeText(textarea2);
                  var successful = navigator.clipboard.writeText(textarea2);
                  var msg = successful ? 'successful' : 'unsuccessful';
                  console.log('Copied text-: ' + textarea2);
                  copyCopiedBtn.style.background='#9c510a' ;
                  copyCopiedBtn.innerText='Copied';

                  alert("Email copied..: "+textarea2);

                } catch (err) {
                  console.log('Oops, unable to copy');
                }
              }

})}


//  var copyTextareaBtn = document.getElementById('#subMBtn4Email');

// copyTextareaBtn.addEventListener('click', function(event) {
//   var copyTextarea = document.querySelector('#subMBtn4Email');
//   copyTextarea.focus();
//   copyTextarea.select();

//   try {
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copying text command was ' + msg);
//   } catch (err) {
//     console.log('Oops, unable to copy');
//   }
// });











 //delay if button/press is released..
//let timedTouchFunc; 
let timer;
let touchduration = 250; //length of time ..
let timedTFmenu = function() {console.log("delayed..")};
 

 
if ('onpointerup' in window){ 
    document.addEventListener("pointerup",  (event) => {  
 //for elements with class name "menu__item_sub" delay when user presses the button..
  
      //get id and class events from '(event)' to interact with..
      let elementId = event.target.id;
      let elementCls = event.target.classList; //event.target.classList.contains("my-class")
 
      
// event.target.classList.forEach( async el => {
//  console.log('all  el :'+ el)
//
//  if (el==="menu__item_sub"){//menu__item_sub
//    console.log("Needs a delay..")
// //  setTimeout(()=> {
// //    //document.getElementById("result").innerHTML = "Hello, I am here";
// //    console.log("delayed..")
// // }
// // ,3000);
//         //display the "Thanks for your support!" message after pressing Continue for a pledge..
//                  
//                 timer = setTimeout(timedTFmenu, touchduration); 
//  }

 
});  
}






//on scrolling fade containers in and out..-------------------------------
function scrlfInfOutFunc() {
    let fInfOut = document.querySelectorAll(".scrlfInfOutCl");
  
    for (let i = 0; i < fInfOut.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = fInfOut[i].getBoundingClientRect().top; //Top is the distance between Top of the window and top of container..
        let elementBtm = fInfOut[i].getBoundingClientRect().bottom;//Top is the distance between Top of the window and bottom of container..
        let elementVisible = 50;
        let elementInVisible = 10;//the higher the value, the longer the further up the screen to be visible\invisible..
       // console.log("elementTop -: "+ elementTop)
       // console.log("elementBtm -: "+ elementBtm)
      if (elementTop < windowHeight - elementVisible) {
            fInfOut[i].classList.add("active");
          } else {
            fInfOut[i].classList.remove("active");
          }
          
      if (elementBtm > windowHeight - elementInVisible) {
            fInfOut[i].classList.remove("active");
          } 
}}
  window.addEventListener("scroll", scrlfInfOutFunc);
  //on scrolling fade containers in and out..-------------------------------



  //floating shapes BUTTON..--------------------------------
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
//floating shapes BUTTON..--------------------------------



/*BOSSBUNN
Boolean
Object
String
Symbol
BigInt
Undefined
Number
Null

*/