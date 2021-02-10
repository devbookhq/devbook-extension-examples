import {
  ExtensionEventHandlers,
  extensionEndpoints,
} from '@devbookhq/extension';

const extensionEventHandlers: ExtensionEventHandlers = {
  // This function will be called every time user changes their query in the Devbook search input.
  onDidQueryChange: async (data) => {
    // Mock example not fetching any data from the extension data.
    const results = [
      {
        id: '1',
        data: {
          title: 'Hello World!',
          body: `The search query was ${data.query}`,
        },
      },
    ];
    return { results };

    // You can fetch your extension data from https://api.usedevbook.com/extension/:yourExtensionID/entry/query.
    // You can use our exported predefined functions for that:

    // const results = await extensionEndpoints.searchExtensionData(data.query, {
    //   indexes: ['testIndex'],
    // });
    // return { results };
  },
}

export default extensionEventHandlers;
