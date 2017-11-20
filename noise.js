let playNote = function playNote(note) {
  let audioID = note + 'Audio';
  let audio = document.getElementById(audioID);
  if (!audio.paused) {
    audio.pause();
    audio.currentTime=0;
    audio.play();
  } else {
    audio.play();
  }
}

$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    playNote($(this).html());
  });

  $('body').keydown( function(event) {
    let note = event.key;
    playNote(note);
    console.log($('.' + note).html());
    $('.' + note).addClass('active');
  });

  $('body').keyup( function(event) {
    $('.' + event.key).removeClass('active');
  });
});

// $('button').click((event) => {
//   // alert('clicked a thing');
//   $('#dAudio').get(0).play();
// });

// $('button').on('click', function() {
//   // alert('clicked a thing');
//   $('#cAudio').get(0).play();
// });

// $(document).ready(() => {
//   $('#my-list').on('click', 'li', function(event) {
//     alert(`Got a click on an <li> containing "${$(this).html()}"`);
//   });
//
//   $('#my-list').append($('<li>Herbie Hancock</li>'));
// });

// $('body').keydown((event) =>  {
//  if (event.keyCode === 32 || event.keyCode === 13) {
//    $('#color-box').removeClass().addClass(nextColor());
//    // alert('You got an space!');
//  }
// });
