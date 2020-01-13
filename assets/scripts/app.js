

const searchNames = document.querySelector('#search-form');
const names = document.querySelector('#query');

const getUserAsync = async name => {
  let response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=us`);
  let data = await response.json()
  return data;
}

getUserAsync("helena")
  .then(data => console.log('names', data)); 


searchNames.addEventListener('submit', e => {
	e.preventDefault();
	name = names.value;
	
	if (name) {
		console.log('get name', name);

	getUserAsync(name).then(data => {
		console.log('the names', data);
		const names = data.results;
		console.log(`the names  ${names}`)
		});
	}	
})







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