exports.get = async (req, res, client) => {
  console.log(req.body);
  const selectQuery = "SELECT * FROM Uses;";
  client.query(selectQuery, function (err, result) {
    if (err) throw err;
    res.json({
      result: result.rows,
    });
  });
};
exports.post = async (req, res) => {
  console.log(req.body);
};
exports.put = async (req, res) => {
  console.log(req.body);
};
exports.delete = async (req, res) => {
  console.log(req.body);
};
