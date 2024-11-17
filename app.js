document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('searchButton').addEventListener('click', function() {
        fetch('http://localhost/Info2180-Lab4/superheroes.php')
            .then(response => response.text())
            .then(data => {
                console.log(data);
                alert(data);
         })
            .catch(error => {
                console.error('Error:', error);
         });
   });

});