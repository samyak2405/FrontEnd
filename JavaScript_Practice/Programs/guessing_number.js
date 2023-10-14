function getRandomInteger(max,min)
{
    const randomNum = Math.floor(Math.random()*(max-min))+min;
    return randomNum;
}


let min = parseInt(prompt("Enter the Minimum number"));
while(!min)
{
    min = parseInt(prompt("Enter the Minimum number"));
}
let max = parseInt(prompt("Enter the Maximum number"));
while(!max)
{
    max = parseInt(prompt("Enter the Maximum number"));
}

const randInt = parseInt(getRandomInteger(max,min));
let count = 1;
let number;
while(true)
{
    number = parseInt(prompt("Guess the number"));
    count++;
    if(number<randInt)
        alert("Guess Higher");
    else if(number>randInt)
        alert("Guess Lower");
    else
        break;
}
alert("Number of tries: "+count);
