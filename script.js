document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "(Lie To Me - Black Atlass)": '"You are an angel, from the highest."',
      "(Heartbeat - Ghostly Kisses)": '"You are my only one. Moon and sun."',
      "(Heaven, Wait - Ghostly Kisses)": '"In every way you are in my heart. You make me feel like we were never apart. Never apart."',
      "(Blackbirds - Ghostly Kisses)": '"I would feel alive by your side."',
      "(A Different Kind of Love - Ghostly Kisses)": '"I have known a different kind of love. The kind that makes you whole."',
      "(Clay - Ghostly Kisses)": '"I wish I could bring you back now. And mold you from clay all for you."',
      "(Carry Me - Ghostly Kisses)": '"My love. No games. I miss you everyday."',
      "(Happy Together - Floor Cry)": '"The only one for me is you, and you for me."',
      "(Green Book - Ghostly Kisses)": '"Angel eyes are only meant to smile."',
      "(Your Heart is Gold - Ghostly Kisses)": '"Under the stars I want to be with you. Hold me tight like we used to."',
      "(Your Heart is Gold - Ghostly Kisses)": '"And though your heart is gold."',
      "(Don't Let Me Go - Cigarettes After Sex)": '"Do not let me go. Stay with me still. I have missed you so."',
      "(Heavenly - Cigarettes After Sex)": '"I am giving you all my, giving you all my, giving you all my love."',
      "(You're the Only Good Thing In My Life - Cigarettes After Sex)": '"You are the only good thing in my life."',
      "(Touch - Cigarettes After Sex)": '"Missing you only ever since we fell in love."',
      "(Falling In Love - Cigarettes After Sex)": '"I feel I am falling in love with all my heart."',
      "(K. - Cigarettes After Sex)": '"And I am kissing you lying in my room. Holding you until you fall asleep."',
      "(K. - Cigarettes After Sex)": '"Stay with me. I do not want you to leave..."',
      "(Sunsetz - Cigarettes After Sex)": '"Sunsets. I wanna hear your voice. A love that nobody could destroy."',
      "(Apocalypse - Cigarettes After Sex)": '"Your lips, my lips. Apocalypse."',
      "(Apocalypse - Cigarettes After Sex)": '"When you are all alone. I will reach for you. When you are feeling low. I will be there too."',
      "(Sweet - Cigarettes After Sex)": '"And I will gladly break it. I will gladly break my heart for you..."',
      "(Opera House - Cigarettes After Sex)": '"I have got a love for you, I just can not escape."',
      "(Opera House - Cigarettes After Sex)": '"I was meant to love you and always keep you in my life."',
      "(Opera House - Cigarettes After Sex)": '"I was meant to love you, I knew I loved you at first sight."',
      "(Nothing's Gonna Hurt You Baby - Cigarettes After Sex)": '"Nothing is gonna hurt you baby. As long as you are with me you will be just fine."',
      "(Nothing's Gonna Hurt You Baby - Cigarettes After Sex)": '"Nothing is gonna hurt you baby. Nothing is gonna take you from my side."',
      "(I'm a Firefighter - Cigarettes After Sex)": '"I need you here, I need your love. I need your love inside of mine, like I could die."',
      "(Dreaming of You - Cigarettes After Sex)": '"Want you all the time. And now I am dreaming, dreaming, dreaming, dreaming, dreaming of you."',
      "(Starry Eyes - Cigarettes After Sex)": '"When I am alone I hear and feel you. Wish that I could reach right out and touch you."',
      "(Affection - Cigarettes After Sex)": '"I think of you, I want you too, I would fall for you. It is affection always..."',
      "(Keep on Loving You - Cigarettes After Sex)": '"When I said that I love you I meant that I love you forever..."',
      "(Keep on Loving You - Cigarettes After Sex)": '"And I am gonna keep on loving you. Because it is the only thing I wanna do."',
      "(Keep on Loving You - Cigarettes After Sex)": '"I do not wanna sleep. I just wanna keep on loving you."',
      "(Crush - Cigarettes After Sex)": '"And now you are all I think about when I am alone. Can not wait to feel your love inside me now."',
      "(Sesame Syrup - Cigarettes After Sex)": '"I have had a long list of lovers, but none of them matter to me except you."',
      "(You're All I Want - Cigarettes After Sex)": '"There is no other love, it is only yours. You are all I want, all I love."',
      "(Pistol - Cigarettes After Sex)": '"You have been on my mind. And I will waste my time. Until you lift me off the floor and love me again."',
      "(Wish That You Were Here - Florence + The Machine)": '"You are always on my mind. Wish that you were here."',
      "(Lover, Please Stay - Nothing But Thieves)": '"My lover, please stay with me. Oh, my lover, please stay with me."',
      "(9 - Willow)": '"When I could just lay all day, with you. When I could just stay all day, with you."',
      "(All I Really Want Is You - The Marias)": '"All I really want is you. Laying in the rain with you."',
      "(All of Me - John Legend)": '"Love your curves and all your edges. All your perfect imperfections."',
      "(All of Me - John Legend)": '"Give your all to me, I will give my all to you. You are my end and my beginning."',
      "(All of Me - John Legend)": '"Cause I give you all of me. And you give me all of you."',
      "(All That Matters - dvsn)": '"You make me complete. You are all that matters to me."',
      "(All That Matters - dvsn)": '"What is a king bed without a queen?"',
      "(Alone With You - Alina Baraz)": '"When your days are long. I will be at the end of all of them."',
      "(Alone With You - Alina Baraz)": '"Alone with you. I am home with you. No matter the place."',
      "(Alone With You - Alina Baraz)": '"I have grown with you. Yet our love stays the same."',
      "(ARE YOU FEELING IT TOO? - syd B)": '"I can see it in your eyes, no, you are not alone, no."',
      "(Best Thing - Janine)": '"I want you in my life, that will not change if we are not together."',
      "(Best Thing - Janine)": '"You are the best thing, you are the best thing. That has happened to me in a while."',
      "(Best Thing - Janine)": '"Handed me the map to help me find myself. Made sure that I know I do not need no one else."',
      "(Best Thing - Janine)": '"There is not a title that can match our vibe. But whatever we call it just know you changed my life."',
      "(Best Thing - Janine)": '"You are still the best thing. My best friend, my everything."',
      "(Big Jet Plane - Angus & Julia Stone)": '"Gonna hold ya. Gonna kiss you in my arms. Gonna take ya. Away from harm."',
      "(Bouquets - Yumi Nu)": '"You know you are the best I have ever had. I know I am the best you have ever had."',
      "(call me when ur lonely - Alaina Castillo)": '"Call me when you need me that way. Call me when you want me. Anything to see your face."',
      "(Can I - Alina Baraz)": '"I bet you never even knew. I see the universe inside of you."',
      "(Can I - Alina Baraz)": '"Can I take your pain and make it go away? Would you let me be your getaway?"',
      "(Can I - Alina Baraz)": '"If I color you with all my thoughts. Would you lose your fears of being lost?"',
      "(Can't Stop - OneRepublic)": '"I said I can not stop. Thinking about, thinking about us. Anymore."',
      "(Can't Stop - OneRepublic)": '"I do not want to live without you. And put life off for another day."',
      "(Can't Take My Eyes off You - Craymer)": '"You are just too good to be true. Can not take my eyes off you."',
      "(Can't Take My Eyes off You - Craymer)": '"You would be like heaven to touch. I wanna hold you so much."',
      "(Can't Take My Eyes off You - Craymer)": '"At last long love has arrived. And I thank God, I am alive."',
      "(Can't Take My Eyes off You - Craymer)": '"Pardon the way that I stare. There is nothing else to compare."',
      "(Can't Take My Eyes off You - Craymer)": '"The sight of you leaves me weak. There are no words left to speak."',
      "(Can't Take My Eyes off You - Craymer)": '"I love you baby. And if it is quite all right. I need you baby. To warm the lonely nights."',
      "(Can't Take My Eyes off You - Craymer)": '"Oh, pretty baby. Now that I have found you stay. And let me love you, baby."',
      "(Come Here - Sabrina Claudio)": '"I want you to come here. I just need you near. No matter how, just make it here."',
      "(Come Here - Sabrina Claudio)": '"I am dying to see you. You know what I am fiending for. The only one to get to me."',
      "(Come Over - Jorja Smith)": '"I do not know what you have been through. But I worked too hard not to lose you, and you know that."',
      "(Deserve You - Justin Bieber)": '"I need you, do not let me go, need you, do not let me go."',
      "(Deserve You - Justin Bieber)": '"I need you more than I let you believe, I do. Cause you could think it might be too much."',
      "(Deserve You - Justin Bieber)": '"Oh, when we kiss I am alive, and I feel brand new. There is nothing that I want more than us."',
      "(Deserve You - Justin Bieber)": '"And now my eyes are locked on you. As you dance around the room. And finally, I am right where I belong."',
      
    };
  
    // grab all the keys in the dictionary (authors) and store in an array
    var authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  
  }