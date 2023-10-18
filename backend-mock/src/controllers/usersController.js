exports.get = async (req, res) => {
  console.log(req.body);
  res.send({
    result: "success",
  });
};
