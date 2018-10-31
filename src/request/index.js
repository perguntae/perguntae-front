import axios from 'axios';
/* eslint-disable max-len */
export default axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImhlbGRlciIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lIjoiIiwiZW1haWwiOiJoZWxkZXJAaGVsZGVyLmNvbSIsInBhc3N3b3JkIjoiZGM2YzRjOTJiNTk4ZmVmOTRhM2RhMDU1NGQ1NmE2NWRmZjZhNzUwODk2YjgxYjYxN2JjN2NmNmU1YTMxMmY1NCIsInJvbGUiOlsiZmFsc2UiXSwiaWQiOiI1YjgxNjE2YmZjOGUxOWViOGFkZGFkNWEiLCJhY3RpdmF0ZWQiOmZhbHNlfQ.2NEmYyg6IVV1HyWZM_3KjTT5iSPG8XtsgoHerKGSduI',
  },
});
