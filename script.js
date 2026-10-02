function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("open");
}

document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",()=>document.getElementById("navMenu").classList.remove("open"));
});

function submitOrder(event){
  event.preventDefault();
  const name=document.getElementById("name").value;

  document.getElementById("formMessage").textContent =
    `Thanks, ${name}! Your inquiry has been prepared. (Demo form for the academic project.)`;

  event.target.reset();
}