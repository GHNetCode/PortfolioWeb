
window.onresize=()=>{
    document.getElementById('resizeInnerW').textContent=window.innerWidth;
    }

    let animatemeid_Btn = document.getElementById('animatemeid_Btn');//shapesBtn for floating shapes..
    let animatemeid = document.getElementById('animatemeid');//shapesBtn for floating shapes..
 
    // On pointerdown..
    animatemeid_Btn.addEventListener("pointerdown",e =>{ //("pointerdown",e =>{
        //console.log("e: "+e.pointerId)
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