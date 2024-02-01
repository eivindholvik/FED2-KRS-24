export const DATABASE = {
  USERS: {
    data: [
      {
        id: 1,
        username: "admin",
        password: "admin123",
        posts: [
          1, 2
        ]
      },
      {
        id: 2,
        username: "user",
        password: "user123",
        posts: []
      },
    ],
    lastId: 2
  },
  DATA: {
    data: [
      { id: 1, content: "secret 1", owner: 1 },
      { id: 2, content: "secret 2", owner: 1 },
    ], lastId: 2
  }
};

