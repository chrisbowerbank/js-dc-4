# Assignment
- Read the Express docs page on using Middleware: [here](http://expressjs.com/en/guide/using-middleware.html)
- Read the `Overview` and `Authentication` sections of the [passport documentation](http://passportjs.org/docs)
- Still all like _wtf is auth_ or _auth - can't even_? I hear you. Check [this out](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4) it may help with how to even auth.

_Come prepared to implement one of the strategy options as a warm up for next class!_

# Final Project
Submit your idea for your final project! Remember to check out https://gallery.generalassemb.ly/ for ideas and to look at the `readme` file in the `final-project` directory!

Submit your idea by making a pull request answering the following questions (copy and paste them).



1. Describe your idea, it's main features and core functionality.

I am creating a living Premier League table that shows the standings of all 20 clubs including their wins, losses, draw, goals scored, goals conceded, goal differential (goals scored minus goals conceded), upcoming fixtures and more! As scores and results advance or are updated, the table will automatically update.

The table will allow visitors to select one club as their favorite club. Once a club is selected as their favorite club, that club will be highlighted in the table upon returning to the site.

I'd also like to have table rows expand upon clicking the table. The expansive area will feature recent form (results) of the team in that row, upcoming matches, and additional information like links to their club website, etc.

Here's a link to my repository: https://github.com/chrisbowerbank/premierleague-table 



2. What libraries or packages do you think you'll use?

I will be using the following packages: express, express-handlebars, mongoose, body-parser, nodemon, cookie-parser and passport?! However, I may be using some other packages to help style and customize my table (still researching). For now I'm only using one handlebar view but I will make this project more complex by making the single view interactive in many ways!




3. What data will your final project use?

In terms of data, I've found API that hosts table information that's updated regularly here: http://api.football-data.org/v1/competitions/426/leagueTable. I will pull specific elements from this list
