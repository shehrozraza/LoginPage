function myData(){

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email == "shehroz.raza11@hotmail.com" && password == "12345678"){
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        alert("login successful")
        document.getElementById("password").value=""
        document.getElementById("email").value=""
    }else{
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        alert("login failed try again")
       
    }

//    fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     // console.log("data",data[0].email)
//     .then(data =>{
//         let email=data[0].email
       
//         let ls = localStorage.getItem("data",JSON.stringify(data)) 
//         console.log(ls);
//     } )
    
   


}