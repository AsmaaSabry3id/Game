let searchParams = location.search;
let params = new URLSearchParams(searchParams);
let closeBtn = document.getElementById("btnClose")
let details ={};



const id = params.get("id");
(async function(){


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad1f1011ebmshead3281e626a645p1807d1jsn7369f993be84',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };


    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);

    let responseData = await api.json();

    details=responseData;
    displayData();
    console.log(responseData);

})();


function displayData(){

    let detailsBox =` 
    <div class="col-md-4">
    <img src="${details.thumbnail}" class="w-100" alt="image details">
</div>
<div class="col-md-8">
    <h3>${details.title}: </h3>
    <p>Category: <span class="badge text-bg-info"> ${details.publisher}</span> </p>
    <p>Platform: <span class="badge text-bg-info"> ${details.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info"> ${details.status}</span> </p>
    <p class="small">
    ${details.description}
    </p>
    <a class="btn btn-outline-warning" target="_blank" href="${details.freetogame_profile_url}">Show
        Game</a>
</div>`

document.getElementById('detailsContent').innerHTML=detailsBox;
};

closeBtn.addEventListener('click',closeDetails);



function closeDetails(){
    
}