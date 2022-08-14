//
let cityName = "Denver";
let key = '22e15bd1c681f8e926726b2a9eb2d785';
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key+'&units=imperial')
.then(function(respone){
    return respone.json();
}
).then(function(data){
    console.log(data);
    $('#cityNDate').text(data.name);
    $('#temp').text(data.main.temp );
    $('#wind').text(data.wind.gust);
    $('#humidity').text(data.main.humidity);
}
).catch(function(reponse){
    console.log(reponse);
})

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid='+key+'&units=imperial')
.then(function(respone){
    return respone.json();
}
).then(function(data){
    console.log(data);

    // data in array we want is 6, 14, 22, 30, 38
    let days = [1,9,17,25,33];
    let foreCast = $('#fiveDayForecast');

    for(let i in days){
        let cData = data.list[days[i]];
        console.log(cData);
        let card = $('<div>');
        card.attr('class','card mb-3 col-2');

        let cBody = $('<div>');
        cBody.attr('class','card-body');
        card.append(cBody);


        let dtaz = new Date();
console.log(dtaz, dtaz.getDate());

        let title = $('<h5>');
        title.attr('class','card-title');
        title.text(cData.dt_txt);
        cBody.append(title);
/*        let para = $('<p>');
        para.attr('class','card-text');
        cBody.append(para);*/


        let para = $('<p>');
        para.attr('class','card-text');
        para.text('temp'+cData.main.feels_like);
        cBody.append(para);

        let para2 = $('<p>');
        para2.attr('class','card-text');
        para2.text('wind'+cData.wind.speed);
        cBody.append(para2);

        let para3 = $('<p>');
        para3.attr('class','card-text');
        para3.text('humidity'+cData.main.humidity);
        cBody.append(para3);
        
        foreCast.append(card);
    }
    // 
    /*
            <div class="card mb-3 col-2">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
    */
}
).catch(function(reponse){
    console.log(reponse);
})
