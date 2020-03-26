# Analysing the Login View
In this file, I will break down the Login view into a hierarchy of components, determine events in the app, determine the data needed and build the view


## Component's Hierarchy

`Space for image(Component's hierarchy for login view)`

I broke this view into the following React Components:
- App - the overall container for the project
- Login - In charge of login the user into the app

## Determine What Events Happen In the Login View
Here, I will look at what is happening in each component. I'll determine what actions the user can perform on this view. Is the data being set, modified, or deleted?.. then I'll keep track of these events with actions. 

This view has just one sub-component (Login). And it has the following events
- Get all user's detail for login - Action: `GET_ALL_USERS`
    - user's name
    - user's picture
    - user's ID
- Get the previously login user - Action: `GET_PREVIOUS_LOGIN_USER`
- Log in the user - Action: `AUTH_LOGIN_USER`
