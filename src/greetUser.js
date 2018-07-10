function greetUser(){
    var greeting = document.querySelector('#greeting');
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');
 
    if(firstName && lastName){
        greeting.innerHTML = `
          <div>
            <h3>Welcome to my home page,</h3>
            <h4>${firstName} ${lastName}</h4>
          </div>
        `;
    }
    else{
        greetUser();
    }
 };

 export default greetUser;