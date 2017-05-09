---
author: "Adam Davis"
date: 2016-11-30
description: "I fixed a node.js web service that had reports of crashes, poor performance and data loss."
keywords: "game,  node.js, web services, mongodb, gameplay, concurrency, scale, work queues, tasks, agenda"
title: "Fixing a node.js web service with a work queue"
published: true
---

# work queue tasks node.js service

I was called in to help fix the node.js web service for an networked mobile game. There were reports of crashes, poor performance and data loss on the server. I found the solution was to outsource tasks to a work queue.

A key element in the gameplay for this game is the points mechanism.  Players play rounds of the game until their points are depleted, and then either pay to top-up and continue playing, or cool off while their points are automatically restored over time. A push notification draws the player back into the game when all their points are restored.

I discovered the function to check and restore points was being triggered with *every request to the service*. To make things worse, it  was checking the *entire players database collection* for players that needed points. With hundreds of thousands of registered players the service was failing to respond, or complete operations.

Work queues allow us to define tasks to run outside the request-response cycle of the HTTP server. These tasks are spinoffs from the communication between client and server.  The time-based background operation for restoring points is something that should be run as a task in a work queue.

First I installed [Agenda](https://github.com/rschmukler/agenda) and set up a schedule to run tasks once a minute. Queu

Instead of writing a generic worker that checks the entire collection of registered users each time the task was run, I wrote a worker to accept a player as a parameter - and queued a task each time a player spent their points. When run, this task was a simple fast query on a single player record.

Using the work queue pattern primarily allowed me to decouple the time-based points restoration from the request-based http processes. It also allowed me to be more atomic and specific in processing the tasks.


## Further reading on Work Queues:
- [Work Queue Patterns](http://nodepatternsbooks.com/books/work-queues.html) by Pedro Teixeira.
