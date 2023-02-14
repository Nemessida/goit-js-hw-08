import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
let localObject = {email:' ', message:' '};
// const emailInput = document.querySelector("input");
// const messageInput = document.querySelector("textarea");

const form = document.querySelector('.feedback-form');

form.addEventListener("input", throttle((event) => {
    event.preventDefault();
    
    localObject[event.target.name] = event.target.value
   
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(localObject));
  }, 500));


  const dataLocalObject = localStorage.getItem(FEEDBACK_FORM_STATE);
  function insrtFromLocalStorage(dataLocalObject)
  {

//     if (dataLocalObject === null) {
//   return
// }
//     let localObject = JSON.parse(dataLocalObject);

//     for ( prop in localObject) {
//       form[name.value] + localObject[prop];
//     }
    if (!dataLocalObject) return
    
    // console.log(localObject); 
    try {
      let localObject = JSON.parse(dataLocalObject);
      Object.entries(localObject).forEach(([name, value]) => {
        form[name].value = value
      })
    } catch (error) {
      
    }
    
    // for ( prop in localObject) {
    //   form[name.value] + localObject[prop];

    // if(object && emailInput.name === "email"){
    //     emailInput.value = JSON.parse(object).email;
    //   }
    //   if(object && messageInput.name === "message"){
    //       messageInput.value = JSON.parse(object).message;
    //     }

  }
        
  
  insrtFromLocalStorage(dataLocalObject);
  
  form.addEventListener("submit", submitForm);
  
  function submitForm(event){

    // const localObject = {
    //       elements: { email, message }
    //     } = event.currentTarget;
    // console.log(email.value, message.value);


    console.log(dataLocalObject);
    localObject = {email:' ', message:' '};
    
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
     
    
  }
  
  
  