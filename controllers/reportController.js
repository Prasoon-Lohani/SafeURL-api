const URL = require("../model/urldb");

const reportURL = async (req, res, next) => {
  console.log("Report Route");
  const { url } = req.body;
  console.log('URL: ',url);
  try {
    if (url) {
      const url = URL({ url, safe: false });
      await URL.save();
      return res.status(201).json({ ack: true, msg: "Reported Successfully" });
    } else return res.status(404).json({ ack: false, err: "No URL provided" });
  } catch (err) {
    return res.status(500).json({ ack: false, err });
  }
};

module.exports = {reportURL};