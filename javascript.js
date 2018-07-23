$(document).ready(function() {
    $('#search').click(function() {
      $('#output').html("");
      var searchTerm = $('#searchTerm').val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
  
      $.ajax({
        async: false,
        url: url,
        dataType: "json",
        success: function(data) {
          for (var i = 0; i < data[1].length; i++) {
            $('#output').prepend("<a href=" + data[3][i] + " id='#hyperlink'><span>" + data[1][i] + "</span></a><p>" + data[2][i] + "</p>")
          };
        },
        error: function(data) {
          alert("Alert!")
        }
      });
    });
  });