---
title: The Days of Building an API Backed Business Are Over
description: First Twitter, now Reddit. How are new devs supposed to learn?
date: 2023-06-04
tag: notes
---


From [r/Apollo on Reddit](https://www.reddit.com/r/apolloapp/comments/13ws4w3/had_a_call_with_reddit_to_discuss_pricing_bad/):

> I'll cut to the chase: 50 million requests costs $12,000, a figure far more than I ever could have imagined.

[...]

> Apollo made 7 billion requests last month, which would put it at about 1.7 million dollars per month, or 20 million US dollars per year. Even if I only kept subscription users, the average Apollo user uses 344 requests per day, which would cost $2.50 per month, which is over double what the subscription currently costs, so I'd be in the red every month.

Reddit claimed their pricing structure would be fair and based in reality:

> Reddit iterated that the price would be A) reasonable and based in reality, and B) they would not operate like Twitter.

So did they stick with their word? 

> As for the pricing, despite claims that it would be based in reality, it seems anything but.

[...]

> For Apollo, the average user uses 344 requests daily, or 10.6K monthly. With the proposed API pricing, the average user in Apollo would cost $2.50, which is is 20x higher than a generous estimate of what each users brings Reddit in revenue.

[...]

> I don't see how this pricing is anything based in reality or remotely reasonable. I hope it goes without saying that I don't have that kind of money or would even know how to charge it to a credit card.

## APIs were once the building blocks of the web

Now it is pretty foolish to build your business off an API. The reason? That data that Apollo for Reddit and Tweetbot, et al for Twitter is valuable. And seeing that Twitter went public[^1] and Reddit about to IPO, they've got to recoup the money investors pumped into those companies, who had zero profits, sacrificing profitability for growth, and the way to do that when your core product is free is to monetize your attention by getting as much data they can about you and selling it to advertisers. When you have third party apps that eschew ads for better UX, the company exposing its API publicly has no incentive to keep that API publicly available for little or no cost. It doesn't make financial sense.

## So where do we go from here?

Honestly I don't know. The fact that these companies are jacking up the prices of their APIs will kill innovation on the web and mobile which *desperately needs it*.


[^1]: And then private again.