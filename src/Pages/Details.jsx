import axios from 'axios'
import {text} from './component/SearchBar.jsx' 


async function fetchPosts() {
const url = "https://api.fda.gov/drug/label.json?search=openfda.brand_name:",{text},"&limit=20";
  try {
    const response = await axios.get({url});
    // The parsed JSON payload is stored in response.data
    console.log(response.data);
  } catch (error) {
    // Handle network errors or bad HTTP status codes
    console.error('Error fetching data:', error.message);
  }
}

module.exports ={ fetchPosts};
