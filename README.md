# Watson Tone Analyzer Test

Sample code to test the Watson Tone Analyzer service

## Instructions:

1. Go to [IBM Bluemix](https://bluemix.net) and create an instance of the [Tone Analyzer Service](https://console.ng.bluemix.net/catalog/services/tone-analyzer)

2. Create a file with the name `.env` and fill it with the following contents:
    ```bash
    TONE_ANALYZER_USERNAME = username
    TONE_ANALYZER_PASSWORD = password
    ```
    Where "username" and "password" are taken from your Watson Tone Analyzer service credentials.

3. Install required packages using npm 
    ```bash
    npm install
    ```

4. Run the test
    ```bash
    npm test
    ```
