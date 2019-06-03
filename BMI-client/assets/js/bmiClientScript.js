let calculateBtn = document.getElementById("calculateBtn");
let resultDiv = document.getElementById("bmiValue");
let weightTextBox = document.getElementById("userWeight");

//Method for making the AJAX request to the webservice
const computeBMI336 = () => {
    let userHeight = document.getElementById("userHeight").value;
    let userWeight = document.getElementById("userWeight").value;

    if(validateInputs336(userHeight,userWeight)){
        var xhttp = new XMLHttpRequest();
        let bmiResult;
        const url = "http://localhost:8080/computebmi336";
        xhttp.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                bmiResult = JSON.parse(this.responseText);
                console.log(bmiResult.bmi);
                displayOutput336(bmiResult.bmi);
            }
        }
        let buildURL = url + "?" + "weight=" + userWeight + "&height=" + userHeight;
        console.log(buildURL);
        xhttp.open("GET",buildURL, true);
        xhttp.send();
    }
    
}

//Method for validating user inputs
const validateInputs336 = (height,weight) => {
   if(height.length <=0 || weight.length <=0){
      //alert("Fields cannot be left empty");
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'We need both height and weight for computing the BMI.',
        footer: 'Tip: Enter your height in metres and weight in kilograms.'
      });
      return false;
   }
   return true;
}

//Method for displaying the output to the user
const displayOutput336 = (bmiValue) => {
    if(bmiValue != null){
        let mainDiv = document.getElementById("containerDiv");
        let removeDiv = document.getElementById("bmiResultDiv");
        if (removeDiv != null){
            removeDiv.parentNode.removeChild(removeDiv);
        }
        let resultDiv =  document.createElement("div");
        resultDiv.classList = "top2";
        resultDiv.classList = "result";
        resultDiv.id = "bmiResultDiv";
        let output = "Your BMI is: " + bmiValue;
        resultDiv.appendChild(document.createTextNode(output));
        mainDiv.appendChild(resultDiv);
    }
    else{
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Seems like there is a problem with your inputs.',
            footer: 'Tip: Make sure you have entered only valid numeric inputs.'
          });
    }
    
}

//Method for handling enter key press for submit
const computeWhenEnter336 = (event) => {
    if(event.keyCode == '13'){
        computeBMI336();
    }
}

calculateBtn.addEventListener("click",computeBMI336);
weightTextBox.addEventListener("keypress",computeWhenEnter336);
