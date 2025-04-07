
const axios = require("axios");

exports.handler = async () => {
  try {
    const res = await axios.get(`${process.env.XATA_DB_URL}/tables/links/query`, {
      headers: {
        Authorization: `Bearer ${process.env.XATA_API_KEY}`,
        "Content-Type": "application/json"
      },
      data: {
        columns: ["id", "name", "url"]
      }
    });
    return { statusCode: 200, body: JSON.stringify(res.data.records) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
