var today = new Date(); // Get the current date
var today = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd/MM/yyyy");
var startDate = "01/07/2023" //Utilities.formatDate(new Date(today), "GMT+2", "dd/MM/yyyy");
var endDate = today

var accessToken = 'YOUR_ACCESS_TOKEN'; // Your access token
function getTotalPages() {
  // Define your GraphQL API endpoint and query for getting total pages
  var graphql_endpoint = 'https://gis-api.aiesec.org/graphql';
  var perPage = 1;  // Set per_page to 1 as we only need to get the total count
  var totalPagesQuery = `query GetTotalPages {
    allOpportunityApplication(
      per_page: ${perPage}
      filters: {
        person_home_mc : 1623
        created_at:{
            from: "${startDate}" 
            to:"${endDate}"
            }
      }
      sort: created_at
    ) {
      paging {
        total_pages
      }
    }
  }`;

  try {
    var response = UrlFetchApp.fetch(graphql_endpoint, {
      'method': 'post',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': accessToken,  // token eka
      },
      'payload': JSON.stringify({ 'query': totalPagesQuery }),
      'muteHttpExceptions': true
    });

    if (response.getResponseCode() == 200) {
      var data = JSON.parse(response.getContentText());

      if (data['data'] && data['data']['allOpportunityApplication']) {
        var total_pages = data['data']['allOpportunityApplication']['paging']['total_pages'];
        Logger.log("Total Pages: " + total_pages);
      } else {
        Logger.log("No 'allOpportunityApplication' property in the response for total pages.");
      }
    } else {
      Logger.log("GraphQL request failed with status code: " + response.getResponseCode() + " for total pages.");
    }
  } catch (error) {
    Logger.log("An error occurred: " + error + " for total pages.");
  }
}

// Call the function to log the total pages to the console
getTotalPages();

function replaceProducts2() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("iCX");
  var range = sheet.getRange("L2:L");
  var values = range.getValues();
  
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] == 7) {
      values[i][0] = "GV";
    } else if (values[i][0] == 8) {
      values[i][0] = "GTa";
    } else if (values[i][0] == 9) {
      values[i][0] = "GTe";
    }
  }
  range.setValues(values);
}



function convertToShortDate2(dateTimeStr) {
  // Parse the date-time string
  var dateTime = new Date(dateTimeStr);

  // Get the date components
  var year = dateTime.getFullYear();
  var month = ('0' + (dateTime.getMonth() + 1)).slice(-2); // Months are zero-indexed
  var day = ('0' + dateTime.getDate()).slice(-2);

  // Construct the short date string (YYYY-MM-DD)
  var shortDate = year + '-' + month + '-' + day;
  return shortDate;
}

function convertDatesToShortFormat2() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("iCX");
  var range = sheet.getRange("M2:P" + sheet.getLastRow()); // Adjust range as per your column indices
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j] !== "") {
        values[i][j] = convertToShortDate2(values[i][j]);
      }
    }
  }

  range.setValues(values);
}

function iCXExtract() {
  // Define your GraphQL API endpoint and query
  var graphql_endpoint = 'https://gis-api.aiesec.org/graphql';
  var perPage = 1000;  // Number of items per page
  var page = 1;
  var allApplications = [];

  // Defining Google Sheets spreadsheet and the sheet where you want to write the data
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("iCX"); // sheet eke nama

  // Define headers for the Google Sheets
  var sheet_headers = [
    "ID",
    "EP Name",
    "Phone Number",
    "EP ID",
    "OP ID",
    "Home LC",
    "Home MC",
    "Title",
    "Host MC",
    "Host LC",
    "Status",
    "Product",
    // "Signed Up At",
    "Applied At",
    "Accepted At",
    "Approved At",
    "Realized At",
    "Rejected Reason"
  ];

  // Send the GraphQL request with headers in a loop until all pages are retrieved
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': accessToken,  // Your token
  };
  while (true) {
    var graphql_query = `query GetallApplications{
      allOpportunityApplication(
        page: ${page}
        per_page: ${perPage}
        filters: {
          opportunity_home_mc: 1623
          created_at:{
            from: "${startDate}" 
            to:"${endDate}"
            }
        }
      ) {
        data {
          id
          an_signed_at
          branch{
            id
          }
          created_at
          rejection_reason {
            meta
            name
          }
          current_status
          date_approved
          date_matched
          date_realized
          followed_up_date
          cv {
            id
            url
          } 
          home_mc {
            name
          }
          host_lc {
            name
          }
          id
          opportunity {
            home_lc{
              id
              name
            }
            home_mc{
              id
              name
            }
            project_name
            title
            programme{
              id
              short_name
            }
            id
            organisation {
              name
              id
            }
          }
          person {
            full_name
            id
            home_lc{
              id
              name
            }
            home_mc{
              id 
              name
            }
            email
            contact_detail {
              phone
              email
              country_code
            }
          }
          status
        }
        paging {
          current_page
          total_items
          total_pages
        }
      }
    }`;

    try {
      var response = UrlFetchApp.fetch(graphql_endpoint, {
        'method': 'post',
        'headers': headers,
        'payload': JSON.stringify({ 'query': graphql_query }),
        'muteHttpExceptions': true
      });

      if (response.getResponseCode() == 200) {
        var data = JSON.parse(response.getContentText());

        allApplications = allApplications.filter(application => {
          return new Date(application.created_at) >= new Date("2023-06-01T00:00:00Z");
        });

        if (data['data'] && data['data']['allOpportunityApplication']) {
          var applications = data['data']['allOpportunityApplication']['data'];

          allApplications = allApplications.concat(applications);

          // Check if there are more pages to retrieve
          var currentPage = data['data']['allOpportunityApplication']['paging']['current_page'];
          var totalPages = data['data']['allOpportunityApplication']['paging']['total_pages'];

          if (currentPage < totalPages) {
            page++;  // Move to the next page
          } else {
            break;  // Exit the loop if all pages are retrieved
          }
        } else {
          Logger.log("No 'allOpportunityApplication' property in the response.");
          Logger.log("Full response: " + JSON.stringify(data));  // Log the full response for debugging
          break;
        }
      } else {
        Logger.log("GraphQL request failed with status code: " + response.getResponseCode());
        Logger.log("Response content: " + response.getContentText());  // Log the response content for debugging
        break;  // Exit the loop in case of an error
      }
    } catch (error) {
      Logger.log("An error occurred: " + error);
      break;  // Exit the loop in case of an error
    }
  }

  // Clear existing data in the sheet
  sheet.clearContents();

  // Write the headers to the sheet
  sheet.getRange(1, 1, 1, sheet_headers.length).setValues([sheet_headers]);

  // Write the data to the sheet if there is any
  if (allApplications.length > 0) {
    var rows = [];
    for (var i = 0; i < allApplications.length; i++) {
      var application = allApplications[i];

      // Handle potential null values with null checks
      var row = [
        application['id'] ? application['id'] : '',
        application['person'] ? application['person']['full_name'] : '',
        application['person'] && application['person']['contact_detail'] ? application['person']['contact_detail']['phone'] : '',
        application['person'] ? application['person']['id'] : '',
        application['opportunity'] ? application['opportunity']['id'] : '',
        application['person'] ? application['person']['home_lc'] ? application['person']['home_lc']['name'] : '' : '',
        application['person'] ? application['person']['home_mc'] ? application['person']['home_mc']['name'] : '' : '',
        application['opportunity'] ? application['opportunity']['title'] : '',
        application['home_mc'] ? application['home_mc']['name'] : '',
        application['host_lc'] ? application['host_lc']['name'] : '',
        application['status'] ? application['status'] : '',
        application['opportunity'] ? application['opportunity']['programme'] ? application['opportunity']['programme']['id'] : '' : '',
        // application['person'] ? application['person']['created_at'] : '',
        application['created_at'] ? application['created_at'] : '',
        application['date_matched'] ? application['date_matched'] : '',
        application['date_approved'] ? application['date_approved'] : '',
        application['date_realized'] ? application['date_realized'] : '',
        application['rejection_reason'] ? application['rejection_reason']['name'] : '',
      ];
      rows.push(row);
    }

    // Write all the rows to the sheet
    sheet.getRange(2, 1, rows.length, sheet_headers.length).setValues(rows);
  } else {
    Logger.log("No data to write to the sheet.");
  }
  replaceProducts2()
  convertDatesToShortFormat2()
}

