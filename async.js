const getUserAsync = async name => {
  let response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=se`);
  let data = await response.json();
  return data;
};

const getCalendar = async (country,month, day) => {
	let response = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);
	let sync = await response.json();
	return sync;
};