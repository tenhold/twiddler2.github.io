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




////////////////////////////////////////////////////////////////////////////
//                    first to fill the page                             //
///////////////////////////////////////////////////////////////////////////


// let twitCount = 0;

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
      .attr('href', '#')
      .text(`@${tweet.user}`)
    const $message = $(document.createElement('div'))
      .addClass('message')
      .text(tweet.message);
    const $time = $(document.createElement('div'))
      .addClass('time')
      .text(time)
    $tweet.append($user, $message, $time);
    $tweet.insertAfter($('.main'));
    return $tweet;
  });
  twitCount = streams.home.length;
  return $tweets
};



////////////////////////////////////////////////////////////////////////////
//                   pop-up to filter each user                          //
///////////////////////////////////////////////////////////////////////////

console.log(streams.users.mracus);

  $('.main').on('click', '#user', function() {
    const name = $(this).data('user');
    console.log(name)
    console.log(streams.users[name])
    
    return false;
  })

  


    // streams.home.filter((user) => {
    //   const name = $(this).data('user');
    //   console.log($('#user  '))
    //   if (name === $('#user')) {
    //     $('#user').show();
    //     console.log(this)

    //   }
    // })
  // })



////////////////////////////////////////////////////////////////////////////
//                generate random tweets from time                        //
////////////////////////////////////////////////////////////////////////////
  

    // setInterval(function() {
    //   const lastTweet = streams.home[streams.home.length - 1];
    //   const $newTweet = $(document.createElement('div'))
    //     .addClass('tweet')
    //     .prependTo($('.new-tweet'))
  
    //   const $user = $(document.createElement('a'))
    //     .attr('class', 'user')
    //     .attr('href', '#')
    //     .text(`@${lastTweet.user}`);
  
    //   const $message = $(document.createElement('div'))
    //     .attr('class', 'message')
    //     .text(lastTweet.message);
      
    //   const $time = $(document.createElement('div'))
    //     .attr('class', 'time')
    //     .addClass('time')
    //     .text(`${moment(lastTweet.created_at).fromNow()} on ${moment(lastTweet.created_at, 'YY-MM-DD hh:mm:ss a').format('LLL')}`)
  
    //     $newTweet.append($user, $message, $time)
  
    // }, Math.random() * 30000)();

  
////////////////////////////////////////////////////////////////////////////
//                   generate random tweets with click                    //
///////////////////////////////////////////////////////////////////////////

  $('#get-new-tweet').on('click', function() {     
    getTweets();
  })


  // $('#get-new-tweet').on('click', function() {
  //   if (streams.home.length > twitCount) {
  //     console.log($tweets)
  //   }
  // })



/////////////////////////////////////////////////////////////////////
//                     add a tweet                                //
////////////////////////////////////////////////////////////////////


  // $('#twid').on('click', function() {
  //     console.log($(this))
  //   let tweetInput = $(this).siblings('input');
  //   tweet = tweetInput.val()
  //   if (tweet.length) {
  //     tweetHtml = makeTweet({
  //       userId: 4,
  //       userName: 'Jon Tenholder',
  //       tweet: tweet
  //     })
  //   }

  //   tweetInput.val('')
    

  //   return false;
  // })







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























// $(document).ready(() => {
//   // const $body = $('body');
//   // $body.html('');


// ///////////          Creating a main list in the body           ///////////


// // put the tweets in a div 
  

//   const $mainDiv = $('<div></div>')
//     .attr('class', 'main')
//     .attr('id', 'main')
//     .appendTo($('#top'));
  



// ///////////           Populating the last with twidders         ///////////
  
// console.log('streams', streams)
// console.log('home', streams.home)

// const $tweets = streams.home.map((tweet) => {
//     const $tweet = $('<div></div>')
//       .attr('class', 'tweet')
//       .addClass('tweet');
//     const $user = $('<a>')
//       .attr('class', 'user')
//       .append(tweet.user);
//     const $message = $('<p></p>')
//       .attr('class', 'message')
//       .append(tweet.message);
    

//     let fromNow = moment().startOf(tweet.created_at).fromNow();
 
//     const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

//     $mainDiv.append($tweet)

//     $tweet.append($user, $message);
//     $tweet.text(text)
//     return $tweet;
//   });

//   $mainDiv.append($tweets);

//   console.log($tweets)


//   // const $tweets = streams.home.map((tweet) => {
//   //   const $tweet = $('<div></div>')
//   //     .attr('class', 'tweet')
//   //     .addClass('tweet');
//   //   const $user = $('<a>')
//   //     .attr('class', 'user')
//   //     .append(tweet.user);
//   //   const $message = $('<p></p>')
//   //     .attr('class', 'message')
//   //     .append(tweet.message);

//   //   let fromNow = moment().startOf(tweet.created_at).fromNow();
 
//   //   const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

//   //   $mainDiv.append($tweet)

//   //   $tweet.append($user, $message);
//   //   $tweet.text(text)
//   //   return $tweet;
//   // });

//   // $mainDiv.append($tweets);


//   ///////////        Add to list                             ///////////



//         // Continually run to update count of new, not displayed, tweets
//         (function updateTweetCount(){
//           if(streams.home.offset > 0){
//             var newTweetsCount = 0;
//             if(location.hash && location.hash.substr(1) !== 'timeline'){
//               var user = location.hash.substr(1);
//               newTweetsCount = streams.users[user].length - 
//                 $('.tweet').filter('[data-user="' + user + '"]').length;
//             }else{
//               newTweetsCount = streams.home.length - streams.home.offset;
//             }
//             if(newTweetsCount > 0){
//               $('#newtweets-count').text(newTweetsCount);
//               $('#timeline-newtweets').slideDown(300);
//             }
//           }
//           setTimeout(updateTweetCount, 5000);
//         })();

//   // $('text').keyup(function(e) {
//   //   let code = e.which;
//   //   if (code === 13) {
//   //     e.preventDefault();
//   //     $twiddleList.append(`<li> ${e.target.value}</li>`)
//   //   }
//   // })



//   // const inpTwid = document.getElementById($('#text'));

//   // const btn = document.getElementById($('#submit'));






  







// });




// //   const $tweets = streams.home.map((tweet) => {
// //     const $tweet = $('<div></div>');
// //     const text = `@${tweet.user}: ${tweet.message}`;

// //     $tweet.text(text);
// //     // console.log('users', users);
// //     // console.log('streams', streams.home);
// //     // console.log('home', streams.home);
// //     return $tweet;
// //   });
// //   $body.append($tweets);

// // });
