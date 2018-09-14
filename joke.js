$(onLoad)

function onLoad() {
  function getQuote() {
    $.ajax({
      method: 'GET',
      url: 'https://api.icndb.com/jokes/random',
      success: function(data) {
        var quote = data.value.joke
        $('.quote').text(quote)
      }
    })
  }
  getQuote()
  $('.generate').on('click', function() {
    getQuote()
  })
}
