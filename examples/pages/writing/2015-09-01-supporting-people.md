---
title: "Supporting People"
layout: post
ignore: true
created: 2015-09-01
---
In 2011 Microsoft asked their customers to stop using IE6. Which, for the uninformed, is the sixth version of a web browser they created all by themselves. They built it, presumably, so that people could do stuff on the world wide web. This, is a marvelous thing! It lets people read text, look at cat gifs, watch videos, fill out text inputs, select radio buttons, and submit forms. Basically all the same stuff we use the internet for now.

In 2015, enterprise software companies are still signing contracts to ensure that their software will support various versions of IE that Microsoft may or may not support themselves. These deals are signed because a company decides that upgrading their OS / browser version is more costly than keeping things as they currently are. Maybe they have some custom software that relies on a particular browser version. That software might run their business, solve their current problems, and would be costly to upgrade.

I have been paid, to sit in meetings, just so I can participate in conversations debating which browsers we will or will not support. These meetings never fail to seem silly at best.

There are a few assumptions about the benefits of restricting the amount of devices, browsers, and platforms to support when you are designing, developing, and maintaining software:

1.  By limiting how many contexts you are building and designing for, you can build more features with greater speed. This seems good.
2.  By targeting the most widely used browsers and devices you will make the most amount money with the least amount of effort. This also seems good.
3.  You can build cooler/better/awesomer things if you don't have to support old technology. This seems absolutely fabulous.
4.  1% of people isn't enough to worry about. This seems horrible if you happen to be in that 1%.

Let's pause for a second. This might be where you want to chime in about "evergreen" browsers. They just update themselves to the latest version so the problem is solved! We don't have legacy browsers to support anymore! They will automatically disappear! Yet, I have three evergreen browsers installed on my computer. And there are apps that I am required to use for my job that only work on one of those three browsers. Evergreen browsers have not solved this fundamental problem of making a business decision centered around choosing which browsers to support when building new features for your web app. Most likely, browsers themselves won't solve this problem any time soon. Historical data suggests that as time goes on, there will be more and more browsers. And more and more devices to run all of these browsers on. Which means that there will be an increasing amount of contextual differences to account for.

Hooray.

It doesn't matter what your stance on browser support is. Whether you want to think about it or not, the truth is, your decision affects people that are trying to use your product.

Can you think of a time when you needed technology to solve a problem for you. In a timely manner. And you just wanted stuff to work. But it didn't. Because of decisions other people made. Decisions that were out of your control as a user.

Was it frustrating? Did you just assume you had an inferior browser and device and the software problem was your fault? Was knowing that the company saved design and development time and chose to support a limited majority comforting? Would you wish these feelings upon anyone else?

This when I ask you to pause and reflect: Why did you start building technology in the first place? Was it to construct a sick portfolio to show off at dinner parties? Was it to build fancy animations? Was it so you could save yourself time and frustration at the expense of others time and frustration?

Maybe you don't care about people's time or their feelings. Maybe you just care about money. And active users. I get that. You're running a business afterall. You have to make tough business decisions so you can make the big business bucks. So you prepare for a meeting to talk about which browsers your company will support. You look at your current google analytics. You notice there are a few browsers that make up around ~1% of your traffic. 1% sounds low.

This is an easy trap to fall into. But there are a few things to consider. Browser metrics are self-fulfilling prophecies. If your website doesn't work on IE, you aren't going to get a lot of repeat IE users. Analytics data rewards what you support and penalizes what you don't. This will allow your developers and designers to justify that their current methods with analytics that show - there are browsers that don't matter. And they don't want to spend time supporting them.

The second thing to consider is how percentages work. 1% sounds small. .5% sounds so small you shouldn't even think about thinking about it. But if you run a business and care about how many people are using your product these are not small numbers. As of 2015 there are more than 7 billion people on Earth. Now, not all of these people have access to the internet. But 1% of 1 billion is 10 million people. It doesn't matter what size your company is. 10 million potential users is a lot. While internet usage is rapidly increasing - only ~40% of the population currently has access. So out of 2.8 billion people if 1% are using an unsupported browser - you are chopping 28 million potential users off the block before you get started.

This could, potentially, be bad for your bottom line.

I should give the disclaimer that not every website I build works on every browser and every device 100% bugfree with 0 errors. It's a difficult thing to do! But it's the standard I hold myself to. Because I'm interested in difficult tasks. I won't bend on my mission to make the web as open and useful for as many people as possible. And even if you are willing to compromise this standard, rest assured I'll still love you. But try to not forget about all the people sitting on the other side of the screen.
