import { pipe } from "lodash/fp";

const pickTag = obj => obj.tag;
const toLowerCase = str => str.toLowerCase();
const bracketify = str => `(${str})`;

const transform = pipe(pickTag, toLowerCase, bracketify);

const output = transform({ tag: "JAVASCRIPT" });
console.log(output);
