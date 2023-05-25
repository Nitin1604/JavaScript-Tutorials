console.log("Events in JS") 

document.getElementById("heading_id").addEventListener("click", function(e) {
  let event_occured 
  console.log("You have clicked the heading") 
  event_occured = e.target 
  event_occured = e.target.className 
  event_occured = Array.from(e.target.classList) 

  event_occured = e.target.id 
  console.log('The heading id is:',event_occured) 
 
// It will give you the distance in the x-axis relative to elememt
event_occured = e.offsetX 
console.log('Distance relative to x-axis relative to element is :',event_occured) 

// It will give you the distance in the y-axis relative to elememt
  event_occured = e.offsetY 
  console.log('Distance relative to y-axis relative to element is :',event_occured) 
 
// It will give you the distance in the x-axis relative to element of browser window
event_occured = e.clientX 
console.log('Distance in the x-axis relative to element of browser window is: ',event_occured) 

// It will give you the distance in the y-axis relative to element of browser window
  event_occured = e.clientY 
  console.log('Distance in the y-axis relative to element of browser window is: ', event_occured) 
  // location.href = '//codewithharry.com'
}) 

