
const axios = require("axios");

exports.handler = async (event) => {
  const { id, ...update } = JSON.parse(event.body);
  try {
    const res = await axios.put(`${process.env.XATA_DB_URL}/tables/links/data/${id}`, update, {
      headers: {
        Authorization: `Bearer ${process.env.XATA_API_KEY}`,
        "Content-Type": "application/json"
      }
    });
    return { statusCode: 200, body: JSON.stringify(res.data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
