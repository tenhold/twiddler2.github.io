

$(document).ready(() => {
  // const $body = $('body');
  // $body.html('');


///////////          Creating a main list in the body           ///////////

  

  const $mainDiv = $('<div></div>')
    .attr('class', 'main')
    .attr('id', 'main')
    .appendTo($('#top'));
  const $twiddleList = $('<ul>')
    .attr('class', 'twiddle-list')
    .attr('id', 'twiddle-list')
    .appendTo($mainDiv);



///////////           Populating the last with twidders         ///////////



  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>')
      .attr('id', 'twiddle');

    let fromNow = moment().startOf(tweet.created_at).fromNow();
    const user = tweet.user;
    const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

    

    $tweet.text(text)
    return $tweet;
  });

  $mainDiv.append($tweets);

  ///////////        Add to list                             ///////////

  $('#submit').submit(function(e) {
    alert('submit called');
    localStorage.setItem('twid', $('#twid'));
    e.preventDefault();
  })


  // $('text').keyup(function(e) {
  //   let code = e.which;
  //   if (code === 13) {
  //     e.preventDefault();
  //     $twiddleList.append(`<li> ${e.target.value}</li>`)
  //   }
  // })



  const inpTwid = document.getElementById($('#text'));

  const btn = document.getElementById($('#submit'));

  const tweetList = document.getElementById($twiddleList);













});




//   const $tweets = streams.home.map((tweet) => {
//     const $tweet = $('<div></div>');
//     const text = `@${tweet.user}: ${tweet.message}`;

//     $tweet.text(text);
//     // console.log('users', users);
//     // console.log('streams', streams.home);
//     // console.log('home', streams.home);
//     return $tweet;
//   });
//   $body.append($tweets);

// });
