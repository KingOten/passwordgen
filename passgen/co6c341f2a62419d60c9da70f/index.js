let passtext = [ "1","2","3","4","5","6","7","8","9","0","!","#","@","$","-",]
let pass1 = document.getElementById("pas1")
let pass2 = document.getElementById("pas2")
let pass3 = document.getElementById("pas3")
let pass4 = document.getElementById("pas4")
let btn = document.getElementById("btngen");
btn.addEventListener('click', event => {
  passgen();
});
function passgen() { 
    let g1 = Math.floor(Math.random(passtext)*15) 
    let g2 = Math.floor(Math.random(passtext)*15)
     let g3 = Math.floor(Math.random(passtext)*15)
     let g4 = Math.floor(Math.random(passtext)*15)
    let g5 = Math.floor(Math.random(passtext)*15)
    let g6 = Math.floor(Math.random(passtext)*15)
     let g7 = Math.floor(Math.random(passtext)*15)
   let g8 = Math.floor(Math.random(passtext)*15)
   let g9 = Math.floor(Math.random(passtext)*15)
   let g10 = Math.floor(Math.random(passtext)*15)
    pass1.textContent = passtext[g1] + passtext[g2] + passtext[g3] + passtext[g4] + passtext[g5] + passtext[g6] + passtext[g7] + passtext[g8] + passtext[g9] + passtext[g10]
      let g11 = Math.floor(Math.random(passtext)*15) 
    let g12 = Math.floor(Math.random(passtext)*15)
     let g13 = Math.floor(Math.random(passtext)*15)
     let g14 = Math.floor(Math.random(passtext)*15)
    let g15 = Math.floor(Math.random(passtext)*15)
    let g16 = Math.floor(Math.random(passtext)*15)
     let g17 = Math.floor(Math.random(passtext)*15)
   let g18 = Math.floor(Math.random(passtext)*15)
   let g19 = Math.floor(Math.random(passtext)*15)
   let g20 = Math.floor(Math.random(passtext)*15)
    pass2.textContent = passtext[g11] + passtext[g12] + passtext[g13] + passtext[g14] + passtext[g15] + passtext[g16] + passtext[g17] + passtext[g18] + passtext[g19] + passtext[g20]
      let g21 = Math.floor(Math.random(passtext)*15) 
    let g22 = Math.floor(Math.random(passtext)*15)
     let g23 = Math.floor(Math.random(passtext)*15)
     let g24 = Math.floor(Math.random(passtext)*15)
    let g25 = Math.floor(Math.random(passtext)*15)
    let g26 = Math.floor(Math.random(passtext)*15)
     let g27 = Math.floor(Math.random(passtext)*15)
  let g28 = Math.floor(Math.random(passtext)*15)
   let g29 = Math.floor(Math.random(passtext)*15)
 let g30 = Math.floor(Math.random(passtext)*15)
    pass3.textContent = passtext[g21] + passtext[g22] + passtext[g23] + passtext[g24] + passtext[g25] + passtext[g26] + passtext[g27] + passtext[g28] + passtext[g29] + passtext[g30]
     let g31 = Math.floor(Math.random(passtext)*15) 
    let g32 = Math.floor(Math.random(passtext)*15)
     let g33 = Math.floor(Math.random(passtext)*15)
     let g34 = Math.floor(Math.random(passtext)*15)
    let g35 = Math.floor(Math.random(passtext)*15)
    let g36 = Math.floor(Math.random(passtext)*15)
     let g37 = Math.floor(Math.random(passtext)*15)
     let g38 = Math.floor(Math.random(passtext)*15)
   let g39 = Math.floor(Math.random(passtext)*15)
   let g40 = Math.floor(Math.random(passtext)*15)
    pass4.textContent = passtext[g31] + passtext[g32] + passtext[g33] + passtext[g34] + passtext[g35] + passtext[g36] + passtext[g37] + passtext[g38] + passtext[g39] + passtext[g40]
}
passgen()