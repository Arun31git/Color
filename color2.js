//const now = new Date()
const getColor=() =>
{
    const randomNumber = Math.floor(Math.random(322) * 16777215);
    console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}
// document.getElementById('btn').addEventListener(
//     'click',getColor)

// getColor();
let i=1;
for(i=1;i>0;i++)
{
    getColor();
}