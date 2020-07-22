
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>')
      .attr('class', 'twiddle');
    const $user = $('<p></p>')
      .attr('class', 'user');
    const $message = $('<p></p>')
      .attr('class', 'message');

    let fromNow = moment().startOf(tweet.created_at).fromNow();
    const user = tweet.user;
    const text = `@${tweet.user}: ${tweet.message} at ${fromNow}`;

    $tweet.appendTo($mainDiv);
    $user.addClass(tweet.user)
      .attr('data-user', tweet.user).text;

    (`@ ${tweet.user} `)
      .appendTo($tweet);

    $message.text(tweet.message)
      .appendTo($tweet);

    $dateTime.attr('time', moment().startOf(tweet.created_at).fromNow())
      .appendTo($tweet);
      
    $tweet.text(text)
    return $tweet;
  });
