const form=document.getElementById("form");
const gender=document.getElementById("gender");
const generror=document.getElementById("c-error");

//name
let a = document.getElementById("ainput");
let a1 = document.getElementById("a-error");


function validateaname()
{
   if(a.value===""){
      a1.innerHTML="please enter the First name";
    a.style.border="4px solid red";
    return false;
   }
   else if(a.value.length<3 || a.value.length>15){
      a1.innerHTML="Characters of the First name should be Min 3 and Max 15";
      a.style.border="4px solid red";
    return false;
   } 
   else{
      a1.innerHTML="";
      a.style.border="4px solid green";
      return true;
   }

}

//l-name
let b = document.getElementById("binput");
let b1 = document.getElementById("b-error");


function validatebname()
{
   if(b.value===""){
      b1.innerHTML="please enter the Last name";
    b.style.border="4px solid red";
    return false;
   }
   else if(b.value.length<3 || b.value.length>15){
      b1.innerHTML="Characters of the last name should be Min 3 and Max 15";
      b.style.border="4px solid red";
    return false;
   } 
   else{
      b1.innerHTML="";
      b.style.border="4px solid green";
      return true;
   }

}

//e-mail
let c = document.getElementById("dinput");
let c1 = document.getElementById("d-error");


function validatedname()
{
   if(c.value===""){
      c1.innerHTML="please enter the valid email";
    c.style.border="4px solid red";
    return false;
   }
   else if(!c.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      c1.innerHTML="please enter the valid email-id";
      c.style.border="4px solid red";
    return false;
   } 
   else{
      c1.innerHTML="";
      c.style.border="4px solid green";
      return true;
   }
}

//m-number
let d = document.getElementById("einput");
let d1 = document.getElementById("e-error");

function validateename()
{
   if(d.value===""){
      d1.innerHTML="please enter the valid number";
    d.style.border="4px solid red";
    return false;
   }
   else if((isNaN(d.value) || d.value.length<10 || d.value.length>10)){
      d1.innerHTML="please enter the valid phone no.";
      d.style.border="4px solid red";
    return false;
   } 
   else{
      d1.innerHTML="";
      d.style.border="4px solid green";
      return true;
   }
}

//address
let x = document.getElementById("finput");
let x1 = document.getElementById("f-error");

function validatefname()
{
   if(x.value===""){
      x1.innerHTML="please enter the valid Address";
    x.style.border="4px solid red";
    return false;
   }
   else if(!x.value.match(/^[a-z A-Z 0-9 . , / -]*$/)){
      x1.innerHTML="please enter the valid Address";
      x.style.border="4px solid red";
    return false;
   } 
   else{
      x1.innerHTML="";
      x.style.border="4px solid green";
      return true;
   }
}


//District
let f = document.getElementById("hinput");
let f1 = document.getElementById("h-error");

function validatehname()
{
   if(f.value===""){
      f1.innerHTML="please enter the valid District";
    f.style.border="4px solid red";
    return false;
   }
   else if( !f.value.match(/^[A-Z a-z]*$/)){
      f1.innerHTML="please enter the valid District";
      f.style.border="4px solid red";
    return false;
   } 
   else{
      f1.innerHTML="";
      f.style.border="4px solid green";
      return true;
   }
}

//pincode
let g = document.getElementById("iinput");
let g1 = document.getElementById("i-error");

function validateiname()
{
   if(g.value===""){
      g1.innerHTML="please enter the valid Pincode";
    g.style.border="4px solid red";
    return false;
   }
   else if( !g.value.match(/^[0-9]*$/) || g.value.length<6 || g.value.length>6){
      g1.innerHTML="please enter the valid Pincode";
      g.style.border="4px solid red";
    return false;
   } 
   else{
      g1.innerHTML="";
      g.style.border="4px solid green";
      return true;
   }
}

//state
let h=document.getElementById("state");
let h1=document.getElementById("g-error");

function validatestate()
{
   if(h.value==="-1"){
      h1.innerHTML="please enter the valid state";
      h.style.border="4px solid red";
      return false;
   }
   else if(h==="-1"){
      h1.innerHTML="please enter the valid state";
      h.style.border="4px solid red";
    return false;
   }
   else{
      h1.innerHTML="";
      h.style.border="4px solid green";
      return true;
   }
};


form.addEventListener('submit',e=>{
   e.preventDefault();
   checkinput();
})

function checkinput() {
   const fname = a.value.trim();
   const lname = b.value.trim();
   const mail = c.value.trim();
   const no = d.value.trim();
   const gen = document.form1.gender.value;
   const add = x.value.trim();
   const state = h.value.trim();
   const dis = f.value.trim();
   const pin= g.value.trim();

   var gender = form.querySelectorAll('input[name="gender"]:checked');
   if (!gender.length) {
            generror.innerHTML = "please click your gender";
            return false;
        }
        else{
            generror.innerHTML="";
        }
        
        var checkboxes = document.getElementsByName('Languages');
        var langerr = document.getElementById("j-error");
        var langu = "";
        var n = 0;
    for (var i = 0; i < checkboxes.length; i++) 
        {
            if (checkboxes[i].checked) {
                langu += checkboxes[i].value + " "+",";
                n++;
            }
        }
        if (n == 0) {
            langerr.innerHTML ="Select the Language";
            return false
            
        }
        else{
            langerr.innerHTML="";
        }

   
       document.write("First Name:"+" " +fname + "<br>");
       document.write("Last Name:"+" " +lname + "<br>");
       document.write("Gender:"+" " + gen + "<br>");
       document.write("Email id:"+" " + mail + "<br>");
       document.write("Phone Number:"+" " +no + "<br>");
       document.write("Address:"+" " + add + "<br>");
       document.write("State:"+" " + state + "<br>");
       document.write("District:"+" " + dis + "<br>");
       document.write("Pincode:"+" " + pin + "<br>");
       document.write("Language:"+" " + langu + "<br>");

    }
