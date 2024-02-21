import { DATABASE } from "./database.js";

export function insertOne(collection, data) {
  DATABASE[collection].lastId++;
  DATABASE[collection].data.push({ ...data, id: DATABASE[collection].lastId });
  return DATABASE[collection].lastId;
}

export function findOne(collection, query) {
  const data = DATABASE[collection].data.find(query);
  if (!data) {
    throw new Error("Not found");
  }
  return data;
}

export function findMany(collection, query = (() => true)) {
  return DATABASE[collection].data.filter(query);
}

export function deleteOne(collection, query, owner) {
  const deleted = DATABASE[collection].data.find(query);
  if (!deleted) {
    throw new Error("Not found");
  }
  if (owner && deleted.owner !== owner) {
    throw new Error("Unauthorized");
  }
  const index = DATABASE[collection].data.findIndex(query);
  DATABASE[collection].data.splice(index, 1);
  console.log(DATABASE[collection].data);
  return deleted;
}

export function updateArray(collection, query, data, array) {
  const index = DATABASE[collection].data.findIndex(query);
  const exists = DATABASE[collection].data[index][array].findIndex((item) => item === data)
  if (exists !== -1) {
    DATABASE[collection].data[index][array].splice(exists, 1);
  } else {
    DATABASE[collection].data[index][array].push(data);
  }
}