##whatTodo app

This is a Todo application (spa) builted with reactjs.

it is very easy to use and built as a beginner project as few librarys were use to built it:
++react-addons-css-transition-group
++creact-react-app package 

I added some basic feactures to the app like:
++name of task 
++Time of task 
++venus of task
++prioirty of task 
++Notes about the tasks

and some basic advance feacture:
++storing tasks info on device browser so you dont need to worry about data lost.
++dynamic movement of the tasks cards.

you can view the app at www.whatTodo.com

##creating the app 
you will need the following installed on your computer to work on this repo:
++node v6.^,
++npm v5.^

with those two installed all you need to do is to open terminal for linux/mac users and CMD for windows user and run
## npm install

onces that is through installing all you have to do is to run
## npm start

this will start the app on your default browser and will be use to aid the app development.
*note:*
all changes done are automatically updated on the browser as you save the project each time, coutesy of "react-script"

##SRC folder
##css
all css script use in the app are in App.css and are sectioned according to each components and fectures that uses them.
*note:* 
index.css is not really doing anything it just basically came with creact-react-app package and i dont feel like delecting it :p

*to get creact-react-app node package* 
*run on terminal or CMD as it applies to you*
##npm install create-react-app
##create-react-app name-of-app

##components
all the components used in the app are in the components folders.
++Header.js
this is basically the component that renders the header of the app.
++Task
this components basically contains the layout of the tasks to be displayed in the app.
it is also reponsible for the displaying of the Tasks.
++AddTaskForm
this is the component that is responsible for taking input of task info to be displayed by the task component.
data inputed here are sent to App componenet which in turns sends it to Task component for displaying on the App.
++App
this is the component where everything about the app is;
the other components, css, images e.t.c
it is the only components rendered by index.js.
All state and other fundamental data to be used by the app are found here.
*note: not always all fundemental date*

##img folder 
contains all images used by the app.

##index.js
this is the components that is directly present in our index.html file and it is the file responsible for the rendering of the App components.

##public folder
it contains all the essencial files for the app to run like:
++index.html.e.t.c

###bulid
onces once is though working on the repo one can go ahead and build the app making it ready for deployment and visible for others to view it without node or npm installed on their computer.

top bulid you will run
##npm build

and thats all then go ahead to eject and deploy on whatever server you like.
run 
##npm eject 
to eject

love from BigUncleYemi.:p

##note: eject is an irrevesible command 
