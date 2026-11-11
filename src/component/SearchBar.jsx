import { useState } from 'react';
import {fetchPosts} from './Pages/Details.jsx'
const SearchBar = ()=>{
    
    const [text, setText] = useState('');

    async function fetchPosts(text) {
        const url = "https://api.fda.gov/drug/label.json?search=openfda.brand_name:",{text},"&limit=20";
          try {
            const response = await fetch.get({url});
            // The parsed JSON payload is stored in response.data
            console.log(response.data);
            return response;
          } catch (error) {
            // Handle network errors or bad HTTP status codes
            console.error('Error fetching data:', error.message);
          }
        }

    const handleSubmit = (e)=>{
      e.preventDefault();
      const response = fetchPosts(text);
      const data = response.data;
      return (
        <p>data</p>
      );
    }

  return (
    <>
        <h1>MediBuddy</h1>
        <form onSubmit = {handleSubmit}>
          <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Medicine"
          />
        </form>
    </>
  );
}


export default SearchBar;
module.exports =  {text};
