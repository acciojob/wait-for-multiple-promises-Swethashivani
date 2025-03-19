//your JS code here. If required.
function createPromise(index){
let time=Math.random()*(3-1)+1;
	return new Promise(resolve=>{
		setTimeout(()=> 
		resolve({index, time}), time*1000);
	});
}
let promises = [createPromise(1), createPromise(2), createPromise(3)];
Promise.all(promises).then(results=>{
	let tbody= document.getElementById("output");
	tbody.innerHTML="";
	let maxTime=0;
	results.forEach(result=>{
		 let row = document.createElement("tr");
                row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time.toFixed(3)}</td>`;
                tbody.appendChild(row);
                maxTime = Math.max(maxTime, result.time);
	});
	 let totalRow = document.createElement("tr");
            totalRow.innerHTML = `<td>Total</td><td>${maxTime.toFixed(3)}</td>`;
            tbody.appendChild(totalRow);
})
