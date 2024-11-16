
window.onload = mystarter;
function mystarter(){
    let searchbtn = document.getElementById('btn');
    var mynote;
    searchbtn.addEventListener('click', async function(element) {
        console.log("Search button clicked");
        element.preventDefault();
        var hero_form = document.getElementById("superhero").value;
        console.log("The hero form value is:", hero_form);
        var alias = document.getElementsByClassName("alias")[0]; 
        var biography = document.getElementsByClassName("biography")[0];  

        console.log(typeof(alias));
        console.log(typeof(biography));

        if (hero_form === ''){
            console.log("This is 1");
            fetch("./superheroes.php")
            .then(response => {
                console.log('Response Status:', response.status);
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                alias.innerHTML = data;
                alert(`Superheroes List \n ${data}`);
            })
            .catch(error => console.log('There was an error: ' + error));

        }else{
            //do
            console.log("This is 2");
            
            fetch("superheroes.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(hero_form)
            })
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                console.log(data);
                var hero = JSON.parse(data);
                console.log(hero);
                var hrname = hero["name"];
                var shalias = "A.K.A  " + hero["alias"];
                var biog = hero["biography"];
                console.log(hrname);
                console.log(shalias);
                console.log(biog);
                message.innerHTML = "";
                heroname.innerHTML = hrname;
                alias.innerHTML = shalias;
                biography.innerHTML = biog;
            });
        }     
    });
}
