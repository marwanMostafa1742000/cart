/*
cart 
display
serach
updete
Delete
1)PrductName
2)Prductprice
3)Prduct Catagroy
4)PrductDesc
// Dom js
// Boom js
// */


var foodname = document.getElementById('foodname');
var Quantity = document.getElementById('Quantity');
var calories=document.getElementById('calories');
var Protein =document.getElementById('Protein');
var carp =document.getElementById('carp');
var Fats =document.getElementById('Fats');
var fiber =document.getElementById('fiber');
var minbutn = document.getElementById('btnupdet');
console.log(foodname , Quantity ,calories ,Protein ,carp ,Fats ,fiber);

// Function Add
var prductcontenr;
if (localStorage.getItem("prductList")== null)
{
    prductcontenr =[];
}else
{
    prductcontenr= JSON.parse(localStorage.getItem("prductList"));

    displayData();
}
console.log(prductcontenr);



function addprduct(){
        if (Rester() == true){
            var prduct ={
                name:foodname.value ,
                Qun:Quantity.value,
                 cart:calories.value,
                crp:carp.value,
                pro:Protein.value,
                fa:Fats.value,
                fi:fiber.value,
                   }   

           prductcontenr.push(prduct);
        localStorage.setItem("prductList" , JSON.stringify(prductcontenr));                
                  displayData();   
         Deltedata();
    
    }


}





    function Deltedata(){
        var prduct ={
            name:foodname.value ="" ,
            Qun:Quantity.value  ="",
             cart:calories.value  ="",
            crp:carp.value  = "",
            pro:Protein.value ="",
            fa:Fats.value   ="",
            fi:fiber.value  ="",
            
                }
    }



function displayData(){

   var  cartion =``;
    for (var i =0 ; i<prductcontenr.length ;i++){

cartion+= ` <tr>



<td>${i}</td>
<td>${prductcontenr[i].name}</td>
<td>${prductcontenr[i].Qun}</td>
<td>${prductcontenr[i].cart}</td>
<td>${prductcontenr[i].crp}</td>
<td>${prductcontenr[i].pro}</td>
<td>${prductcontenr[i].fa}</td>
<td>${prductcontenr[i].fi}</td>


 <td> <button onclick="updateprduct(${i})"class="btn " id="">update</button></td>
 <td> <button onclick="deleteProducts(${i})"class="btn">delete</button></td>
</tr>
`

    }
    document.getElementById('tableBody').innerHTML =cartion;
}
function Rester (){

    if (foodname.value !="" && Quantity.value!="" && calories.value!="" &&Protein.value!=""  &&carp.value!=""  &&Fats.value!=""  &&fiber.value!=""){

        return true;

    }else {

        return false;
    }
}
/*
//localStorage
localStorage.setItem("marwan" , "kream" , "mostafa");

alert (localStorage.getItem("marwan" , "mostafa" , "kream"));
localStorage.removeItem();
localStorage.clear();
localStorage.length();

*/
function deleteProducts(index)
 {
    prductcontenr.splice(index , 1);
    displayData();
    localStorage.setItem("productsList", JSON.stringify( prductcontenr));
  }
  function updateprduct(prductinteax){
foodname.value = prductcontenr[prductinteax].name;
Quantity.value = prductcontenr[prductinteax].Qun;
calories.value = prductcontenr[prductinteax].cart;
Protein.value = prductcontenr[prductinteax].pro;
carp.value = prductcontenr[prductinteax].crp;
Fats.value = prductcontenr[prductinteax].fa;
fiber.value = prductcontenr[prductinteax].fi;



minbutn.innerHTML ="btnupdet";
  }

   
  function serchprduct(serchteem){


    var cartion = ``;
    for (var i =0 ; i<prductcontenr.length ; i++){


        
        if (prductcontenr[i].name.toLowerCase().includes(serchteem.toLowerCase())== true||(prductcontenr[i].Qun.toLowerCase().includes(serchteem.toLowerCase())==true)){
 cartion+=`<tr>

 <td>${prductcontenr[i].name}</td>
 <td>${prductcontenr[i].Qun}</td>
 <td>${prductcontenr[i].cart}</td>
 <td>${prductcontenr[i].crp}</td>
 <td>${prductcontenr[i].pro}</td>
 <td>${prductcontenr[i].fa}</td>
 <td>${prductcontenr[i].fi}</td>
 
 </tr>
 `

}

    }

    document.getElementById('tableBody').innerHTML=cartion;
  }




// ""  ''  ``