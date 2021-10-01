//Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let firstName= "John"
let lastName = "Doe"
console.log('"',firstName,"<>",lastName,'"')
//Create an object with properties such name, surname, email
const userDetail = {
 name:"muhammad Javaid",
 surname:"Javaid",
 email:"javaidmalik.khan@gmail.com",
 
}
console.log(userDetail)
//Delete the email property from the previously created object
delete userDetail.email
console.log(userDetail)
//Create an array with 10 strings in it
let stringOfArray = ["one","two","three","four","five","six","seven","eight","nine","ten"]
//Print in the console every string from the previous array
console.log(stringOfArray)
//Create an array with 100 random numbers in it
let arr = [];
while(arr.length < 100){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
//Write a function to get the maximum and minimum values from the previously created array
const maxArray = function(){
    let maxnum =Math.max(arr)
    if(maxnum > arr)
   console.log("Maximum value from Array",maxnum)
  }
  maxArray()
  //Create an array of arrays, in which every array has 10 random numbers
  //Create a function that gets 2 arrays as parameters and returns the longest one
  
 
  //Get the element with an id of "container" from the page

let getContainer =  document.getElementById("#container")
console.log(getContainer)
//Get every <td> element from the page 
let getAllTd = document.querySelectorAll("td")
//Use a loop for printing the text inside of every <td> element in the page
//Write a function to change the heading of the page
 let changeHeading = function (){
  let heading = document.querySelectorAll("h1")
  heading.values=="new value of the heading"
 // console.log(heading)
 }
 //changeHeading()
 //Write a function to add a red background to every link in the page
 //Console log "Page loaded" when the page is correctly loaded
 window.onload = function() {
    console.log("Page loaded")
  }
 //Write a function to add new items to a unordered list
 const unoderListAddition = function (){
 let addItem = document.querySelector("ul")
 let li = document.createElement("li")
 li.appendChild(document.createTextNode("New list item"))
 addItem.appendChild(li)
 console.log(addItem)
 }


 //Write a function to empty a list
const removeAll = function {
    document.querySelector("Ol").innerHTML = "";
}