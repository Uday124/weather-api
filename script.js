fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((result)=>{ 

   for(let i=0;i<result.length;i++){
         
         let image=result[i].flags.png;
         let name=result[i].name.common;
         let capital=result[i].capital;
         let region=result[i].region;
         let countryCode=result[i].fifa;
         let lat=result[i].latlng[0];
         let lon=result[i].latlng[1];
         const cardContainer=document.querySelector(".cardContainer");
       
         cardContainer.innerHTML+=`

                             <div class="card cardContent">
                             <h1 class="card-header">${name}</h1>
                             <img src="${image}" class="card-img-top" alt="flag">
                             <div class="card-body countryDetails">
                               <p class="card-text">Capital:${capital}</p>
                               <p class="card-text">Region:${region}</p>
                               <p class="card-text">Country Code:${countryCode}</p>
                               <button class="btn btn-primary weatherButton" onclick="weather(${lat},${lon},${i})">Click for Weather</button>
                               <div id="weatherReport${i}"></div>
                             </div>
                             </div>
                           
          `


          
             
}}).catch((error)=>console.log("error occured during the rest countries api process"));




function weather(lat,lon,i){
  
  const weatherReport=document.querySelector(`#weatherReport${i}`);
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90855e190d8921e0db834bb5086167bf`)
.then((response)=>response.json())
.then((result)=>weatherReport.innerHTML=result.weather[0].description)
}