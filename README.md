# expa-applications-data
Realtime method to fetch application data from EXPA (GIS) to Google Sheets utilizing the Google AppScript.

Intial Setup

1. Open your sheet and open the appscript and create iCX.gs and oGX.gs files.

2. Paste the code from iCX.gs and oGX.gs in the repo

3. You may change the start date based on your preference in the line 3 of both files iCX and oGX
```
var startDate = "01/07/2023" 
```


4. Initially you need to have an access token from expa. You may refer the link here (google.com)
Then you have to replace the tokens in the iCX.gs and oGX.gs line 6
```
var accessToken = 'YOUR_ACCESS_TOKEN'; // Your access token
```

Add trigger to make it realtime

1. Create a trigger for the iCXExract() in the iCX.gs and oGXExtract() in the oGX.gs file.

2. You may choose the function as it is mention above

3. event source should be Time-driven and you may choose the other two options based on your preferences. In our cases we are running every hour.

For MCs Only

For MCs you can fetch all the LCs in one file and then using IMPORTANGE and QUERY functions you can specifically import the data for each LCs in a different sheet.
