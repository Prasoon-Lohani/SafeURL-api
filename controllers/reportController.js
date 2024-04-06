const URL = require("../model/urldb");

const reportURL = async (req, res, next) => {
  const { url } = req.body;

  try {
    if (url) {
      const url = await URL.create({ url, safe: false });
      return res.status(201).json({ ack: true, msg: "Reported Successfully" });
    } else return res.status(404).json({ ack: false, err: "No URL provided" });
  } catch (err) {
    return res.status(500).json({ ack: false, err });
  }
};

module.exports = {reportURL};