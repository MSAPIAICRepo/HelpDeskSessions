//Function Declaration/Defining
function PrepareMeal(dishName:string)  //This is function signature  (Named / Concrete Function)
{
//This is the body of function
    console.log("Making :"+dishName);    
}

//Function Call
PrepareMeal("Chicken Tikka");   

//Arrow
let PrepareNewMeal = (dishName:string) => {
    console.log("Making :"+dishName);    
}
PrepareNewMeal("Russian Salad");


//1. Prepare Meal
//2. Decorate Stage
//3. Music Arrangement
//4. Gift Collection