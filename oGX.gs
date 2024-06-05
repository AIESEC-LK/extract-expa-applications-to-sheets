var today = new Date(); // Get the current date
var today = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd/MM/yyyy");
var startDate = "01/07/2023" //Utilities.formatDate(new Date(today), "GMT+2", "dd/MM/yyyy");
var endDate = today

var accessToken = YOUR_ACCESS_TOKEN; // Change this to your access token
var universityData = {
  7667: "University of Colombo",
  7668: "University of Kelaniya",
  7669: "University of Moratuwa",
  7670: "University of Sri Jayawardenepura",
  7671: "University of Peradeniya",
  7672: "University of Ruhuna",
  7673: "SLIIT",
  7674: "NSBM Green University",
  7997: "Informatics Institute of Technology- IIT",
  7999: "ANC - American National College",
  8722: "Royal Institute of Colombo",
  8723: "APIIT - Colombo",
  8864: "Spectrum Institute of Science & Technology",
  8985: "Achievers Lanka Business School",
  8986: "ICBT Colombo Campus",
  10224: "CFPS Law School",
  10226: "North Shore College of Business & Technology",
  10227: "ESOFT Metro Campus - Malabe",
  10228: "ESOFT Metro Campus - Kandy",
  10230: "American College of Higher Education",
  10231: "Kotelawala Defence University",
  10232: "Imperial College Kandy",
  11104: "Colombo Institute of Research and Psychology",
  11105: "British Informatics of Computer Technology",
  11107: "British Way English Academy",
  11108: "Sri Lanka Institute of Advanced Technological Education",
  11109: "Colombo Institute of Tourism and Hospitality Management",
  11110: "Alpha Business School",
  11111: "APIDM (Asia Pacific institute of digital marketing)",
  11112: "Australian College Business Technology Institute- ACBT",
  11113: "Goethe Institute",
  11114: "Bandaranaike Centre for International Studies",
  11115: "British Council",
  11116: "NISD- National Institute of Social Development",
  11117: "Colombo International Nautical and Engineering College- CINEC",
  11118: "Mercury Institute of Management",
  11119: "Uva Wellassa University",
  11120: "Northshore College of Business and Technology",
  11121: "Institute of Chemistry Ceylon",
  11122: "Raffles Design Institute Colombo",
  11123: "Edulink International Campus",
  11124: "Academy of Design",
  11125: "AMDT School of Creativity",
  11126: "Nawaloka College of Higher Studies",
  11127: "Sabaragamuwa University",
  11128: "Wisdom Business Academy",
  11129: "Institute of Personel Management",
  11130: "Colombo International Institute of Higher Education",
  11131: "Human Resource Management Institute",
  11132: "Aquinas University College",
  11133: "Lanka Institute of Fashion Technology (LIFT)",
  11134: "Imperial Institute of Higher Education (IIHE)",
  11135: "Institute for Accounting Studies",
  11136: "University of Jaffna",
  11137: "APIIT Kandy Campus",
  11140: "British College of Applied Studies(BCAS) - Kandy",
  11141: "American College Kandy Campus",
  11142: "ICBT Campus Kandy",
  11143: "Australian College of Business and Technology (ACBT)- Kandy",
  11144: "Sri Lanka Institute of Marketing (SLIM) - Matara",
  11146: "Esoft - Galle",
  11147: "Asian Institute of Technology",
  11149: "Oxford College of Business",
  11150: "Auston Campus Colombo",
  11151: "Colombo Academy of Hospitality Management-CAHM",
  11152: "Horizon Campus",
  11160: "SLIIT Kandy Campus",
  11570: "Saegis Campus",
  11571: "British College of Applied Studies(BCAS)- Colombo",
  11572: "BMS Campus",
  11605: "Visakha Vidyalaya Colombo",
  11606: "Ladies’ College",
  11607: "Musaeus College",
  11608: "Royal College",
  11609: "Kandy Girls’ High School",
  11610: "Trinity College, Kandy",
  11611: "St.Peter’s College",
  11612: "Gateway College Kandy",
  11613: "St. Thomas College, Matara",
  11614: "Mahinda College - Galle",
  11615: "Ananda College - Colombo",
  11616: "Holy Cross college - Gampaha",
  11617: "East Asian International School - Colombo",
  11618: "Bishops College - Colombo",
  11619: "S.Thomas’ College - Mount Lavinia",
  11620: "Sirimavo Bandaranaike Vidyalaya - Colombo",
  11863: "Alliance Française de Kotte",
  13077: "Sri Lanka Institute of Marketing",
  13078: "Institute of Universal Higher studies",
  13079: "Lanka Nippon Biz Tech Institute",
  13080: "Louis Preston School of Travel and Tourism",
  13081: "Institute of Software Engineering - IJSE",
  13082: "Bristol Institute of Business Management",
  13084: "Lyceum International School - Nugegoda",
  13085: "Nalanda College Colombo",
  13086: "Universal College Lanka (UCL)- Colombo",
  13087: "Russian centre for science and culture- Colombo",
  13088: "D.S. Senanayake Vidyalaya Colombo 7",
  13090: "National Institute of Education (NIE)",
  13091: "St. Joseph's College Colombo",
  13092: "Anula Vidyalaya Nugegoda",
  13093: "Devi Balika Vidyalaya Colombo",
  13094: "Ave Maria Convent- Negombo",
  13095: "Rathnavali Balika Vidyalaya - Gampaha",
  13096: "Lyceum International School - Wattala",
  13097: "Britsh Council colombo",
  13098: "CINEC Campus",
  13099: "Southlands College Galle",
  13100: "Richmond College Galle",
  13101: "St. Paul's Girls' School, Milagiriya",
  13102: "Good Shepherd convent Kandy",
  13103: "Mahamaya Girls college Kandy",
  13105: "St. Thomas College Matale",
  13106: "Sri Lanka Technological Campus",
  13107: "City School of Architecture",
  13108: "Open University - Nawala",
  13109: "Law College",
  13110: "Lyceum College Panadura",
  13111: "St. Lawrence College Colombo",
  13112: "St. Bridget's College Colombo",
  13113: "Mahanama College, Colombo",
  13114: "Thurstan College Colombo",
  13115: "Metropolitan College Mount Lavinia",
  13116: "Regent language school Negombo",
  13117: "Esol College",
  13118: "Skills college of Technology",
  13119: "Chartered Institute of Personnel Management",
  13120: "Cambridge Institute of Higher Education (CIHE)",
  13121: "Imperial College of Business Studies",
  13122: "Horizon International College- Malabe",
  13123: "SLIIT mathara campus",
  13124: "SLIIT Academy",
  13125: "Bandaranaike International Diplomatic Training Institute",
  13126: "NEXT campus- Colombo",
  13127: "Londontec City Campus",
  13128: "Sujatha Vidyalaya Matara",
  13129: "Gateway College, Dehiwala",
  13131: "ESOFT Metro Campus Matara",
  13132: "Sanghamitta Balika Vidyalaya, Galle",
  13133: "Steiner College, Ruhuna",
  13134: "University College of Matara",
  13135: "ICBT southern campus",
  13136: "IDM mathara campus",
  13137: "Alliance Francaise De Matara",
  13138: "Horizon Campus Matara center",
  13139: "APEX Business academy matara",
  13147: "Gateway College International- Rajagiriya",
  13148: "SLIIT Metropolitan Campus",
  13149: "British council partner teaching center Matara",
  13368: "St. George International Teacher Training Institute",
  13369: "Open Arc Campus",
  13400: "KAATSU International University Malabe",
  13401: "Colombo School of Construction Technology Pita-kotte",
  13402: "Sujatha Vidyalaya Nugegoda",
  13403: "Thames College Nugegoda",
  13404: "Matrix institute of information technology",
  13405: "LEEDS International college Panadura",
  13406: "Academy of language skills and dramatic art",
  13407: "TEFL Training institute",
  13408: "Sakurai Aviation",
  13409: "British School Colombo",
  13410: "The Overseas School Of Colombo",
  13411: "Zahira college Colombo",
  13412: "Holy Family Convent Colombo",
  13413: "Colombo South International College",
  13414: "Kandy Cambridge College",
  13415: "French & Leame Kandy",
  13416: "Kingston English School, Kandy",
  13417: "Kandy Language Center",
  13418: "Nivaya International, Kandy",
  13419: "British Council Kandy",
  13420: "Alliance Francaise Kandy",
  13421: "CIPM Kandy",
  13422: "Hindu Sansthan Srilanka (Hindi), Kurunegala",
  13423: "Vinex College Of English, Kurunegala",
  13424: "British way English Academy, Kurunegala",
  13425: "Brighten Language Center(Eng), Kurunegala",
  13426: "Hillwood College Kandy",
  13427: "Dharmaraja College Kandy",
  13428: "Kingswood College Kandy",
  13429: "Maliyadeva College Kurunegala",
  13430: "Maliyadeva Balika Vidyalaya Kurunegala",
  13431: "Royal International School, Kurunegala",
  13432: "Badulla Central College, Badulla",
  13433: "University of Ruhuna",
  13449: "UNEX English Academy",
  13450: "Genius School of Professional Studies",
  13451: "Ladies college of Professional Studies",
  13452: "Openarc Campus",
  13453: "PATHE Global Academy",
  13990: "Wayamba University of Sri Lanka",
  13991: "Rajarata University of Sri Lanka",
  14175: "Stafford International College Colombo",
  14176: "Mod'Art Paris Colombo",
  14177: "American Institute of Computer Technology",
  14178: "Safetek Global Education Institute",
  14179: "National Institute of Business Management (NIBM)",
  14180: "Institute of Management and Leadership - IML",
  14181: "Global Institute of Project Management - Colombo",
  14182: "Aspire business school - Dehiwala",
  14183: "Icon business school - Colombo",
  14184: "Pace institute - Pannipitiya",
  14185: "Centrium Academics",
  14186: "SEI Campus - Nugegoda",
  14187: "SEI Campus - Matara",
  14188: "Riyoda Higher Education Centre",
  14189: "British College of Applied studies (BCAS)- Mount Campus",
  14190: "Internatioanl European campus",
  14192: "Lifeway educational Institute",
  14193: "ASPIRE College of Higher Education - Colombo",
  14194: "ASPIRE College of Higher Education - Colombo",
  14195: "AIMS College",
  14196: "Benchmark Education Institute - Nugegoda",
  14197: "CADD Centre Lanka",
  14378: "British Institute of Engineering & Technology",
  36185: "Global Technological Campus (Pvt) Ltd",
  36474: "Polymath College",
  37260: "University of Vavuniya",
  37405: "Royal Institute International School",
  37406: "Hilwood College, Kandy",
  37407: "Sussex College, Ratnapura",
  37408: "Vidyartha College, Kandy",
  37409: "Hindu College, Colombo",
  37410: "Asian Grammar School - Matara",
  37411: "Batemulla National School",
  37412: "Leeds International College, Matara",
  37413: "Maharagama Central College",
  37414: "Telford International School, Galle",
  37415: "Prince of Wales College, Moratuwa",
  37416: "Princess of Wales College, Moratuwa",
  7675: "Other",
}

const productData = {
  7: "GV",
  8: "GTa",
  9: "GTe",
}

function getTotalPages() {
  // Define your GraphQL API endpoint and query for getting total pages
  var graphql_endpoint = 'https://gis-api.aiesec.org/graphql';
  var perPage = 1;  // Set per_page to 1 as we only need to get the total count
  //change this to your MC ID / LC ID by changing the person_home_mc
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
        'Authorization': accessToken,  // your access token
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

function replaceProducts1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("oGX");
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

function convertToShortDate1(dateTimeStr) {
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

function convertDatesToShortFormat1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("oGX");
  var range = sheet.getRange("N2:Q" + sheet.getLastRow()); // Adjust range as per your column indices
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j] !== "") {
        values[i][j] = convertToShortDate1(values[i][j]);
      }
    }
  }

  range.setValues(values);
}

function replaceUniversityNames1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("oGX");

  var range = sheet.getRange("H2:H" + sheet.getLastRow());
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];
    if (universityData[cellValue]) {
      values[i][0] = universityData[cellValue];
    }
  }

  range.setValues(values);
}

function oGXExtract() {
  // Define your GraphQL API endpoint and query
  var graphql_endpoint = 'https://gis-api.aiesec.org/graphql';
  var perPage = 1000;  // Number of items per page
  var page = 1;
  var allApplications = [];

  // Defining Google Sheets spreadsheet and the sheet where you want to write the data
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("oGX"); // sheet eke nama

  // Define headers for the Google Sheets
  var sheet_headers = [
    "ID",
    "EP Name",
    "Phone Number",
    "EP ID",
    "OP ID",
    "Home LC",
    "Home MC",
    "LC Alignment",
    "Title",
    "Host MC",
    "Host LC",
    "Product",
    "Status",
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
    'Authorization': accessToken,  // your token
  };
  while (true) {
    var graphql_query = `query GetallApplications{
      allOpportunityApplication(
        page: ${page}
        per_page: ${perPage}
        filters: {
          person_home_mc: 1623
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
            created_at
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
            lc_alignment{
              id
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
        application['person'] ? application['person']['lc_alignment'] ? application['person']['lc_alignment']['id'] : '' : '',
        application['opportunity'] ? application['opportunity']['title'] : '',
        application['home_mc'] ? application['home_mc']['name'] : '',
        application['host_lc'] ? application['host_lc']['name'] : '',
        application['opportunity'] ? application['opportunity']['programme'] ? application['opportunity']['programme']['id'] : '' : '',
        application['status'] ? application['status'] : '',
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
  replaceProducts1()
  replaceUniversityNames1()
  convertDatesToShortFormat1()
}

function oGX(){
  oGXExtract()
  replaceProducts1()
  replaceUniversityNames1()
  convertDatesToShortFormat1()
}