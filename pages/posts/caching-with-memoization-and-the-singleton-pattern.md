---
title: Caching with Memoization and the Singleton Pattern
description: Can you use a Singleton to cache expensive operations?
date: 2022-12-03
tag: notes
---
[Reading this article on memorization](https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/) which is the *best* explanation I've come across.

So it's caching using a function or object to store expensive computations in memory.

I think we could use a [Singleton](https://patterns.dev/posts/singleton-pattern/) for this right?

## UPDATED

After doing further research, a [Singleton might not be the best pattern](https://stackoverflow.com/questions/47909473/what-is-memoization-exactly/47934609#47934609) to use for Memoizing a function.

Also, a really great look at [memoization and its performance metrics](https://addyosmani.com/blog/faster-javascript-memoization/) by Addy Osmani.