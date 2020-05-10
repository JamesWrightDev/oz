async function fetchTours()
{
  let response = await fetch(`https://www.triposo.com/api/20200405/tour.json?location_ids=Melbourne&countrycode=AU&count=100&account=J1PZNGHJ&token=nxhzsjtnlt0jw7n30yhgebkre1hisqd6`);
  let data = await response.json()
  return data;
}

export async function fetchToursByQuery(query)
{
  let response = await fetch(`https://www.triposo.com/api/20200405/tour.json?location_ids=Melbourne&countrycode=AU&annotate=trigram:${query}&trigram=>=0.1&count=100&account=J1PZNGHJ&token=nxhzsjtnlt0jw7n30yhgebkre1hisqd6`);
  let data = await response.json()
  return data;
}

export async function fetchTourById(id)
{
  let response = await fetch(`https://www.triposo.com/api/20200405/tour.json?id=${id}&fields=name,id,content,score,vendor_tour_url,price&account=J1PZNGHJ&token=nxhzsjtnlt0jw7n30yhgebkre1hisqd6`);
  let data = await response.json()
  console.log(data);
  return data;
}
export default fetchTours;

// /api/20200405/tour.json?location_ids=Melbourne