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
      .text(time)
    $tweet.append($user, $message, $time);
    $tweet.prependTo($('.main'));
    return $tweet;
  });
  twitCount = streams.home.length;
  return $tweets
};

const $tweet = $('.tweet');


////////////////////////////////////////////////////////////////////////////
//                   get current time on tweets                          //
///////////////////////////////////////////////////////////////////////////


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
  // const $clickedName = $(this)[0].dataset.user;
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
    return false;
  })
  
  return false;
});




//   // getting the array of the tweets of the clicked name
//   const arrOfClickedName = streams.users[$clickedName]

//   console.log(arrOfClickedName)
//   arrOfClickedName.forEach(function(tweet) {

//   })  
 


//   let user = $(this).closest('.tweet').data('user');
//   // $('.main').hide();
//   // filterTweets(user);
//   return false;
// });


  // var userIndex = streams.users[curUser].length - 1;
  // while (userIndex >= 0) {
  //   var userTweet = streams.users[curUser][userIndex];
  //   var $main = $('<section class="main"></section>');
  //   $main.appendTo($body)
  //   var $tweet = $('<div class="tweet"></div>');
  //   $tweet.text(userTweet.message);
  //   $tweet.appendTo($main);
  //   var $timestamp = $('<div class="timestamp"></div>');
  //   $timestamp.text(userTweet.created_at);
  //   $timestamp.appendTo($main);
  //   var $user = $('<a class="user" data-value="' + userTweet.user + '"></a>');
  //   $user.text('@' + userTweet.user + ': ');
  //   $user.prependTo($main);
  //   userIndex -= 1;
  //   }
  // });











//****************************************************************//
//****************************************************************//
//****************************************************************//

// // get modal element

// const modal = document.getElementById('simpleModal');

// // get open modal button

// // const modalBtn = document.getElementById('modalBtn');

// const modalBtn = document.getElementsByClassName('user');


// // close btn

// const closeBtn = document.getElementsByClassName('closeBtn')[0];

// // listen for click

// for (let i = 0; i < modalBtn.length; i++) {
//   modalBtn[i].addEventListener('click', function() {
//     const $clickedName = $(this)[0].dataset.user;
//     console.log($clickedName)

//     $(this).css('color', 'red')

//     // $('.modal').dialog('option',)
    
    
    
//     modal.style.display = 'block';
//   });
// }

// // listen for close click

// closeBtn.addEventListener('click', closeModal);

// // listen for outside click

// window.addEventListener('click', clickOutside);

// // function to open modal

// function openModal() {
//   modal.style.display = 'block';
// }

// // function to close modal

// function closeModal() {
//   modal.style.display = 'none';
// }

// // function to close modal

// function clickOutside(e) {
//   if(e.target === modal) {
//     modal.style.display = 'none';
//   }
// }

//****************************************************************//
//****************************************************************//
//****************************************************************//




  // const openModalButtons = document.querySelectorAll('[data-modal-target]')

  // const openModalButtons = document.getElementsByClassName('user')
  // const closeModalButtons = document.querySelectorAll('[data-close-button]')
  // const overlay = document.getElementById('overlay');

  // openModalButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const modal = document.querySelector(button.dataset.modalTarget)
  //     openModal(modal)
  //   })
  // })


  // closeModalButtons.forEach(button => { 
  //   button.addEventListener('click', () => {
  //     const modal = button.closest('.modal');
  //     closeModal(modal)
  //   })
  // })

  // function openModal(modal) {
  //   if(modal === null) return;
  //   modal.classList.add('active')
  //   overlay.classList.add('active')
  // }


  // function closeModal(modal) {
  //   if(modal === null) return
  //   modal.classList.remove('active')
  //   overlay.classList.remove('active')
  // }



  // function filterUsers(user) {
  //   if (user === 'main') {
  //     $('.tweet').show();
  //   } else {
  //     $('.tweet').hide();
  //     $('.tweet').filter(`[data-user="${user}"]`).show();
  //   }
  //   $('')
  // }

  // $('#to-home').on('click', function() {
  //   $('.main').hide();
  //   displayTweets();
  // })

  // $('.tweet').on('click', '.user', function() {
  //   const name = $(this).data('user');
  //   $('.main').hide();
  //   filterUsers(name)
  // })




  // $('.tweet').on('click', '.user', function() {
  //   // let popup = $(document.getElementById('popup'));
  //   // popup.toggle('show');
  //   const name = $(this).data('user');
  //   console.log(streams.users)
  //   for (let key in streams.users) {
  //     if (name !== streams.users[key]) {
  //       console.log(streams.users[key])
  //     }
  //   }
    
  //   return false;
  // })

  


////////////////////////////////////////////////////////////////////////////
//                generate random tweets from time                        //
////////////////////////////////////////////////////////////////////////////
  





/////////////////////////////////////////////////////////////////////
//                     add a tweet                                //
////////////////////////////////////////////////////////////////////


  $('#twit-it').on('click', function() {
      console.log($(this))
    // let tweetInput = $(this).siblings('input');
    // tweet = tweetInput.val()
    // if (tweet.length) {
    //   tweetHtml = makeTweet({
    //     userId: 4,
    //     userName: 'Jon Tenholder',
    //     tweet: tweet
    //   })
    // }

    // tweetInput.val('')
    

    return false;
  })





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
