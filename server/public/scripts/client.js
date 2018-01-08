console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke);
    getJokes();
}

function addJoke() {
    // get jokes from DOM
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#question').val(),
        punchLine: $('#punchlineIn').val()
    };

    console.log('add joke', newJoke);

    // ajax request
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke,
        success: function(response) {
            console.log('post response: ', response);
            getJokes();
        }
    })

    // refresh joke list
}

function getJokes() {
    $.ajax({
        method: 'GET',
        url: '/jokes',
        success: function(response) {
            console.log('jokes array: ', response);            
        }
    });
}
