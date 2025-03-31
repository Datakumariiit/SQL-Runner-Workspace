export const queries = [
  {
    id: 1,
    query: "SELECT * FROM users;",
    data: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
      { id: 4, name: "David", age: 28 },
      { id: 5, name: "Eve", age: 22 },
      { id: 6, name: "Frank", age: 40 },
      { id: 7, name: "Grace", age: 29 },
      { id: 8, name: "Heidi", age: 32 },
      { id: 9, name: "Ivan", age: 27 },
      { id: 10, name: "Judy", age: 31 },
    ],
  },
  {
    id: 2,
    query: "SELECT * FROM orders;",
    data: [
      { order_id: 101, user_id: 1, amount: 250 },
      { order_id: 102, user_id: 2, amount: 150 },
      { order_id: 103, user_id: 3, amount: 300 },
      { order_id: 104, user_id: 4, amount: 200 },
      { order_id: 105, user_id: 5, amount: 100 },
      { order_id: 106, user_id: 6, amount: 400 },
      { order_id: 107, user_id: 7, amount: 350 },
      { order_id: 108, user_id: 8, amount: 450 },
      { order_id: 109, user_id: 9, amount: 500 },
      { order_id: 110, user_id: 10, amount: 600 },
    ],
  },
];
