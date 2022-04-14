//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.drinks[0])
//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// document.querySelector('h2').innerText = data.drinks[0].strDrink


document.querySelector('button').addEventListener('click', getDrink);
document.querySelector('#forward').addEventListener('click', nextDrink);
document.querySelector('#backward').addEventListener('click', lastDrink);

function nextDrink(){ 
    nav += 1;
    getDrink();
}
function lastDrink(){ 
 
    nav -= 1;
    getDrink();
}

let nav = 0;

function getDrink() {
    let drinkType = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkType}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            if(data.drinks[nav + 1] == undefined){
                nav = 0;
            }else{
            document.querySelector('h2').innerText = data.drinks[nav].strDrink
            document.querySelector('img').src = data.drinks[nav].strDrinkThumb
            document.querySelector('p').innerText = data.drinks[nav].strInstructions
            // for(const prop in data.drinks[nav]){
            //     if(prop.startsWith('strIngredient')){
            //         document.querySelector('.ingredients').innerHTML += 
            //         document.createElement('li').innerText = prop; 
                    
                 }
             }
          
        )
        .catch(err => {
            console.log(`error ${err}`)
        });
}