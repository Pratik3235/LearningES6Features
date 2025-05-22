const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 }
];

const formatUserInfo = ({ id, name, age = 18 }) => {
    return `User ${name} (ID: ${id}) is ${age} years old.`;
};

const allUsers = [...users, { id: 4, name: "Diana" }];

const formattedUsers = allUsers.map(formatUserInfo);

console.log(formattedUsers);