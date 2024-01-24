import React from 'react';
//Import Components
import Tweet from "./Tweet";


const Tweets = (props) => {
    const tweets = [
    { name: 'bdjdan', tweet: 'here I am writing react code' },
    { name: 'traversy media', tweet: 'hey guys enjoy your day' },
    { name: 'sausagedog', tweet: 'I am long' },
    ];
    return (
        <section>
            {tweets.map((tweet) => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />   
            ))}
        </section>
    );
};

export default Tweets;