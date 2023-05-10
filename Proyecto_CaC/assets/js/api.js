$(document).ready(function() {
  const clientId = '619b21f831bf464e8287ac3fcbdc0bd0';
  const clientSecret = '8d24091fa0df48b5b67de1d789e6d941';

  // Obtener el token de acceso
  function getAccessToken() {
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credentials);

    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${encodedCredentials}`
      },
      body: 'grant_type=client_credentials'
    })
    .then(response => response.json())
    .then(data => data.access_token);
  }

  // Obtener las top 5 canciones mundiales
  function getTopSongs(accessToken) {
    return fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=5', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => data.items.map(item => item.track))
    .catch(error => console.log(error));
  }

  // Mostrar las canciones en la página
  function displayTopSongs(songs) {
    const topSongsElement = $('#top-songs');

    songs.forEach(song => {
      const listItem = $('<li>').text(`${song.name} - ${song.artists[0].name}`);
      topSongsElement.append(listItem);
    });
  }

  // Obtener el token de acceso y las top 5 canciones
  getAccessToken()
    .then(token => getTopSongs(token))
    .then(songs => displayTopSongs(songs));
});
