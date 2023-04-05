const linkedIn = require('./index');

const queryOptions = {
  keyword: 'Director of Engineering',
  location: 'United States',
  dateSincePosted: 'past week',
  jobType: 'full time',
  remoteFilter: 'remote',
  limit: '1',
  sortBy: 'recent',
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
