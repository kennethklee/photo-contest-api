var request = require('superagent');

exports.fetchRecentMediaByTag = function (tag, count) {
  return new Promise(function (resolve, reject) {
    count = count || 10;
    var access_token = process.env.INSTAGRAM_ACCESS_TOKEN;
    // resolve()
    request.get(`https://api.instagram.com/v1/tags/${tag}/media/recent`)
      .query({ access_token, count })
      .end(function (err, res) {
        console.log(err)
        if (err) {
          return reject(err);
        }

        resolve(res.body.data);
      });
  });
};
