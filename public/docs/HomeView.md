# Analysing the Login View
In this file, I will break down the Home view into a hierarchy of components, determine events in the app, determine the data needed and build the view


## Component's Hierarchy
`Space for image(Component's hierarchy for Home view)`

I broke this view into the following React Components:
- App - the overall container for the project
- Navigation - Displays the navigation
- Questions Container - Displays list of questions
- Question - Displays content for a single question

## Determine What Events Happen In the Home View for each components
### Navigation
The user can navigate between the page for creating new polls, and the leaderboard page, and also logout of the app. Hence, we have the following events.
- Can redirect user to main home page
- Can redirect user to New polls page
- Can redirect user to leaderboard page
- Can logout user from the app