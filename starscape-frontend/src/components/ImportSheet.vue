
<template>
  <div>
    <h1>Google Sheets Data</h1>
    <div v-if="data.length">
      <div v-for="(row, index) in data" :key="index">
        {{ row.join(', ') }}
      </div>
    </div>
    <div v-else>
      No data found.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    try {
      await this.loadClient();
      await this.fetchSheetData();
    } catch (err) {
      console.error('Error loading Google Sheets API:', err);
    }
  },
  methods: {
    loadClient() {
      return new Promise((resolve, reject) => {
        gapi.load('client:auth2', async () => {
          try {
            await gapi.client.init({
              apiKey: 'AIzaSyCkHFg9iorbH7qrgL6LQxyokdxLw4SWKJ0', // Replace with your API key
              clientId: '401938140809-u68l4b8eneeu1umd5vcj6ihch16p0r5v.apps.googleusercontent.com', // Replace with your client ID
              discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
              scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
            });
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      });
    },
    async fetchSheetData() {
      try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1T1BUDHwP6PHhCMYTeTZQnAer_zgPGhUVXDQZAnFlAfs', // Replace with your spreadsheet ID
          range: 'Turrets!A1:T67', // Replace with the range you want to query
        });
        const values = response.result.values;
        if (values.length) {
          this.data = values;
        } else {
          console.log('No data found.');
        }
      } catch (err) {
        console.error('The API returned an error:', err);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>