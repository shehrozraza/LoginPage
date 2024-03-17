function myData(){
    // let email = document.getElementById("email").value
    // let password = document.getElementById("password").value
    // console.log(email);
    // console.log(password);

    // if (email == "shehroz.raza11@hotmail.com" && password == "12345678"){
    //     alert("login successful")
    // }else{
    //     alert("login failed try again")
    // }

   fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log("data",data[499].email))
    
    
   


}