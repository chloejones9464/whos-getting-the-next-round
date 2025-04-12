## Table Of Contents:
1. [Design & Planning](#design-&-planning)
    * [User Stories](#user-stories)
    * [Wireframes](#wireframes)
    * [Typography](#typography)
    * [Colour Scheme](#colour-scheme)

    
2. [Features](#features)
    * [Navigation](#Navigation)
    * [Footer](#Footer)
    * [Home page](#Home-page)
    * [Other features](#Other-features)

3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
5. [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credits](#credits)

## Design & Planning:

### User Stories

#### HTML/CSS User Stories
* As a player, I want a main menu that is has a clear structure so that I will be able to navigate the page with ease.
* As a player, I would like to have instruction to the game so that I understand how the game works.
* As a player, I would like to have the game page to be easy to look at so that I won't have trouble playing the game.
* As a player, I want to have a choice of a number games to play so that I can pick one that's best for me.
* As a player, I would like to see the end result of the game so that I can see if I've won I can CELEBRATE or if I've lost, I'll drown my sorrows.
* As a player, I would like a close button on the main menu so that i can choose to close the game quickly and simply.

#### JavaScript User Stories
* As a player, I want each hand in the game to show react when I haver over them so that I know I have to click on then to play the game.

Given that the player is on the game page, when the player haver's over the buttons, then the buttons(when hovered over) will change in size and return when the player leave the button



### Wireframes
Please follow this link to the Wireframes.

Click [here](wireframes.md) and it'll take you straight there!
### Typography
I used Google fonts' "Caveat Brush" for the one and only font for this game. It's a playful and fun font that fits well with a game that is casually played where-ever, whenever and in any decision making process!
### Colour Scheme

#### ColorSpace and Eye Dropper
I used the eye dropper on the image in the background of the front screen and passed the color I'd like to create a palette from, through to ColorSpace.
I then scrolled thorugh to find the best palette for my project. In this case it was "Matching Gradient".

#### Eye dropper tool in Chrome's extension
![Eye dropper tool, extention in Chrome](assets/documentation/eye-dropper.webp)

#### ColorSpace color palette, I used the "Matching Gradient" palette
![ColorSpace color palette](assets/documentation/colorspace-pallett-pick.webp)

## Features:
Explain your features on the website,(navigation, pages, links, forms.....)
### Navigation
### Footer
### Other features
## Technologies Used
For my project I used; 
* HTML and CSS for the structure of the project.
* Bootstrap helped create a different effect for my buttons. I made sure to put my own spin by changing the color, font and added a border-bottom/right style to create a 3D effect.
* Github is used to store and build my project, the BEST!
* I used Google fonts for a more playful font that'll pair well with my concept (laid-back pub vibe).
* JavaScript
## Testing
Important part of your README!!!
### Google's Lighthouse Performance
Follow this [link](lighthouse.md) to view the Google Lighthouse Performance on mobiles and desktops!
### Browser Compatibility
Check compatability with different browsers
### Responsiveness
Screenshots of the responsivness, pick few devices (from 320px top 1200px)
### Code Validation
This [link](validation.md) will take you to the screentshot of the validation checks I'd run for all my pages.
There were a few minor errors that popped up but was mainly the duplicate of ids and the background image in the body tag.
### Manual Testing user stories or/and features
Test all your user stories, you an create table 
User Story |  Test | Pass
--- | --- | :---:
As a player, I want a main menu that is has a clear structure so that I will be able to navigate the page with ease. | The user will see the main page with good contrasting colors, easy navigation to play the game, choosing the number of turns they'd like to take and the rules that will pop out in a modal with clear, funny and informative detail of the game. 
The user is able to click on the play game button to display the game page, click on the number of turns button to adjust how many games they'd like to play, click the rules button to display the rules modal and enter their name in the input above the buttons| &check;
--- | --- | :---:
As a player, I want to have a choice of a number games to play so that I can pick one that's best for me. | There is a clear button on the home page for the user to choose the 'best of' number of turns until they win. This is in place to give the user the element of control and for them to decide what works for them. They will be able to change the number of turn before the game end with the winner reaching the number chosen by the user. | &check;
--- | --- | :---:
As a player, I would like to have instruction to the game so that I understand how the game works.| The instructions/rules button is placed at the bottom of the main menu and is clearly labelled should the user need to give it a read. Once the button is clicked, a modal pops up over the page to show the rules of the game. This is also available on the game page if the player need a refresh of the rules. | &check;
--- | --- | :---:
As a player, I would like to have the game page to be easy to look at so that I won't have trouble playing the game. | From the main menu, once clicking on the play game button, it will take you to the game page. This is displayed by changing the content of the divs on the main page, making the page's loading time a lot quicker! The player is able to start the game immediately. Once the player clickes on their choice the computer's choice will display the same time, giving an instant result. There is a scoreboard above the game area, displaying all scores from the player, computer and the draw score. The main menu and rules button is place at the to right if the screen and is visable on small and larger devices throughout the time on that page.| &check;
--- | --- | :---:
As a player, I would like to see the end result of the game so that I can see if I've won I can CELEBRATE or if I've lost, I'll drown my sorrows. | what is visible to the user and what action they should perform | &check;
- and attach screenshot



## Bugs

### Getting the background image to fit the whole screen
I applied the background image to the HTML page as I'm going to change it when the 'Play game' button is clicked. I then tried working out how to position the image center and so there there wasn't any gaps at the bottom of the page. To do this I applied the following code: **background-position: center center** & **background-attachment: fixed**. This helped position the image in the center of the screen and the attachment is set to fix so that the image stays where it is.

### Google Fonts
After completing my first project and learning about JavaScript, I'd let my knowledge slip a little on how to import the fonts I'd like from Google Fonts and pop them into my project.
I'd placed the import line of code in the CSS stylesheet as usual but I'd also copied and pasted the link to put into the head of the HTML page. After realizing what I'd done. I deleted the link in the HTML and kept import in the CSS stylesheet. I'd then noticed that the the font-family was placed in the HTML element on the stylesheet. I placed that style in the body element instead. The font worked perfect after that, thank god!

### Git conflict
I received an error displaying;
To https://github.com/chloejones9464/whos-getting-the-next-round.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/chloejones9464/whos-getting-the-next-round.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

I copied this error into Google and GitHub Docs came to my rescue.
I had to pull my repo using this code; *git pull origin YOUR_BRANCH_NAME*, which pulled up another error.

Second error showing this;
$ : The term '$' is not recognized as the name of a cmdlet, function, script file, or 
operable program. Check the spelling of the name, or if a path was included, verify that    
the path is correct and try again.
At line:1 char:1
+ $ git pull origin main
+ ~
    + CategoryInfo          : ObjectNotFound: ($:String) [], CommandNotFoundException       
    + FullyQualifiedErrorId : CommandNotFoundException

Silly me for leaving the $ symbol in the code!
Removed the code and then, lo and behold, another error!!

Third error showed; 
From https://github.com/chloejones9464/whos-getting-the-next-round
 * branch            main       -> FETCH_HEAD
Auto-merging winner.html
CONFLICT (content): Merge conflict in winner.html
Automatic merge failed; fix conflicts and then commit the result.

I then fixed the conflict in the winner page and successfully manages to push my updates.
That was stressful...


### #mainMenu issue
I was working on the pages Winner and Loser ready to move onto my JavaScript element of the project when I flicked over to the home page to find that the background and styles were all over the shop!
I looked for the problem and found that the #mainMenu was used on the home page and for the button to take you back there on the Winner and Loser pages. To fix the issue, I created a class for the button with the styles in it and Voila! Back to normal.

### Validator for HTML pages
The validator pulled up the background image I'd placed in the body tag.
I corrected this by putting the styling in the style.css sheet, but I came across an issue. there was no background image!!
I searched online and used the help from Stack Overflow, I took the "" out of the path to the image. Still no image! I then removed assets and replaced with .. and re-added the "" to the path.....BOOM, image!
I went on to change this on the game, winner, loser and draw pages.

### Event listeners!!
I couldn't, for the life of me, think how to connect the event listeners to the game page. So I reached out to my fab mentor Matt for a little guidance. He'd explained in detail about why we need to call the event listener function in the playGame() function.
Matt also helped debug a function that was in my code during our call.
The code wasn't registering the computerChoice function because I was comparing playerChoice and copmuterChoice when the computer was declated a variable with the value of computerChoice. This was changed, tested and all worked perfectly.

### Changing the HTML to the winner/loser/draw pages content
I was working on getting the content to show for when a player/computer wins or whether there was a draw. I'd managed to get this working but then had an error pop up in the console; 
"Uncaught TypeError
playerWinnPage
playerWin
roundResults
displayResults
playerHasChosen
HTMLDivElement

I had to change the ids on the play again buttong and menu button. This corrected the issue as they had the same id and clashed.


### Close game function
I had a close game function in my code at the very beginning of my project but then researched that I'm unable to close the window through the function.
This is becaosue the function can only work if the game was opened via JavaScript. With this in mind, I decided to remove the code from the game.

### btn class from Bootstrap
The button, when hovered over, was showing the classic Bootstrap blue background and white text. This was an issue as this did not tie into my color scheme and would look out of place.
I did a little research and found from Quora that I was able to alter the button hover state and place an important at the end of each style, this ensured that the Boostrap styling is overwritten.

### Dodgy commit
I'd spend days trying to work out the JavaScript for the first element of the game and after working at it for quite some time, I forgot to commit in-between my development! I went on to delete the code and add it back in bit by bit and commit each time so that the commit is much smaller and traceable.

### Grabbing the username
I found this part of the project quite difficult. I wanted to use the user name in the paragraphs I'd made for when the player wins, loses or has a draw with the computer. I tried everything from websites to ChatGPT!
In the end, I combined the both to get the outcome I desired.
I created a function that I would call at the loading of the front page then I called it again when returning to the main menu page.
It's safe to say I deserved my Gin and takeaway that night!

## Deployment

#### Creating Repository on GitHub
- First make sure you are signed into [Github](https://github.com/) and go to the code institutes template, which can be found [here](https://github.com/Code-Institute-Org/gitpod-full-template).
- Then click on **use this template** and select **Create a new repository** from the drop-down. Enter the name for the repository and click **Create repository from template**.
- Once the repository was created, I clicked the green **gitpod** button to create a workspace in gitpod so that I could write the code for the site.
#### Deloying on Github
The site was deployed to Github Pages using the following method:
- Go to the Github repository.
- Navigate to the 'settings' tab.
- Using the 'select branch' dropdown menu, choose 'main'.
- Click 'save'.

## Credits
List of used resources for your website (text, images, snippets of code, projects....)
I used ChatGPT and Microsoft Copilot to help create unique imaged for my project's background.
GitHub Docs
W3Schools
Bootstrap
Google
Flaticon - Rock, Paper, Scissor hands
ColorSpace
Pixelied - PNG - WEBP
Google Fonts
Favicon
Geekforgeeks - Helped me with my range slider development.
Pixabay.com - I had the sound effects from this website for my game.
dhwise.com - Helped hugely with my 404 error page set up!!

  - Code & Text Content
  
  - Media
  
  - Acknowledgment
    - acknowledgment to mentors, peers, tutors, friends, family, facilitator (who ever contributed and helped with the project)