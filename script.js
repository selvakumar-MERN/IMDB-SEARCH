var movieurl="https://imdb-api.com/en/API/SearchMovie/";
var apikey= "k_s6ztoxz8";



const createcards=document.querySelector(".imdbdly")
const container=document.createElement("div")
createcards.append(container)
container.setAttribute("class","container")
const header=document.createElement("div")
container.append(header)
const row=document.createElement("div")
container.append(row)
row.setAttribute("class","row")

  
//creating cards to display  data into it...
    function cards(get){
    const column=document.createElement("div")
    row.append(column)
    column.setAttribute("class","col-12 col-sm-6 col-md-4 col-lg-4 column1")
    const card=document.createElement("div")
    column.append(card)
    card.setAttribute("class","card")
    const img=document.createElement("img")
    card.append(img)
    img.setAttribute("src",get.image)
    img.setAttribute("width","100px")
    const cardbody=document.createElement("div")
    card.append(cardbody);
    cardbody.setAttribute("class","card-text")
    cardbody.innerHTML=`<p><label>Title :</label> ${get.title}<br><br><label>Release Type :</label> ${get.resultType}<br><br>
    <i class="fa fa-star" aria-hidden="true"></i>${get.description}<p>`   
}
//add event listenser to seach buuton and fetching data
const searchbtn=document.querySelector(".searchbtn")
const searchinput=document.querySelector(".searchinput")
searchbtn.addEventListener("click",async(e)=>{ 
    e.preventDefault()
    row.innerHTML="";  
    header.innerHTML="<h4>Results<h4>"
try{    
  await  fetch(`${movieurl}${apikey}/${searchinput.value}`)
    .then((res)=>res.json())
    .then((val)=>{
       for(i of val.results)
       cards(i)
    })
}
catch(error){
    row.innerHTML="sorry! unable to fetch data"
       console.log(error)
}
})