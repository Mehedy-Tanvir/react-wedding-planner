# Wedding Instaplanner

## Project Features

- In the home page it has 6 sections. Navbar, banner, services, about us, contact us and footer sections. Initially home page loads data from json file and shows them in cards of the services section.
- Clicking the show details button for each service will redirect you to details page for respective services.
- If user is not logged in clicking the show details button will redirect you to the login page.
- After redirection trying to access detail page signing in will redirect user to the detail page that the user was trying to access.
- In the detail page there is a buy button. Clicking this button will redirect user to payment page. After submission of card information in payment page will give a success toast and redirect user to home page.
- When user is not signed in it shows home, register and login in the navbar.
- When user is signed in it shows user picture, name, update profile and logout. If user didn't provide name it will not show it on the navbar. If there is no picture of the user it will show a dummy picture.
- User can update profile name and picture by submitting form in the update profile page.
- There are three private routes. They are service details page, payment page and update profile page. Trying to access them without signed in will redirect user to login page.
- Login and register page can be toggled by clicking login below register form and register below login form.
- When registering it checks if the password is minimum 6 characters, containing capital letter, containing special character and gives error toast when this conditions are not met.
- Firebase authentication system is implemented in this project.
- After successful registration it will show a success toast message otherwise show a error toast containing error message.
- After successful login it will show a success toast message otherwise show a error toast containing error message.
- After successful profile update it will show a success toast message otherwise show a error toast containing error message.
- Clicking logout will logout the user and show a success toast message.
- There is a error page. If user tries to access page which is not available then error page will be rendered.

## [ Live Link: Wedding Instaplanner](https://wedding-instaplanner.web.app/)

## [https://wedding-instaplanner.web.app/](https://wedding-instaplanner.web.app/)
