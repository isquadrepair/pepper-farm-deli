import '@ionic/core';

import * as fs from "fs";

// import { setupConfig } from '@ionic/core';
export let categories;
export default async () => {
  // setupConfig({
  //   mode: 'ios'
  // });
  categories = await fetchData('/categories');

  // STEP 3: Writing to a file
  fs.writeFile('categories.json', JSON.stringify(categories), err => {
    // Checking for errors
    if (err) throw err;
    console.log('Done writing'); // Success
  });
};
export const apiUrl = 'http://localhost:1337';

export const fetchData = slug => fetch(apiUrl + slug).then(data => data.json());
