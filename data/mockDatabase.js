// This is meant to be a static read-only database

// All trainers in the database.  Users cannot edit this but can have links to
// this in their favorites.
/* consider using objects and use the id as the key
 * to make getting the information easier with get, and use set has to to
 * make operations easier.  Will need to refactor the store
 */
export const TRAINER_MOCK_DATABASE = [
  {
    id: 0,
    name:"Ilaria Montague",
    numFavorites:"11",
    numComments: "81",
    numRoutines:"17",
    bio:'"I train students to have a great workout, but at the same time to develop a stronger inner self."',
    profilePic: require('../src/img/profile/ilaria_profile.png'),
    coverPic: require('../src/img/profile/ilaria_cover.png'),
    routines: [0,2,3,5],
    activeSince: "May 20, 2015",
    contact:"ilaria@strikeny.com",
    location:"New York, NY",
    specialties: "Martial arts"
  },
  {
    id: 1,
    name:"Chris Reede",
    numFavorites:"3",
    numComments: "17",
    numRoutines:"4",
    bio:'"I am here to give you the best workout in the world, hell yeah!"',
    profilePic: require('../src/img/profile/chris_profile.png'),
    coverPic: require('../src/img/profile/chris_cover.png'),
    routines: [1, 6],
    activeSince: "June 06, 2015",
    contact:"chris@barrys.com",
    location:"San Francisco, CA",
    specialties: "Interval training"
  },
  {
    id: 2,
    name:"Val Pherson",
    numFavorites:"13",
    numComments: "36",
    numRoutines:"3",
    bio:'"Eat clean and train mean."',
    profilePic: require('../src/img/profile/val_profile.png'),
    coverPic: require('../src/img/profile/val_cover.png'),
    routines: [4, 11, 12],
    activeSince: "March 28, 2015",
    contact:"v@vfit.com",
    location:"San Francisco, CA",
    specialties: "Elite Performance"
  },
  {
    id: 3,
    name:"Angel Alicea",
    numFavorites:"22",
    numComments: "88",
    numRoutines:"6",
    bio:'"You have got to go through hell to get to heaven. Purgatory bootcamp style."',
    profilePic: require('../src/img/profile/angel_profile.png'),
    coverPic: require('../src/img/profile/angel_cover.png'),
    routines: [12, 13],
    activeSince: "April 11, 2015",
    contact:"angel@purgatory.com",
    location:"Miami, FL",
    specialties: "Bootcamp, VIPR"
  },
  {
    id: 4,
    name:"Omar Sandoval",
    numFavorites:"9",
    numComments: "630",
    numRoutines:"9",
    bio:'"My classes are difficult and intense - they are not for everyone. If you want to challenge your limits, then come see me."',
    profilePic: require('../src/img/profile/omar_profile.png'),
    coverPic: require('../src/img/profile/omar_cover.png'),
    routines: [16],
    activeSince: "July 21, 2015",
    contact:"omar@titanmethod.com",
    location:"New York, NY",
    specialties: "Boxing, Combat"
  },
  {
    id: 5,
    name:"Jilian Michaels",
    numFavorites:"30",
    numComments: "890",
    numRoutines:"11",
    bio:'"People think maximize your life means to get your sh*t together. But it means appreciating that you are capable of having more."',
    profilePic: require('../src/img/profile/jilian_profile.png'),
    coverPic: require('../src/img/profile/jilian_cover.png'),
    routines: [14,15],
    activeSince: "August 4, 2015",
    contact:"jilian@michaels.com",
    location:"Los Angeles, CA",
    specialties: "Weight Loss"
  },
  {
    id: 6,
    name:"James Park",
    numFavorites:"3",
    numComments: "79",
    numRoutines:"2",
    bio:'"If you do not train like an athlete, you will never become one."',
    profilePic: require('../src/img/profile/james_profile.png'),
    coverPic: require('../src/img/profile/james_cover.png'),
    routines: [9,10],
    activeSince: "September 13, 2015",
    contact:"james@hitfit.com",
    location:"San Mateo, CA",
    specialties: "MMA"
  },
  {
    id: 7,
    name:"Greg James",
    numFavorites:"90",
    numComments: "972",
    numRoutines:"5",
    bio:'"I do not fool around, be an adult and train like an adult. I do not accept excuses."',
    profilePic: require('../src/img/profile/greg_profile.png'),
    coverPic: require('../src/img/profile/greg_cover.png'),
    routines: [7,8],
    activeSince: "January 2, 2015",
    contact:"greg@equinox.com",
    location:"New York, NY",
    specialties: "Bootcamp, HIIT"
  },
];

// Users cannot edit this but add it to their playlist
export const MOCK_ROUTINE_DATABASE = [
  {
     id: 0,
     name: "Definitions",
     trainer: "Ilaria Montague",
     trainerId: 0,
     level: "3",
     category: "boxing",
     categoryPic: require('../src/img/backgrounds/boxing.png'),
     categoryCoverPic: require('../src/img/backgrounds/boxing_routine.png'),
     trainerPic: require('../src/img/profile/ilaria_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/boxing_go.png'),
     duration: 60,
     space: "5 ft",
     equipment: "Medium dumbells",
     targets: "Shoulders, Glutes"
  },
  {
     id: 1,
     name: "HIIT",
     trainer: "Chris Reede",
     trainerId: 1,
     level: "3",
     category: "conditioning",
     categoryPic: require('../src/img/backgrounds/conditioning.png'),
     categoryCoverPic: require('../src/img/backgrounds/conditioning_routine.png'),
     trainerPic: require('../src/img/profile/chris_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/conditioning_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Treadmill, Dumbells",
     targets: "Chest, Legs, Arms"
  },
  {
     id: 2,
     name: "Athletica",
     trainer: "Ilaria Montague",
     trainerId: 0,
     level: "2",
     category: "strength",
     categoryPic: require('../src/img/backgrounds/strength.png'),
     categoryCoverPic: require('../src/img/backgrounds/strength_routine.png'),
     trainerPic: require('../src/img/profile/ilaria_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/strength_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Treadmill, Dumbells",
     targets: "Chest, Legs, Arms"
  },
  {
     id: 3,
     name: "Powerstrike",
     trainer: "Ilaria Montague",
     trainerId: 0,
     level: "3",
     category: "kickbox",
     categoryPic: require('../src/img/backgrounds/kickbox.png'),
     categoryCoverPic: require('../src/img/backgrounds/kickbox_routine.png'),
     trainerPic: require('../src/img/profile/ilaria_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/kickbox_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Treadmill, Dumbells",
     targets: "Chest, Legs, Arms"
  },
  {
     id: 4,
     name: "V - Core 1.3",
     trainer: "Val Pherson",
     trainerId: 2,
     level: "2",
     category: "core",
     categoryPic: require('../src/img/backgrounds/core.png'),
     categoryCoverPic: require('../src/img/backgrounds/core_routine.png'),
     trainerPic: require('../src/img/profile/val_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/core_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Treadmill, Dumbells",
     targets: "Chest, Legs, Arms"
  },
  {
     id: 5,
     name: "Powerstrike 2.0",
     trainer: "Ilaria Montague",
     trainerId: 0,
     level: "3",
     category: "kickbox",
     categoryPic: require('../src/img/backgrounds/kickbox.png'),
     categoryCoverPic: require('../src/img/backgrounds/kickbox_routine.png'),
     trainerPic: require('../src/img/profile/ilaria_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/kickbox_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Treadmill, Dumbells",
     targets: "Chest, Legs, Arms"
  },
  {
     id: 6,
     name: "Spartan Training",
     trainer: "Chris Reede",
     trainerId: 1,
     level: "3",
     category: "strength",
     categoryPic: require('../src/img/backgrounds/strength.png'),
     categoryCoverPic: require('../src/img/backgrounds/strength_routine.png'),
     trainerPic: require('../src/img/profile/chris_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/strength_go.png'),
     duration: 60,
     space: "10 ft",
     equipment: "Heavy dumbells",
     targets: "Legs, Back"
  },
  {
     id: 7,
     name: "Metcon 3",
     trainer: "Greg James",
     trainerId: 7,
     level: "3",
     category: "conditioning",
     categoryPic: require('../src/img/backgrounds/conditioning.png'),
     categoryCoverPic: require('../src/img/backgrounds/conditioning_routine.png'),
     trainerPic: require('../src/img/profile/greg_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/conditioning_go.png'),
     duration: 60,
     space: "20 ft",
     equipment: "10lb Sandbag",
     targets: "Core, Shoulders"
  },
  {
     id: 8,
     name: "Tabata 4.0",
     trainer: "Greg James",
     trainerId: 7,
     level: "3",
     category: "strength",
     categoryPic: require('../src/img/backgrounds/strength.png'),
     categoryCoverPic: require('../src/img/backgrounds/strength_routine.png'),
     trainerPic: require('../src/img/profile/greg_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/strength_go.png'),
     duration: 45,
     space: "5ft",
     equipment: "Heavy dumbells",
     targets: "Upperbody"
  },
  {
     id: 9,
     name: "Sambo",
     trainer: "James Park",
     trainerId: 6,
     level: "3",
     category: "boxing",
     categoryPic: require('../src/img/backgrounds/boxing.png'),
     categoryCoverPic: require('../src/img/backgrounds/boxing_routine.png'),
     trainerPic: require('../src/img/profile/james_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/boxing_go.png'),
     duration: 45,
     space: "10ft",
     equipment: "Boxing bag",
     targets: "Coordination"
  },
  {
     id: 10,
     name: "MMA Remix",
     trainer: "James Park",
     trainerId: 6,
     level: "2",
     category: "boxing",
     categoryPic: require('../src/img/backgrounds/boxing.png'),
     categoryCoverPic: require('../src/img/backgrounds/boxing_routine.png'),
     trainerPic: require('../src/img/profile/james_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/boxing_go.png'),
     duration: 90,
     space: "20ft",
     equipment: "Gloves",
     targets: "Core, Agility"
  },
  {
     id: 11,
     name: "Yoga Flex",
     trainer: "Valentina Pherson",
     trainerId: 2,
     level: "2",
     category: "conditioning",
     categoryPic: require('../src/img/backgrounds/conditioning.png'),
     categoryCoverPic: require('../src/img/backgrounds/conditioning_routine.png'),
     trainerPic: require('../src/img/profile/val_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/conditioning_go.png'),
     duration: 40,
     space: "5ft",
     equipment: "Yoga mat",
     targets: "Flexibility, Core"
  },
  {
     id: 12,
     name: "Circus Master",
     trainer: "Valentina Pherson",
     trainerId: 2,
     level: "3",
     category: "strength",
     categoryPic: require('../src/img/backgrounds/strength.png'),
     categoryCoverPic: require('../src/img/backgrounds/strength_routine.png'),
     trainerPic: require('../src/img/profile/val_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/strength_go.png'),
     duration: 70,
     space: "20ft",
     equipment: "Medicine ball",
     targets: "Lower body"
  },
  {
     id: 12,
     name: "Purgatory 1",
     trainer: "Angel Alicea",
     trainerId: 3,
     level: "3",
     category: "core",
     categoryPic: require('../src/img/backgrounds/core.png'),
     categoryCoverPic: require('../src/img/backgrounds/core_routine.png'),
     trainerPic: require('../src/img/profile/angel_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/core_go.png'),
     duration: 30,
     space: "10ft",
     equipment: "Mat, VIPR",
     targets: "Abs, Quads"
  },
  {
     id: 13,
     name: "Fight Tank",
     trainer: "Angel Alicea",
     trainerId: 3,
     level: "3",
     category: "kickbox",
     categoryPic: require('../src/img/backgrounds/kickbox.png'),
     categoryCoverPic: require('../src/img/backgrounds/kickbox_routine.png'),
     trainerPic: require('../src/img/profile/angel_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/kickbox_go.png'),
     duration: 60,
     space: "10ft",
     equipment: "Heavy bag",
     targets: "Core, Agility"
  },
  {
     id: 14,
     name: "BodyCize",
     trainer: "Jilian Michaels",
     trainerId: 5,
     level: "1",
     category: "conditioning",
     categoryPic: require('../src/img/backgrounds/conditioning.png'),
     categoryCoverPic: require('../src/img/backgrounds/conditioning_routine.png'),
     trainerPic: require('../src/img/profile/jilian_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/conditioning_go.png'),
     duration: 30,
     space: "10ft",
     equipment: "Resistance bands",
     targets: "Shoulders, Back"
  },
  {
     id: 15,
     name: "Pilates 9",
     trainer: "Jilian Michaels",
     trainerId: 5,
     level: "2",
     category: "core",
     categoryPic: require('../src/img/backgrounds/core.png'),
     categoryCoverPic: require('../src/img/backgrounds/core_routine.png'),
     trainerPic: require('../src/img/profile/jilian_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/core_go.png'),
     duration: 25,
     space: "5ft",
     equipment: "Pilates mat",
     targets: "Abs, Back"
  },
  {
     id: 16,
     name: "Titan Mathod 2",
     trainer: "Omar Sandoval",
     trainerId: 4,
     level: "2",
     category: "boxing",
     categoryPic: require('../src/img/backgrounds/boxing.png'),
     categoryCoverPic: require('../src/img/backgrounds/boxing_routine.png'),
     trainerPic: require('../src/img/profile/omar_profile.png'),
     goBackgroundPic: require('../src/img/backgrounds/boxing_go.png'),
     duration: 80,
     space: "5ft",
     equipment: "Heavy bag",
     targets: "Upperbody"
  },
];
