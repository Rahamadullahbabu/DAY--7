//1--Solving problems using array functions on the rest countries' data.

//a.Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

var res=result.filter((ele)=>ele.region==="Asia");
console.log(res);

}


//b--Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
for(var i=0;i<result.length;i++){
  var res=result.filter((ele)=>ele.population<200000);
  console.log(res);

}}

//c--Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
  var res=result.filter((ele)=>ele.region);
 
 console.log(result[i].name);
 console.log(result[i].capital);
 console.log(result[i].flag);
}}


