# Steps to run in local

1. clone the repository and navigate to the root directory
2. give npm install and npm start
3. In root directory navigate to mock-server directory and give npm install and npm start(this server mocks DB)


you will have the app running at localhost:3000/login

you can login using

singh.umang1802@gmail.com/Umang@1802

or 

Signup using your own credentials

I have used json-auth-server to mock login/signup

after login you will get course catalogue page in which all the data is coming from mock db and mock API

one can only navigate to catalogue and course page after succesfull login. I have used context to implement it.

user can select a course and will be redirected to course page

course page has course structure tree(which i have built using Typescript) and learning content again all the data mocked.

I took this as an opportunity to learn typescript and react hooks to apply to this project.

#POSSIBLE GLITCHES

while navigating back to catalougue page from course page some times browser back button responds to double click I am analysing and trying to fix it

You may find redundant data.

