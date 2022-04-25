const axios = require("axios");

module.exports = async() => {
 let result = await axios.get("https://aws.random.cat/meow");

 return result.data.file;
}