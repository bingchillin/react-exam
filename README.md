# CECI EST LE PROJET DE MOHAMED EL FAKHARANY EN 4MOC

The purpose of this project is to create a web application inciting
users to reduce carbon emissions.

## The server

You'll need to run the server in the `server` folder:

```
cd server
npm install
npm start
```

This will start a HTTP server with the following GET routes:

- http://localhost:3000/companies
- [http://localhost:3000/company/<company_id>](http://localhost:3000/company/<company_id>)

Test out those routes! All the listed companies and non-profit work to reduce environmental footprint,
the user will be incited to use the services of some of them or to apply to work in one of those
(the criteria for including or excluding a company from this list are solely based on what the
company publicly declares; the author does not have any financial interest in any of the companies
mentioned; if you want to add/remove some company, please refer to the teacher).

You shouldn't need to edit this server. If you encounter what you believe to be a bug,
please inform the teacher for further assistance.

## The React app

Create a Typescript/React project, hosted locally on http://localhost:5173 .

It should contain multiple pages, handled with TanStack router.

The top bar of the app should look like this:

```
Eco-companies board      Travel carbon simulator
_________________________________________________
```

"Eco-companies board" is a link pointing to the home page (route `/`). This route should be a list of all the companies returned by http://localhost:3000/companies .

It should display the name and all the domains of every company. You can use a CSS border around the
every domains and write those smaller, like "badges".
The name should be a link to `/c/<company_id>` which displays all the data (name, domains, website and description).

_Note_: for this part, the `loader` feature in TanStack router might be useful!

## The carbon simulator

"Travel carbon simulator" is a link to `/travel-carbon-simulator`.

The simulator aims to illustrate the consequences of changing mode of transportation
on a recurring journey (think about comuting).

Here are the steps the users should see when using the simulator:

1. The app asks the number of travels during a year with a text input.
2. Then, the app asks what is the current mode of transportations used asking a number of kilometers for:

   - thermic car
   - electrical car
   - long distance train
   - local train
   - plane
   - walk
   - bike
   - electrical bike

   The user has a "Validate" button. Those numbers give an "initial solution".

3. The app displays the total yearly carbon emission, computed with the
   following rates:

   - thermic car: 218g/km
   - electrical car: 103g/km
   - long distance train (TER): 27g/km
   - local train (RER): 10g/km
   - plane: 259g/km
   - walk: 0g/km
   - bike: 0g/km
   - electrical bike: 11g/km

   (those rates are computed for the French electricity mix and
   come from: https://impactco2.fr/transport. Feel free to add
   other means of transportations based on this source!).

   You should multiply those rates by the corresponding distance entered
   by the user, add all those grams and multiply by the number of travels
   asked at the step 1 to have the total yearly carbon cost. Divide by
   1000 to read the result in kilograms instead of grams.

4. On the same page where you display the previous result,
   also display again the fields of the step 2 and proposing the user
   to reduce its carbon footprint for this travel.

   This time, display the result in real time and also the difference
   with the previous simultion (if the carbon foot print is greater than
   in step 3, think to add a "+" symbol to be clear this solution is worse!).

5. If the result is better than the previous one, show a "I choose this!"
   button which will send a `POST` request to `http://localhost:3000/reduce`
   with a payload of the form `{ yearlyCarbonReduction: number }` (note you'll
   receive a 400 error if the payload doesn't match the expected one).

   When the request come back, just display the previous and current
   carbon footprint, with a text saying "You decreased your
   carbon footprint by X kg/year, congrats!".

## Constraints and advices

If you perfectly implement all the features so far in the way that is described
below, you can expect a mark around 13 or 14 over 20.

I highly recomend to only implement the features above if you don't feel
comfortable with the course.

Note that implementing "bonus" features will _not_ increase your mark if
you don't correctly follow the constraints below. _Improve the quality before
the quantity!_

This project also aims to make you learn things so **please** ask me
questions during your developement process, show me intermediate steps
to get feedback.

**Constraints**

1. All the project should be in Typescript "strict mode", all function
   arguments and return type should be annotated. Escape hatches such
   as the `as` keyword or the `any` type should be avoided as much as
   possible (if you think it's impossible, ask the teacher!).
2. The only authorized librairies are: React, Zod, TanStack Router
   and ReactUseWebsocket (for the bonuses only) as seen in the course.
3. The main "Carbon footprint simulator" component should be handled with a
   `reducer`.
4. All the data from the "outside" of the app (user inputs, http requests, ...)
   should be properly validated.
5. "Make impossible states impossible" thanks typing as much as possible.
6. Keep a "single source of truth".
7. The components and reducers should strictly adhere to the React expectations
   in particular thhey must be pure!
8. The interface can be either in French or in English. The interface should be
   clear enough to be understood by anyone, without reading the present
   document.

If you're not sure if your code violates one of this constraint, **ask the
teacher** (before the final presentation of course!).

**Advices**

1. Don't use ChatGPT, Copilot or similar tool to write your code, especially
   if you're new to React/TS. You'll
   have to demonstrate you entirely master your codebase, understanding all
   the features it uses.

   Using such assistant can easily leads to code you don't understand which
   will downgrade your mark.

2. Implement and test your app gradually: you shouldn't spend more than 10
   minutes without manually testing your app.
3. Test your code on edge-cases (user typing non-sense, network error,
   server sending non-sense...). Typing should help you out!
4. The methods and libs described in the course are sufficient to complete
   the entire project. No need to explore new fancy patterns, just show me you
   understood the patterns I explained to you!
5. Use the compiler errors as an assistant to write your code, as demonstrated
   in the `05-guess-number` mini project.
6. Don't try to structure your code beforehead too much. Write the code as
   natural as possible, using copy pasting if needed and then refactor to have something clean.

   Maybe this piece of code will be a reusable component, maybe it will
   be a simple function.

   When you think it makes sense, split this file into multiple ones.

7. Design will be a really tiny part of the notation, don't spent too much
   time on it (especially, it's easy to spend hours in CSS to get things
   aligned the way we want).

   That said, a cheating trick is to use UTF-8 emoji to add some visual
   information at really low cost. You can e.g. take a look at
   https://emojipedia.org/ to find the right emoji.

8. You'll have to handle a bunch of input fields that only accept (non
   negative)integers, it could be an interesting idea to define a reusable
   component with proper error handling for that purpose.
9. Don't trust numbered lists except if they exactly have 9 items.

## Additional features for the carbon simulator

Here are ideas for additional features. The first one (with websockets) should
be the first you implement, the others can be implement roughly in
any order. You will earn about 1 point for each bullet point correctly
implemented.

I recall here that those additional features will not increase your mark
if you didn't follow the constraints above. It can even lead to a decrease
since you'd add more code that did not respect the constraints. I can only
recommend to reach out to the teacher before implemeting the following.

- You can subscribe to a websocket channel on `ws://localhost:3000`. This channel
  will broadcast all calls to `POST http://localhost:3000/reduce/`.

  Subscribe to this channel and display a message saying something
  "Someone decreased its annual carbon emissions by 400kg!" on each received
  message. Make this message disapear after 5 seconds.

- Actually, the goal is not to only build a carbon simulator but rahter
  a "travel impact simulator". Hence I propose to add a bunch of indicators.

  The first one is daily physical activity: consider people walk at
  3km/h (which means that when they walk X kilometers, they are active during
  X \* 60/ 3 minutes) and ride a bicycle at 15km/h (which means they are active
  during X \* 60 / 15).

  Display a message comparing this physical activity duration with the 30
  minutes daily recommended duration.

  All other means of transportations doesn't count for physical activity.

  Compute the duration in minutes and display it in the most suited unit
  among minutes and hours. E.g. you'd display "28 minutes of physical activity"
  or "1 hour and 3 minutes of physical activity" but not "134 minutes of
  physical activity".

  Remember you _cannot_ use an external library.

- You could also the time indicator: add an input field for every means of
  transportation where the user can indicate a duration (except for walk and
  bike if you already implemented the previous item).

  Deduce from this 2 quantities:

  - the total time spent from door to door (just add all the durations),
  - when traveling with train or air plane, compute the "usable time":
    by using those means of transportations, we don't have to be focus
    fulltime on the road, letting us to work, read a book, rest a bit,
    text our friends... It's not as pratical as "office time" so you'll
    divide the time spent in train and air plane by 2 (meaning that on
    a journey of 1 hour by train, we can "efficiently" work 30 minutes).

- At the end of the step 5 above, propose to either add another solution
  or entirely restart the app.

  Display all the computed characteritics (total carbon footprint, total time,
  "usable time", physical activity) for all the solutions.

  Allow for removing a solution.

- Display a bar graphic for all the computed charactistics. E.g we could have
  (solution 1 might be "car only", solution 2 might be "mix of walk and train"):

  ```
  Solution 1:
  Carbon footprint  _______
  Total time        __
  Usable time
  Phyiscal activity


  Solution 2:
  Carbon footprint  _
  Total time        ______
  Usable time       __
  Physical activity __
  ```

  Improve this by displaying characteristics we'd like to minimize on the left
  (like Carbon footprint, total time) and the other ones on the right:

  ```
  Solution 1:
   _______ Carbon footprint
        __ Total time
           Usable time
           Phyiscal activity


  Solution 2:
         _ Carbon footprint
    ______ Total time
           Usable time       __
           Physical activity __
  ```

  _Hint_: to draw the bars you can repeat a well chosen emoji or use `background: red; width: 50px;` CSS property on a `<div>` (adjust the color
  and the width of course.

  _Note_: we could merge `Total time` and `Usable time` indactors in a unique
  `Lost time` one computed with `Total time - Usable time`.

- Add another interesting "computed characteristics" among:

  - public space used: a car takes about ~12m² on the road and on the parking,
    a person in train use a seat...
  - price: gaz for the car, car insurance, parking price, public transport
    tickets, ...
  - noise pollution,
  - infrastructure costs: any moving vehicule damage the infrastructure and
    we need to regulary maintain this infrastructure. Of course, costs are not
    the same for roads, railway or bicyle lanes. Moreover, those cost are not
    always supported by the same payment mechnisms: in France roads (except
    highways) are paid thanks to taxes (paid by all the population) wheareas
    most of the railways maintenance costs are supported by the tickets paid by
    the travellers.

  Due to the variety of situations, all those criteria are really hard to
  modelize with exactitude. Up to you to find the good compromise between
  precision, user experience and lisibilty of the results!
