

const searchNames = document.querySelector('#search-form');
const getDate = document.querySelector('#form-group');





const getUserAsync = async name => {
  let response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=se`);
  let data = await response.json();
  return data;
};

const getCalendar = async (month, day) => {
	let response = await fetch(`https://api.abalin.net/namedays?country=&month=${month}&day=${day}`);
	let sync = await response.json();
	return sync;
  };


  




getDate.addEventListener('submit', e =>{
	e.preventDefault();
	
	const month = document.querySelector('#getMonth').value;
	const day = document.querySelector('#getDay').value;
	console.log('get month and day', day, month)
	if (!month && !day) {
		return;
	}

	getCalendar(month,day).then(sync => {
		console.log(sync, 'mie mie');
		console.log('get data', sync.data[0].namedays);
		var keys = Object.keys(sync.data[0].namedays);
		console.log(keys);
		var dataNames = Object.values(sync.data[0].namedays);
		console.log(dataNames);
		const entries = Object.entries(sync.data[0].namedays);
		console.log(entries);
		console.log(`${entries}`);
		giveCalendar(sync);
		///console.log(`vill logga ut alla namn ${data.data[0].namedays.at}`)
	  });
});

const giveCalendar = sync => {
		var keys = Object.keys(sync.data[0].namedays);
		console.log(keys);
		var dataNames = Object.values(sync.data[0].namedays);
		console.log(dataNames);
		const entries = Object.entries(sync.data[0].namedays);
	const temp = `<div class="card" style="width: 18rem;">
	<div class="card-body">
	<li>${entries}</li>
	</div>
  </div>
  `
  document.querySelector('#namnsdag2').innerHTML = temp;
};

///console.log(data.results[0].name, 'test test')
/*
getUserAsync("helena").then(data => {
	console.log('names', data);
}); 

*/

searchNames.addEventListener('submit', e => {
	e.preventDefault();
	const originalitem = document.querySelector('#query').value;
	

	if (name) {
		console.log(data.results[0]);
		console.log('test test', name);
	}


getUserAsync(originalitem).then(data => {
	console.log(data.results[0].name, 'test test')
	const names = data.results;
	console.log(names, 'test test');
	console.log(`${names[0].name}`)
	names.forEach(item=>{
		console.log(`the name is ${item.name} and the day ${item.day} and month ${item.month}`)
		userNames(data);
	});
})		
});

const userNames = data => {
	const template = `
	<div class="card" style="width: 18rem;">
		<div class="card-body">
		<p class="card-text">Har namnsdag månad: ${data.results[0].month} och dag: ${data.results[0].day}</p>
		<p>${data.results[0].name}<p>
		</div>
	  </div>
	  `
	
	document.querySelector('#namnsdag').innerHTML = template;
};

    










/*
const template = `
		<div class="card">
			<img src="assets/images/forecast-banner.png" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title" id="city">${data.name}</h5>
				<p class="temp">
					<span id="temperature">${data.main.temp}</span>
					&deg;C
				</p>
				<p class="wind">
					<span id="windspeed">${data.wind.speed}</span>
					m/s
				</p>
			</div>
		</div>
	`;

	document.querySelector('#forecast').innerHTML = template;
};
*/