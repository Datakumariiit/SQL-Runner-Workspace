export const queries = [
  {
    id: 1,
    query: "SELECT * FROM users;",
    data: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
    ],
  },
  {
    id: 2,
    query: "SELECT * FROM orders;",
    data: [
      { order_id: 101, user_id: 1, amount: 250 },
      { order_id: 102, user_id: 2, amount: 150 },
    ],
  },
];
