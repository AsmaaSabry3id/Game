
let link = document.querySelectorAll('.menu a');
getGames("mmorpg");
let loading = document.querySelector("loading");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        document.querySelector('.menu .active').classList.remove('active');
        link[i].classList.add('active');

        const category = (link[i].getAttribute('data-category'));
        console.log(category);

        getGames(category);

    });
}



async function getGames(categoryName) {


    // loading.classList.remove('d-none');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad1f1011ebmshead3281e626a645p1807d1jsn7369f993be84',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
    };



    const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
    const data = await apiResponse.json();
    console.log(data);
    
    displayData(data);

    // loading.classList.add('d-none');


}





function displayData(gamesData) {
    let games = ``;


    for (let i = 0; i < gamesData.length; i++) {
        games += `<div class="row ">
        <div class="col">
            <div class="card ">
                <img src="${gamesData[i].thumbnail}" class="card-img-top" onclick="showDetails(${gamesData[i].id})" alt="...">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between">${gamesData[i].title}
                     <span class="badge text-bg-primary p-2">free</span></h5>
                    
                    <p class="card-text">${gamesData[i].short_description}</p>
                        <div class="hstack justify-content-between">
                        
                            <h3 class="h6 small"></h3>
                            
                        </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <small class="text-muted text-white">${gamesData[i].genre}</small>
                    <small class="text-muted text-white">${gamesData[i].platform}</small>
                </div>
            </div>
            
        </div>
        
        

    </div>`
    }


    document.getElementById('gameData').innerHTML=games;

}


function showDetails(id){
    location.href=`./index2.html?id=${id}`
}



