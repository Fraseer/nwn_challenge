import axios from "axios";

const CountryService = async (coords) => {
  const { latitude, longitude } = coords;

  const apiUrl = "https://api.opencagedata.com/geocode/v1/json"
  const apiKey = process.env.REACT_APP_LOCATION_API_KEY

  const requestUrl =
    apiUrl +
    "?" +
    "key=" +
    apiKey +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  let results = await axios.get(requestUrl);

  return results.data.results[0].components.country_code;
};

export default CountryService;
