eightBallReply = () => {
    answers = [
        'It is certain',
        'Ask again later',
        'Most likely',
        'Better not to tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Do not count on it',
        'My reply is no',
        'My sources say no',
        'Signs point to yes',
        'Very doubtful',
        'Without a doubt',
        'Yes, definitely',
        'Yes',
        'Never',
        'My sources say yes',
    ]
    reply = answers[Math.floor(Math.random() * answers.length)]
    document.getElementById('pushreply').innerHTML = reply
}
