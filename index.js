

$(document).ready(() => {
  // const $body = $('body');
  // $body.html('');


///////////          Creating a main list in the body           ///////////


// put the tweets in a div 
  

  const $mainDiv = $('<div></div>')
    .attr('class', 'main')
    .attr('id', 'main')
    .appendTo($('#top'));
  



///////////           Populating the last with twidders         ///////////
  
console.log('streams', streams)
console.log('home', streams.home)

const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>')
      .attr('class', 'tweet')
      .addClass('tweet');
    const $user = $('<a>')
      .attr('class', 'user')
      .append(tweet.user);
    const $message = $('<p></p>')
      .attr('class', 'message')
      .append(tweet.message);
    

    let fromNow = moment().startOf(tweet.created_at).fromNow();
 
    const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

    $mainDiv.append($tweet)

    $tweet.append($user, $message);
    $tweet.text(text)
    return $tweet;
  });

  $mainDiv.append($tweets);

  console.log($tweets)


  // const $tweets = streams.home.map((tweet) => {
  //   const $tweet = $('<div></div>')
  //     .attr('class', 'tweet')
  //     .addClass('tweet');
  //   const $user = $('<a>')
  //     .attr('class', 'user')
  //     .append(tweet.user);
  //   const $message = $('<p></p>')
  //     .attr('class', 'message')
  //     .append(tweet.message);

  //   let fromNow = moment().startOf(tweet.created_at).fromNow();
 
  //   const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

  //   $mainDiv.append($tweet)

  //   $tweet.append($user, $message);
  //   $tweet.text(text)
  //   return $tweet;
  // });

  // $mainDiv.append($tweets);


  ///////////        Add to list                             ///////////



        // Continually run to update count of new, not displayed, tweets
        (function updateTweetCount(){
          if(streams.home.offset > 0){
            var newTweetsCount = 0;
            if(location.hash && location.hash.substr(1) !== 'timeline'){
              var user = location.hash.substr(1);
              newTweetsCount = streams.users[user].length - 
                $('.tweet').filter('[data-user="' + user + '"]').length;
            }else{
              newTweetsCount = streams.home.length - streams.home.offset;
            }
            if(newTweetsCount > 0){
              $('#newtweets-count').text(newTweetsCount);
              $('#timeline-newtweets').slideDown(300);
            }
          }
          setTimeout(updateTweetCount, 5000);
        })();

  // $('text').keyup(function(e) {
  //   let code = e.which;
  //   if (code === 13) {
  //     e.preventDefault();
  //     $twiddleList.append(`<li> ${e.target.value}</li>`)
  //   }
  // })



  // const inpTwid = document.getElementById($('#text'));

  // const btn = document.getElementById($('#submit'));






  







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
