$(document).ready(function() {
  // Variables de autenticación
  var clientId = '619b21f831bf464e8287ac3fcbdc0bd0';
  var clientSecret = '8d24091fa0df48b5b67de1d789e6d941';

  // Autenticación y obtención del token de acceso
  $.ajax({
    url: 'https://accounts.spotify.com/api/token',
    type: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      'grant_type': 'client_credentials'
    },
    success: function(response) {
      var accessToken = response.access_token;

      // Obtención de canciones populares
      $.ajax({
        url: 'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks',
        type: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        success: function(response) {
          var tracks = response.items;

          // Mostrar las canciones en la lista
          for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i].track;
            $('#track-list').append('<li>' + track.name + ' - ' + track.artists[0].name + '</li>');
          }
        }
      });
    }
  });
});
