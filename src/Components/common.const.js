import godfather from "../assets/image/The God Father.jpg";
import startwars from "../assets/image/Star War.webp";
import titanic from "../assets/image/Titanic.jpeg";
import goodfellas from "../assets/image/GoodFellas.jpg";
import avtar from "../assets/image/Avtar.jpg";
import Pathan from "../assets/image/Pathan.jpg";
import Aladin from "../assets/image/Aladin.jpg";
import leader from "../assets/image/Leader.jpeg";

import director from "../assets/image2/director.jpeg";
import musiccomposer from "../assets/image2/Music Composer.jpeg";
import producer from "../assets/image2/Producer.jpg";
import actor1 from "../assets/image2/Actor1.jpg";
import actor2 from "../assets/image2/Actor2.jpeg";
import executiveproducer from "../assets/image2/Executive producer.webp";
import scriptwriter from "../assets/image2/Script Writer.jpg";

export const NAV_LINKS = [
  {
    id: 1,
    linkText: "Movies",
  },
  {
    id: 2,
    linkText: "Crew",
  },
  {
    id: 3,
    linkText: "Community",
  },
  {
    id: 1,
    linkText: "Profile",
  },
];

export const LIST_OF_ROOMS = [
  {
    id: 1,
    room_name: "New Room",
    created_date: "2021-05-19",
    buttons: [
      { id: 1, title: "Open Room", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 2,
    room_name: "Avatar (2009) - Club",
    created_date: "2021-06-10",
    buttons: [
      { id: 1, title: "Open Room", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 1,
    room_name: "New Room 3",
    created_date: "2021-11-14",
    buttons: [
      { id: 1, title: "Open Room", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
];

export const BUTTONS = ["Movies", "Crew", "Members", "Admins"];

export const LIST_OF_MOVIES = [
  {
    id: 1,
    movie_poster: godfather,
    movie_title: "The Godfather (1972)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 2,
    movie_poster: startwars,
    movie_title: "Start Wars IV - A New Hope (1977)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 3,
    movie_poster: titanic,
    movie_title: "Titanic (1997)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 4,
    movie_poster: goodfellas,
    movie_title: "Goodfellas (1990)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 5,
    movie_poster: avtar,
    movie_title: "Avtar The Game (2009)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 6,
    movie_poster: Pathan,
    movie_title: "Pathan (2023)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 7,
    movie_poster: Aladin,
    movie_title: "Aladin  (2019)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
  {
    id: 8,
    movie_poster: leader,
    movie_title: "Leader  (2008)",
    buttons: [
      { id: 1, title: "Trailer Link", bg: "yellow", color: "black" },
      { id: 2, title: "Update", bg: "green", color: "white" },
      { id: 3, title: "Delete", bg: "red", color: "white" },
    ],
  },
];

export const CREW = [
  {
    title: "Francis ford Coppola",
    Image: director,
    btnTitle: "Director",
  },
  {
    title: "Nino rota",
    Image: musiccomposer,
    btnTitle: "Music Composer",
  },
  {
    title: "Albert S. Ruddy",
    Image: producer,
    btnTitle: "Producer",
  },
  {
    title: " AI Pacino",
    Image: actor1,
    btnTitle: "Actor",
  },
  {
    title: "Marion Brando ",
    Image: actor2,
    btnTitle: "Actor",
  },
  {
    title: "Robert Evans",
    Image: executiveproducer,
    btnTitle: "Executive Producer",
  },
  {
    title: "Mario Puzo ",
    Image: scriptwriter,
    btnTitle: "Script Writer",
  },
];

export const FORM_FIELDS = [
  {
    label: "User Id",
    field: "userId",
    type: "text",
    isDisabled: true,
  },
  {
    label: "Username",
    field: "username",
    type: "text",
    isDisabled: false,
  },
  {
    label: "Firstname",
    field: "firstname",
    type: "text",
    isDisabled: false,
  },
  {
    label: "Lastname",
    field: "lastname",
    type: "text",
    isDisabled: false,
  },
  {
    label: "Gender",
    field: "null",
    type: "text",
    isDisabled: false,
  },
  {
    label: "Birthday",
    field: "Date",
    type: "date", 
    isDisabled: false
  },
  {
    label: "Country",
    field: "null",
    type: "text",
    isDisabled: false,
  },
  {
    label: "Created At",
    field: "Date",
    type: "date", 
    isDisabled: false
  },
  
  
  
];
export const UpdatePassword=[

  {
    label: "Old Password",
    field: "oldPassword",
    type: "text",
  },
  {
    label: "New Password",
    field: "newPassword",
    type: "text",
  },


]
