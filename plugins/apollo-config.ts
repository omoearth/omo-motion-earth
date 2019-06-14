import clientState from "@/apollo/clientState";

export default function(context) {
  return {
    httpEndpoint: process.env.EARTH_HTTP_ENDPOINT,
    wsEndpoint: process.env.EARTH_WS_ENDPOINT,
    httpLinkOptions: {
      uri: "/api",
      credentials: "same-origin"
    },
    clientState
  };
}
