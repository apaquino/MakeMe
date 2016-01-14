// This is meant to be a static read-only database

// All trainers in the database.  Users cannot edit this but can have links
// this in their favorites.

export const TRAINER_MOCK_DATABASE = [
  {
    id:"0",
    name:"Ilaria Montague",
    numFavorites:"11",
    numComments: "81",
    numRoutines:"17",
    bio:'"I train students to have a great workout, but at the same time to develop a stronger inner self."',
    profilePic:"",
    coverPic:"",
    routines: ["5", "2", "0"],
    activeSince: "May 20, 2015",
    contact:"ilaria@strikeny.com",
    location:"New York, NY",
    specialties: "Martial arts"
  },
  {
    id:"1",
    name:"Chris Reede",
    numFavorites:"3",
    numComments: "17",
    numRoutines:"4",
    bio:'"I am here to give you the best workout in the world, hell yeah!"',
    profilePic:"",
    coverPic:"",
    routines: ["1", "3"],
    activeSince: "June 06, 2015",
    contact:"chris@barrysbootcamp.com",
    location:"San Francisco, CA",
    specialties: "Interval training"
  },
  {
    id:"2",
    name:"Val Pherson",
    numFavorites:"13",
    numComments: "36",
    numRoutines:"3",
    bio:'"Eat clean and train mean."',
    profilePic:"",
    coverPic:"",
    routines: ["4", "2", "5"],
    activeSince: "March 28, 2015",
    contact:"v@vfit.com",
    location:"San Francisco, CA",
    specialties: "Elite Performance"
  },
  {
    id:"3",
    name:"Angel Alicea",
    numFavorites:"22",
    numComments: "88",
    numRoutines:"6",
    bio:'"You have got to go through hell to get to heaven. Purgatory bootcamp style."',
    profilePic:"",
    coverPic:"",
    routines: ["1", "2", "3"],
    activeSince: "April 11, 2015",
    contact:"angel@purgatory.com",
    location:"Miami, FL",
    specialties: "Bootcamp, VIPR"
  },
  {
    id:"4",
    name:"Omar Sandoval",
    numFavorites:"9",
    numComments: "630",
    numRoutines:"9",
    bio:'"My classes are difficult and intense - they are not for everyone. If you want to challenge your limits, then come see me."',
    profilePic:"",
    coverPic:"",
    routines: ["0", "5", "4"],
    activeSince: "July 21, 2015",
    contact:"omar@titanmethod.com",
    location:"New York, NY",
    specialties: "Boxing, Combat"
  },
  {
    id:"5",
    name:"Jilian Michaels",
    numFavorites:"30",
    numComments: "890",
    numRoutines:"11",
    bio:'"People think maximize your life means to get your sh*t together. But it means appreciating that you are capable of having more."',
    profilePic:"",
    coverPic:"",
    routines: ["1", "2", "4"],
    activeSince: "August 4, 2015",
    contact:"jilian@michaels.com",
    location:"Los Angeles, CA",
    specialties: "Weight Loss"
  },
  {
    id:"6",
    name:"James Park",
    numFavorites:"3",
    numComments: "79",
    numRoutines:"2",
    bio:'"If you do not train like an athlete, you will never become one."',
    profilePic:"",
    coverPic:"",
    routines: ["0", "1"],
    activeSince: "September 13, 2015",
    contact:"james@hitfit.com",
    location:"San Mateo, CA",
    specialties: "MMA"
  },
  {
    id:"7",
    name:"Greg James",
    numFavorites:"90",
    numComments: "972",
    numRoutines:"5",
    bio:'"I do not fool around, be an adult and train like an adult. I do not accept excuses."',
    profilePic:"",
    coverPic:"",
    routines: ["2", "4"],
    activeSince: "January 2, 2015",
    contact:"greg@equinox.com",
    location:"New York, NY",
    specialties: "Bootcamp, HIIT"
  },
];

// Users cannot edit this but add it to their playlist
export const MOCK_ROUTINE_DATABASE = [
  {
     id: "0",
     name: "Definitions",
     trainer: "Ilaria Montague",
     level: "3",
     category: "boxing"
  },
  {
     id: "1",
     name: "HIIT",
     trainer: "Chris Reede",
     level: "3",
     category: "conditioning"
  },
  {
     id: "2",
     name: "Athletica",
     trainer: "Ilaria Montague",
     level: "2",
     category: "strength"
  },
  {
     id: "3",
     name: "Powerstrike",
     trainer: "Ilaria Montague",
     level: "3",
     category: "kickbox"
  },
  {
     id: "4",
     name: "V - Core 1.3",
     trainer: "Val Pherson",
     level: "2",
     category: "core"
  },
  {
     id: "5",
     name: "Powerstrike 2.0",
     trainer: "Ilaria Montague",
     level: "3",
     category: "kickbox"
  },
];

export const  routineImages = {
	  core: require('image!core'),
	  conditioning: require('image!conditioning'),
	  boxing: require('image!boxing'),
	  kickbox: require('image!kickbox'),
	  strength: require('image!strength')
	};
