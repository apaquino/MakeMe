// This can be updated so new user can be added.
export let mockUsers = [
  {
    id: 1,
    username: "mjones",
    email: "mjone@gmail.com",
    password: "mjones",
    playlist: [{id: 1, playlistId: 4},
               {id: 2, playlistId: 3},
               {id: 3, playlistId: 2}],
    completedRoutines: [
                          { id: 1,
                            playlistId: 5,
                            completedDate: "Mon, Oct 5",
                          },
                          { id: 2,
                            playlistId: 0,
                            completedDate: "Tues, Oct 6"
                          },
                       ],
    favoriteRoutines: [3, 5, 1],
    favoriteTrainers: [1, 4]
  }
];
