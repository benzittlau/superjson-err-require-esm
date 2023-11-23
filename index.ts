import { serialize } from "superjson";

const obj = {
  date: new Date(),
  number: 123,
  string: "hello",
  regex: /hello world/,
};

const { json, meta } = serialize(obj);

console.log("json", json);
console.log("meta", json);
