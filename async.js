const getUserAsync = async name => {
  let response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=se`);
    
    if (!response.ok) {
        console.log(response.status)
        throw new Error(`status code code: ${response.status} `); 
    } else {
        let data = await response.json();
        return data;
};
}
const getCalendar = async (country,month, day) => {
    let response = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);
    if (!response.ok) {
	    throw new Error(`Request was not OK. Status Code returned was: ${response.status}.`);
	} else {
	let sync = await response.json();
	return sync;
};
}