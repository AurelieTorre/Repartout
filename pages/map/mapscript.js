document.addEventListener("DOMContentLoaded", function() {

    function showMap() {
        const address = document.getElementById('address').value;

        fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + address)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const lat = data[0].lat;
                    const lon = data[0].lon;
                    
                    const map = L.map('map').setView([lat, lon], 14);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    L.marker([lat, lon]).addTo(map);

                    document.getElementById('location').style.display = 'none';
                    document.getElementById('map').style.display = 'block';
                } else {
                    alert('Adresse non trouvée');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }
});