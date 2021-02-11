import Devbook, { ExtensionEventHandlers } from '@devbookhq/extension';

// If you want to use our predefined functions to fetch extension data, you have to initialize the Devbook object.
const devbook = new Devbook();

const extensionEventHandlers: ExtensionEventHandlers = {
  // Called every time user changes the search query in the Devbook search input.
  // An extension is required to implement this function and return an array of search results.
  onDidQueryChange: async (data, extensionMode, token) => {
    // data - contains information about query.
    // extensionMode - whether an extension is running in the 'prod' or 'dev' mode (read more in our documentation).
    // token - access token you need if you want to make HTTP request on the Devbook API manually.
    
    // Mock example not fetching any data from the extension data.
    const results = [
      {
        id: '1',
        title: 'Hello World!',
        body: `The search query was ${data.query}`,
      },
    ];
    return { results };
   
    // Fetch your extension data from the https://api.usedevbook.com/:version/extension/:extensionID endpoint.
    // You can use our exported predefined functions for that:

    // const results = await devbook.search(['testIndex'], data.query);
    // return { results };
  },
}

export default extensionEventHandlers;
