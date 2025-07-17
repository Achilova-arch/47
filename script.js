const body=document.getElementsByTagName("body")[0];
const h1=document.createElement("h1");
body.style="Background-color:blue";
h1.style="color:yellow;font-size:70px;text-align:center;margin-top:300px";
const ism=prompt("Ism kiriting:");
h1.textContent=ism;
body.appendChild(h1);