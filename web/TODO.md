# TODO

## Frontend

* Keep theme the same between pages
* Fix meta for media query for mobile

## Collect and Clean Data

* Get all haikus by Basho
* Get as many more haikus in the style of and/or of comparable quality to Basho
  as possible

## Haiku Service

* Return a poem from python function
* Get poem from python function in web app
* Allow users to vote poem up/down or skip
* Bunch of DB work
  * https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-faunadb
* Automatically integrate with AI model (cron job)

## Optimizations

* Cool favicon
* Add tests once we have any non-trivial logic to test
* Some image off screen so it shows up in thumbnails
* Could prob encapsulate fade in / out based on a prop in a component and then
  extend it in layout.title and anchor
* Ability to change to another random color theme
* Maybe some cool animation on the haiku itself
* Store randoma11y themes on server to avoid having to make that slow call all
  the time
  * Update them with a daily cron job
* "dim" ideas ;-)
  * when mouse event happens onscreen change opacity slightly
  * as mouse moves closer to button increase visibility
  * have header <Title /> refresh and then fade out upon vote button click

# Notes:

## Haiku Data

http://www.tempslibres.org/tl/en/dbhk00.html

## Misc

functionally structured like randoma11y.com (but not necessarily the same look)

http://webdesignernotebook.com/examples/twinkle-twinkle.html (shows poem
styling)

https://www.poetrygenerator.ninja/poem/a1a915bf94233c75 (poem styling) (AI poem
generator)

https://github.com/fchollet/keras/blob/master/examples/lstm_text_generation.py

Generate all haikus at once on the server using the deep learning model, up to a
feasible limit of haikus (determined by faunadb pricing). Then let the voting
find which ones to keep. Every week or month or however long it takes to get
votes on a reasonable amount of the generated haikus, feed the haikus that were
voted up back into the model (not sure if you can feed in the "bad" ones to
train the model against them), then delete all but the good ones, and generate
new ones to fill up to the same feasible limit from before (like 10,000 or
something). Eventually, increase the limit. More sophisticated pruning can be
implemented in the future as an optimization.

<!-- ^^^ this is cool! ^^^ -->
