// const moment = require("moment");

$(document).ready(() => {
  const $body = $('body');
  const $mainDiv = $('.main');

  const $homeBtn = $('#to-home');


////////////////////////////////////////////////////////////////////////////
//                    first to fill the page                             //
///////////////////////////////////////////////////////////////////////////


getTweets(streams.home);

function getTweets(array) {
  const $tweets = array.map((tweet) => {
    const $tweet = $(document.createElement('div'))
      .addClass('tweet')
      .attr('id', tweet.user)
      .attr('data-date', tweet.created_at);
    const time = moment(tweet.created_at, 'ddd mmm dd yyyy HH:MM:ss').fromNow(true);
    const $user = $(document.createElement('a'))
      .addClass('user')
      .attr('id', 'user')
      .attr('href', '#')
      .attr('data-user', tweet.user)
      .text(`@${tweet.user}`)
    const $message = $(document.createElement('div'))
      .addClass('message')
      .text(tweet.message);
    const $time = $(document.createElement('div'))
      .addClass('time')
      .attr('id', 'time')
      .text(`twidded ${time}`)
    $tweet.append($user, $message, $time);
    $tweet.prependTo($('.main'));
    return $tweet;
  });
  twitCount = streams.home.length;
  return $tweets
};

const $tweet = $('.tweet');

// console.log($tweet[0].dataset.date, $tweet)

////////////////////////////////////////////////////////////////////////////
//                   get current time on tweets                          //
///////////////////////////////////////////////////////////////////////////


function updateTweetTime(){
  $('.tweet').each(function(){   
    let newTime = $(this).data('date');
    newTime = moment(newTime).fromNow(true);
    $(this).find('.time').text(`twidded ${newTime}`);
  });
};

setInterval(updateTweetTime, 60000);

////////////////////////////////////////////////////////////////////////////
//                   generate random tweets with click                    //
///////////////////////////////////////////////////////////////////////////


$('#get-new-tweet').on('click', function() {    
  const curTweets = $('.tweet').length;
  const undisplayedTweets = streams.home.slice(curTweets)
  if (undisplayedTweets.length !== 0) {
    getTweets(undisplayedTweets);
  }
  return false;
})


////////////////////////////////////////////////////////////////////////////
//                   pop-up to filter each user                          //
///////////////////////////////////////////////////////////////////////////

// build a filter function that finds tweets


$('body').on('click', '.user', function() {
  // store the current name that is clicked
  const $clickedName = $(this).data('user');
  const $filteredTweets = $('.tweet').filter((i, tweet) => {
    const $userName = $(tweet)[0].id;
    if ($userName !== $clickedName) {
      return tweet;
    }
  });
  
  $filteredTweets.hide();
  $homeBtn.show();
  $('#get-new-tweet').hide();
  $('#user-home').show();
  $('#user-home').text(`${$clickedName} twids`);

  $homeBtn.on('click', function() {
    $filteredTweets.show();
    $homeBtn.hide();
    $('#get-new-tweet').show();
    $('#user-home').hide()

    return false;
  })
  
  return false;
});



////////////////////////////////////////////////////////////////////////////
//                generate random tweets from time                        //
////////////////////////////////////////////////////////////////////////////
  





/////////////////////////////////////////////////////////////////////
//                     add a tweet                                //
////////////////////////////////////////////////////////////////////



$('#twit-it').on('click', function() {
  window.visitor = $('#user-name').val();
  const $newUser = $('#user-name').val();
  const $newTweet = $('#twit').val();

  const newUser = {
    user: visitor,
    message: [$newTweet],
    created_at: new Date()
  };

  if ($newUser.length && $newTweet.length) {
    const $tweet = $(document.createElement('div'))
      .addClass('tweet')
      .attr('id', $newUser)
      .attr('data-date', new Date());
    const time = moment(new Date(), 'ddd mmm dd yyyy HH:MM:ss').fromNow(true);
    const $user = $(document.createElement('a'))
      .addClass('user')
      .attr('id', 'user')
      .attr('href', '#')
      .attr('data-user', $newUser)
      .text(`@${$newUser}`)
    const $message = $(document.createElement('div'))
      .addClass('message')
      .text($newTweet);
    const $time = $(document.createElement('div'))
      .addClass('time')
      .attr('id', 'time')
      .text(`twidded ${time}`)
    $tweet.append($user, $message, $time);
    $tweet.prependTo($('.main'));

    console.log('user message index.js',newUser.message)
    writeTweet(newUser);
  }
  $('#user-name').val('');
  $('#twit').val('');

});





});
