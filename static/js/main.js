function hexToRGB(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}

function RGBToObject(str) {
	str = str.replace('rgb(', '').replace(')','');
	let arr = str.split(',');
	
	return {
		r: parseFloat(arr[0]),
		g: parseFloat(arr[1]),
		b: parseFloat(arr[2])
	}
}

document.body.style.backgroundColor = '#FF7B00';

state = 0;
function loop() {
	let data = RGBToObject(document.body.style.backgroundColor)
	
	$.ajax({
		url: `http://${window.location.host}/ml/color`,
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: (data, status) => {
			document.body.style.color = `rgb(${data.r*255}, ${data.g*255}, ${data.b*255})`
			window.requestAnimationFrame(loop)
		}
	});
	
	let sin = Math.sin(state + 5);
	data.r = sin * 255;
	
	sin = Math.sin(state + 2);
	data.g = sin * 255;
	
	sin = Math.sin(state + 7);
	data.b = sin * 255;
	
	state += 0.02;
	document.body.style.backgroundColor = `rgb(${data.r}, ${data.g}, ${data.b})`;
}
loop();
