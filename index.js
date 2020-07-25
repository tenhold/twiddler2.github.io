// const moment = require("moment");



const makeTweet = function(me) {


  const tweets = $(document.createElement('div')).addClass('tweet');
  const h3 = $(document.createElement('h3')).text(me.userName);
  const p = $(document.createElement('p')).text(me.tweet);

  return (tweets.append(h3).append(p)).prop('outerHTML');


}



$(document).ready(() => {
  const $body = $('body');
  const $mainDiv = $('.main');
  // $body.html('');

  console.log('stream', streams)
  console.log('home', streams.home);


const $homeBtn = $('#to-home');


////////////////////////////////////////////////////////////////////////////
//                    first to fill the page                             //
///////////////////////////////////////////////////////////////////////////


getTweets();

function getTweets() {
  const $tweets = streams.home.map((tweet) => {
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
      .text(friendlyTimer)
    $tweet.append($user, $message, $time);
    $tweet.prependTo($('.main'));
    return $tweet;
  });
  twitCount = streams.home.length;
  return $tweets
};

const $tweet = $('.tweet');

// console.log($tweet[0].dataset.date)

////////////////////////////////////////////////////////////////////////////
//                   get current time on tweets                          //
///////////////////////////////////////////////////////////////////////////


const updateTimers = () => {
  $(".main").each(function() {
    const $getIndex = _.last($(this).attr('class').split(' '));
    let msPassed = streams.home[$getIndex].created_at - moment();
    let friendlyTimer = moment.duration(msPassed, "milliseconds").humanize(true);
    $(this).children($(".friendly-tag")).text(`Borked ${friendlyTimer}`)
  });
  setTimeout(updateTimers, 3000);
}
updateTimers();

// (function newTime() {

//   setInterval(function() {
//     streams.home.forEach((user) => {
//       // $tweet.dataset.date
//       // $tweet.dataset.date = moment(user.created_at, 'ddd mmm dd yyyy HH:MM:ss').fromNow(true);

//     });
//   }, 2000);
// })();


// setInterval(function() {
//   $tweet.each(function() {
//     let newTime = this.dataset.date;
//     newTime = moment().diff(newTime)
//     $(this).find('.tweet-date').text(newTime);
//   })  
  
// }, 2000);

////////////////////////////////////////////////////////////////////////////
//                   generate random tweets with click                    //
///////////////////////////////////////////////////////////////////////////


$('#get-new-tweet').on('click', function() {    
  getTweets();
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

  $homeBtn.on('click', function() {
    $filteredTweets.show();
    $homeBtn.hide();
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






// on click run the fucntion to get input values that will add the 
// new user and the tweet to the streams.users object
  $('#twit-it').on('click', function() {
    const username = $(this).siblings('input').val();
    const newTweet = $('#twit').val();

    streams.users[username] = [];
    streamss.users
    // addTweet(newTweet)

    return false;
  })

  // function getInputValue() {
  //   const username = document.getElementById('user-name').value;
  //   streams.users[newUser] = [newTweet];
  // }



/////////////////////////////////////////////////////////////////////
//                     update time                                //
////////////////////////////////////////////////////////////////////


// function updateTime() {
//   streams.home.forEach(function(user) {
//     let curTime = moment(users.created_at).format('HH:mm:ss a');
//     ($mainDiv).html('current tweet' + curTime)
//   })
// }

// updateTime();
// setInterval(function() {
//   updateTime();
// }, 1000)
  
    // setTimeout(function (){
    //   $(document.createElement('a'))
    //     .addClass('get-more')
    //     .attr('href', '#')
    //     .text('2 new tweets')
    //     .prependTo('#tweets');
  
  
    // }, 1000);
  
   

});
