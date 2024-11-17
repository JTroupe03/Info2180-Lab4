document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchvalue = document.getElementById('Search').value.trim();
        console.log(searchvalue)
        fetch('http://localhost/Info2180-Lab4/superheroes.php?query=' + encodeURIComponent(searchvalue))
            .then(response => response.text())
            .then(data => {
                console.log(data);
                document.querySelector(".result").innerHTML = data;
         })
            .catch(error => {
                console.error('Error:', error);
                document.getElementsByClassName('result').innerText = 'An error occurred while fetching data.';
         });
   });

});