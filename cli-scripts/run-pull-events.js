const chargebee = require('../src/chargebee-obj');
const pullEvents = require('../src/pull-via-events-api');

(async () => {
  const q = {
    limit: 2,
    'sort_by[asc]': 'occurred_at',
    'occurred_at[after]': 0,
  };
  const x = pullEvents(chargebee, q);

  let data;
  do {
    data = await x.next();
    console.log(data);
  } while (!data.done);
})();
