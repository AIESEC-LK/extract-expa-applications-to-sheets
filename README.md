# Extract EXPA Applications Data to Google Sheets using EXPA API

This repository contains scripts to fetch real-time application data from EXPA (GIS) to Google Sheets using Google Apps Script.

## Initial Setup

Follow these steps to set up and run the scripts:

### Step 1: Open your Google Sheet and Access AppScript

1. Open your Google Sheet.
2. Navigate to `Extensions` -> `Apps Script`.
3. Create two new script files: `iCX.gs` and `oGX.gs`.

### Step 2: Paste the Code

1. Copy the code from the `iCX.gs` file in this repository and paste it into the `iCX.gs` file in your Apps Script editor.
2. Copy the code from the `oGX.gs` file in this repository and paste it into the `oGX.gs` file in your Apps Script editor.

### Step 3: Configure the Start Date

1. You can set your preferred start date for data extraction. Edit line 3 in both `iCX.gs` and `oGX.gs` files:
    ```javascript
    var startDate = "01/07/2023"; // Set your preferred start date
    ```

### Step 4: Obtain and Set the Access Token

1. Obtain an access token from EXPA. You may refer to [this link](https://click.aiesec.lk/mc/access-token-101) for more details on how to obtain the token.
2. Replace the placeholder with your actual access token in line 6 of both `iCX.gs` and `oGX.gs` files:
    ```javascript
    var accessToken = 'YOUR_ACCESS_TOKEN'; // Your access token
    ```

## Adding a Trigger for Real-time Data Fetching

To ensure the data is fetched in real-time, set up triggers for the functions:

1. Open the Apps Script editor.
2. Click on the clock icon to open the triggers page.
3. Add a new trigger:
    - For `iCX.gs`, set the function to `iCXExtract`.
    - For `oGX.gs`, set the function to `oGXExtract`.
4. Set the event source to `Time-driven`.
5. Choose the frequency and interval (e.g., every hour).

## For MCs Only

To fetch data for all LCs in one file and distribute it:

1. Use the `IMPORTANGE` and `QUERY` functions in Google Sheets.
2. This will allow you to import specific data for each LC into different sheets.

## More Details on AIESEC Developer Guides
1. [AIESEC International](https://click.aiesec.lk/mc/aiesec-dev-guides)
2. [AIESEC in Sri lanka]

## Contributing

Feel free to fork this repository, make changes, and create pull requests. Contributions are welcome!

Furthermore, It would be great if you could star our repository and encourgae our intiatives



## If you need support

With this setup, you should be able to integrate EXPA application data into Google Sheets seamlessly. If you encounter any issues or have questions, please open an issue in this repository or you may contact fouzul.hassan@aiesec.net
