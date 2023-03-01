  submitForm = (event) =>{
    event.preventDefault();
    let name =document.forms["welcome_form"]["name"].value;
    if(name !== ''){
       
        sessionStorage.setItem("name",name);
        location.href = "instructions.html";

    }
    else{
        alert("Please enter your name")
    }
   
   
}


