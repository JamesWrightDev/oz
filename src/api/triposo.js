async function fetchTours()
{
  let response = await fetch(`https://www.triposo.com/api/20200405/tour.json?location_ids=Melbourne&countrycode=AU&account=J1PZNGHJ&token=nxhzsjtnlt0jw7n30yhgebkre1hisqd6`);
  let data = await response.json()
  return data;
}
export default fetchTours;