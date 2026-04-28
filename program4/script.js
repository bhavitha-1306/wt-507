async function fetchData(){

try{

document.getElementById("loading").style.display="block";

const response = await fetch("https://jsonplaceholder.typicode.com/users");

if(!response.ok){
throw new Error("Network error");
}

const users = await response.json();

renderData(users);

}

catch(error){
alert("Failed to fetch data");
console.log(error);
}

finally{
document.getElementById("loading").style.display="none";
}

}

function renderData(data){

const dataBody=document.getElementById("dataBody");

dataBody.innerHTML="";

data.forEach(user=>{

const row=document.createElement("tr");

row.innerHTML=`
<td class="border px-4 py-2">${user.id}</td>
<td class="border px-4 py-2">${user.name}</td>
<td class="border px-4 py-2">${user.email}</td>
`;

dataBody.appendChild(row);

});

}

fetchData();