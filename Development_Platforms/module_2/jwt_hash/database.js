export const DATABASE = {
  USERS: {
    data: [
      {
        salt: "5f4dcc3b5aa765d61d8327deb882cf99",
        id: 1,
        username: "admin",
        password: "JAvlGPq9JyTdtvBO6x2llnRI1+gxwIyPqCKAn3THIKk=", //admin123
        posts: [
          1, 2
        ]
      },
      {
        id: 2,
        username: "user",
        password: "5gbjiw2MGbJM8O44CBgxYup81j/3kS27IrXoAyhrREY=", //user123
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

