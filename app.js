

const searchNames = document.querySelector('#search-form');
const getDate = document.querySelector('#form-group');


getDate.addEventListener('submit', e =>{
	e.preventDefault();

	const month = document.querySelector('#getMonth').value;
	const day = document.querySelector('#getDay').value;
	const country = document.querySelector('#country').value;
  	console.log(country, 'click clicky');
	console.log('get month and day', country, day, month)
	if (!country && !month && !day) {
		return;
	}

getCalendar(country,month,day).then(sync => {
/*		console.log(sync, 'mie mie');
		console.log('get data', sync.data[0].namedays);
		var keys = Object.keys(sync.data[0].namedays);
		console.log(keys);
		var dataNames = Object.values(sync.data[0].namedays);
		console.log(dataNames);
		const entries = Object.entries(sync.data[0].namedays);
		console.log(entries);
		console.log(`${entries}`);*/
	
		giveCalendar(sync);

	if(e.target==="country") {
			console.log(sync.data[0].namedays);
	} return;
		///console.log(`vill logga ut alla namn ${data.data[0].namedays.at}`)
 });
});



const giveCalendar = sync => {
		/*console.log(keyval);
		console.log(keys);
		console.log(dataNames);
		var keyval = sync.data[0];*/
		let keys = Object.keys(sync.data[0].namedays);
		let dataNames = Object.values(sync.data[0].namedays);
		
	/*	const entries = Object.entries(sync.data[0].namedays);		
		const test = keys.map(function(sync){
		return keyval;
		console.log(test);

	*/	
	const temp = `<div class="card" style="width: 18rem;">
	<div class="card-body">
	<li>The country code is ${keys} and the names for this day: ${dataNames}</li>
	</div>
  	</div>
 	 `
  	document.querySelector('#namnsdag2').innerHTML = temp;
};

/*console.log(data.results[0].name, 'test test')

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
	/*console.log(data.results[0].name, 'test test')
	console.log(names, 'test test');
	console.log(`${names[0].name}`)*/
	
	const names = data.results;
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

    
