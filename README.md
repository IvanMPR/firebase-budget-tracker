# Budget Tracker React - Firebase

<a href="https://ivanmpr.github.io/firebase-budget-tracker">Demo</a>

This project is my attempt to create something that will resemble the real life app. It is the budget/expense tracker app made with React, with the possibilties to add, edit and delete new entries, with user-friendly interface and real-time synchronization with Firebase, ensuring that data is always up to date. Entry can be income or expense, and they are stored in separate lists. Every entry is consisted of description, amount and date of creation. Entries will be synchronised with the database even if they are added while user is offline, as soon as connection is reestablished. Entries can be filtered by creation date, creation month, amount etc. The design is far from perfect, mostly because I don't have the 'eye' and feeling for the aesthetics, design and color. However, 
my main focus was on the usability and functionality of the expense tracker app, and hopefully I managed to do so. The local state of the app was handled with the useReducer hook with all reducer actions and logic performed in the same place
and same file. Logic for interaction with Firebase is located in several places, mostly in the event handleres that logically coresponds to components (editing entries in EditingModal, deletion and info in ListItem etc...)

## Screenshots
<img src="/screenshots/screen1.jpg" width="100%"/>
<img src="/screenshots/screen2.jpg" width="100%"/>
<img src="/screenshots/screen3.jpg" width="100%"/>
<img src="/screenshots/screen4.jpg" width="100%"/>


## Latest Version

<a href="https://ivanmpr.github.io/firebase-budget-tracker">Demo</a>


