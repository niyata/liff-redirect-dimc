
const axios = require("axios");

exports.handler = async () => {
  try {
    const res = await axios.post(`${process.env.XATA_DB_URL}/tables/links/query`, {
      columns: ["id", "name", "url"]
    }, {
      headers: {
        Authorization: `Bearer ${process.env.XATA_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res.data.records)
    };
  } catch (err) {
    return {
  statusCode: 500,
  body: JSON.stringify({
    error: err.message,
    data: err.response?.data || "No response data",
    full: err.toString()
  })
};
  }
};



