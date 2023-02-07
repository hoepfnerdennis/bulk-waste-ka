#! usr/env/bin node

const buildUri = (street, no = "1") =>
  `https://web6.karlsruhe.de/service/abfall/akal/akal.php?strasse=${street}&hausnr=${no}`;

import streets from "../data/streets.json" assert { type: "json" };
import fetch from "node-fetch";
import { writeFileSync } from "fs";
import path from "path";

const resultMap = {};
const all = streets.length;
let done = 0;

for (let i = 0; i < streets.length; i += 2) {
  // for (let i = 0; i < 6; i += 2) {
  let street1;
  let street2;
  try {
    street1 = streets[i];
  } catch {}
  try {
    street2 = streets[i + 1];
  } catch {}
  const promises = [street1, street2].map(handleStreet);
  await Promise.all(promises);
}

console.log(resultMap);
writeFileSync("./src/data/dates.json", JSON.stringify(resultMap, null, 2));

async function handleStreet(street) {
  if (!street) return;
  console.log(`Starting ${street}`);
  let html = await fetchHtmlForStreet(street);
  let date = extractDateFromHtml(html);
  if (!date) {
    console.log(`Retry ${street}`);
    html = await fetchHtmlForStreet(street, 10);
    date = extractDateFromHtml(html);
  }
  console.log(`Found date: ${date} for street: ${street}`);
  resultMap[street] = date;
  console.log(`${done++}/${all}`);
}

async function fetchHtmlForStreet(street) {
  const uri = buildUri(street);
  const response = await fetch(uri);
  return response.text();
}

function extractDateFromHtml(html) {
  const from = html.indexOf("Stra&szlig;ensperrm&uuml;ll");
  const to = from + 200;
  const substring = html.substring(from, to);
  const match = substring.match(/(\d\d\.\d\d\.\d\d\d\d)/g);
  if (match && match.length > 0) {
    return match[0];
  }
  return null;
}
