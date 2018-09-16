var config = {
  advertiserList:[
    {
      id: 0,
      name: "Big Bazaar",
      code: "Big Bazaar"
    },
    {
      id: 1,
      name: "Hotstar",
      code: "Hotstar"
    },
    {
      id: 2,
      name: "IXIGO",
      code: "IXIGO"
    }
  ],
  headerConfig: [
    {
      id: 0,
      displayName: 'Brand Name',
      columnName: 'brandName',
      sortColumn: false,
      width: ''
    },
    {
      id: 1,
      displayName: 'First Compaign Name',
      columnName: 'firstCompaignName',
      sortColumn: false,
      width: ''
    },
    {
      id: 2,
      displayName: 'Count of Compaigns inside brand',
      columnName: 'compaignCount',
      sortColumn: false,
      width: ''
    }
  ],
   timelines: [
     {
       "label": "Today",
       "value": "today"
     },
     {
       "label": "Last 7 Days",
       "value": "lsd"
     },
     {
       "label": "Last Quarter",
       "value": "lq"
     },
     {
       "label": "Last Month",
       "value": "lm"
     },
     {
       "label": "Last Year",
       "value": "ly"
     },
     {
       "label": "Custom Date",
       "value": "cd"
     }
   ]
};

export default config;
