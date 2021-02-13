import '@ionic/core';

// import { setupConfig } from '@ionic/core';
export default async () => {
  // setupConfig({
  //   mode: 'ios'
  // });
  (window as any).__CATEGORIES__ = await fetchData('/categories');
  (window as any).__PAGES__ = await fetchData('/pages');

  // STEP 3: Writing to a file
  /* fs.writeFile('categories.json', JSON.stringify(categories), err => {
    // Checking for errors
    if (err) throw err;
    console.log('Done writing'); // Success
  }); */
};
export const apiUrl = 'http://localhost:1337';

export const fetchData = slug => fetch(apiUrl + slug).then(data => data.json());
