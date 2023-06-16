document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("check-btn").addEventListener("click", () => {
        const request = new XMLHttpRequest();
        

        request.onload = function () {
            const loader = document.querySelector(".loader");
            const btn = document.getElementById("check-btn");
            var count = 10;
            loader.style.display = 'flex';
            btn.style.display = 'none';
            const data = JSON.parse(this.responseText);
            function counting() {
                --count;

                if (count < 0) {
                    clearInterval(myInterval); 
                    loader.style.display = 'none';   
                    const tablecontainer = document.querySelector(".table-container");
                    const table1 = document.createElement("table");
                    table1.className = "table-1";
                    tablecontainer.append(table1);
                    namekeys = data.name;
                    idkeys  = data.id;
                    tmzkey = data.timezone;
                    const namerow = document.createElement("tr");
                    const name = document.createElement("th");
                    const nametitle = document.createElement("th");
                    const idrow = document.createElement("tr");
                    const id = document.createElement("th");
                    const idtitle = document.createElement("th");
                    const tmzrow = document.createElement("tr");
                    const timezone = document.createElement("th");
                    const tmztitle = document.createElement("th");
                    name.innerHTML = namekeys;
                    nametitle.innerHTML = "name";
                    id.innerHTML = idkeys;
                    idtitle.innerHTML = "id";
                    timezone.innerHTML = tmzkey;
                    tmztitle.innerHTML = "time";
                    namerow.append(nametitle)
                    namerow.append(name)
                    idrow.append(idtitle)
                    idrow.append(id)
                    tmzrow.append(tmztitle)
                    tmzrow.append(timezone)
                    document.querySelector(".table-1").append(namerow);
                    document.querySelector(".table-1").append(idrow);
                    document.querySelector(".table-1").append(tmzrow);
    
                    coordkey = Object.keys(data.coord);
                    coordkey.forEach(key => {
                        const coordrow = document.createElement("tr");
                        const coordkeytitle = document.createElement("th");
                        const coorddata = document.createElement("th");
                        coordkeytitle.innerHTML = key;
                        coorddata.innerHTML = data.coord[key];
                        coordrow.append(coordkeytitle);
                        coordrow.append(coorddata);
                        document.querySelector(".table-1").append(coordrow);
                    });
                    
                    weatherkey = Object.keys(data.weather);
                    weatherkey.forEach(key => {
                        const weatherrow = document.createElement("tr");
                        const weatherkeytitle = document.createElement("th");
                        const weatherdata = document.createElement("th");
                        weatherkeytitle.innerHTML = key;
                        weatherdata.innerHTML = data.weather[key];
                        weatherrow.append(weatherkeytitle);
                        weatherrow.append(weatherdata);
                        document.querySelector(".table-1").append(weatherrow);
                    });
        
                    mainkey = Object.keys(data.main);
                    mainkey.forEach(key => {
                        const mainrow = document.createElement("tr");
                        const mainkeytitle = document.createElement("th");
                        const maindata = document.createElement("th");
                        mainkeytitle.innerHTML = key;
                        maindata.innerHTML = data.main[key];
                        mainrow.append(mainkeytitle);
                        mainrow.append(maindata);
                        document.querySelector(".table-1").append(mainrow);
                    });
                }
            }
            let myInterval = setInterval(counting, 100);
            
            
            

            

        }
        request.open("GET", "http://127.0.0.1:5000/api/weather/latest");
        request.send();
    })
})