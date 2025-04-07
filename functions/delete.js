
const axios = require("axios");

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  try {
    const res = await axios.delete(`${process.env.XATA_DB_URL}/tables/links/data/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.XATA_API_KEY}`
      }
    });
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
