const URL = require("../model/urldb");

const urlcheck = async (req, res, next) => {
  const { url } = req.body;
  console.log("URL:", url);
  
  try {
    if (url) {
      const status = await URL.find({ url });

      if (status) {
        return res
          .status(200)
          .json({ ack: true, msg: "Request Successfull", safe: status.safe });
      } else
        return res
          .status(500)
          .json({ ack: true, err: "URL not in the Database" });
    } else return res.status(404).json({ ack: false, err: "No URL provided" });
  } catch (err) {
    return res.status(500).json({ ack: false, err });
  }
};

module.exports = { urlcheck };
