---
author: "Adam Davis"
date: 2015-03-30
description: "We solved a problem with tasks running on a service by outsourcing the process to a queue"
keywords: "node.js worker queues agenda"
title: "Worker Queues in node.js apps with Agenda"
published: false
---

# running tasks on our node.js service without killing it

I was called in to help fix a node.js web service for a mobile game that was getting reports of crashes, poor performance and data loss. 

A key element in the gameplay (and monetisation of the game) was a points mechanism where players could play the game until points were depleted, and either pay to top-up and continue playing, or wait a few hours and the points would be restored over time. The player would receive a push notification and would be drawn back into the game.  

I discovered the function that was restoring points to those players that needed them was being triggered with *every request to the service*. To make things worse, it  was checking the *entire players database collection* every time. With hundreds of thousands of players registered and playing this was what was bringing the service down. 

The primary fix was to introduce a worker queue to process the points restoration in a separate thread to the requests. I used [Agenda](https://github.com/rschmukler/agenda) for scheduling and queues, and set up a schedule to with workers to run tasks once a minute. 

I could then be more efficient in the tasks being queued: instead of querying the entire collection of players every time, I could add more atomic tasks to the queue. These only checked the points of a single player, and could be processed faster - and not affect the service. 

Worker Queues are an essential pattern in node.js - they allow 


 
