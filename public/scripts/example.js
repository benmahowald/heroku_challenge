console.log('example handshake');

$(document).ready(function () {
  console.log('in jquery ready document');

  $('#sendInfo').on('click', function () {
    console.log('in sendInfo');

    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();

    var objectToSend = {
      creature: creatureIn,
      noise: noiseIn,
    };

    $.ajax({
      url: '/shout',
      type: 'POST',
      data: objectToSend,
      success: function (data) {
        console.log('ajax server success/got this data:', data);
      }, //end success
    }); //end ajax
  }); //end sendInfo on click
}); //end doc ready
