const axios = require("axios").default;

async function getMinecraftServer(ip, { type } = {}) {
  let typeEdit = type?.toLowerCase();
  if (!ip) {
    return Promise.reject(
      new Error(
        `No IP provided. Please specify an IP address or domain name. Ex code: getMinecraftServer("mc.example.com", { type: "java" })`
      )
    );
  } else if (typeEdit !== "java" && typeEdit !== "bedrock") {
    return Promise.reject(
      new Error(
        `Please specify a valid type. Ex code: getMinecraftServer("mc.example.com", { type: "java" })`
      )
    );
  } else {
    let apiUrl;
    if (typeEdit === "java") {
      apiUrl = `https://api.mcsrvstat.us/3/${ip}`;
    } else if (typeEdit === "bedrock") {
      apiUrl = `https://api.mcsrvstat.us/bedrock/3/${ip}`;
    }
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return Promise.reject(
        new Error(
          `An error occurred while fetching server status: ${error.message}`
        )
      );
    }
  }
}

module.exports = { getMinecraftServer };
