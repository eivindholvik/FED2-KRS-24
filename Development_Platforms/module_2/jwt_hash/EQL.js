import { DATABASE } from "./database.js";



export function insertOne(collection, data) {
  DATABASE[collection].lastId++;
  DATABASE[collection].data.push({ ...data, id: DATABASE[collection].lastId });
}

export function findOne(collection, query) {
  return DATABASE[collection].data.find(query);
}

export function findMany(collection, query = (() => true)) {
  return DATABASE[collection].data.filter(query);
}

export function deleteOne(collection, query) {
  const index = DATABASE[collection].data.findIndex(query);
  DATABASE[collection].data.splice(index, 1);
}