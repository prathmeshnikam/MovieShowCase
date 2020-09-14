 
var movieList = [];
var allMovieList = [];

// Call _getMovieList Function in onload
 _getMovieList = () => { 
	var request = new XMLHttpRequest()
	request.open(_service_apiRequrstType.GET, _service_apiUrl.getMoviesList, true)

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			var finalData = JSON.parse(this.response);
			if (finalData.code == 0) {
				movieList = finalData.data.movieList;
				allMovieList = finalData.data.movieList;
				_service_addMultipleInService(movieList);
			} else {
				_service_showErrorMsg('Somthing Went Wrong!');
			}
		} else {
			_service_showErrorMsg('Unable to call api');
		}
	}

	// Send request
	request.send()
}

// Delete Movie using Id
_deleteMovie = (id) => {
	var index = allMovieList.findIndex(function (o) {
		return o.id === id;
	})
	if (index !== -1) allMovieList.splice(index, 1);
 
	_service_deleteElements();  
	movieList = allMovieList;
	_service_addMultipleInService(movieList); 
}

// Serch movie based on user type in serch box
_serchMovie = () => {
	var filterValue = document.getElementById("movieTitle").value;
	_service_deleteElements(); 
	movieList = allMovieList.filter(option => option.title.toLowerCase().startsWith(filterValue)); 
	_service_addMultipleInService(movieList);
}

 _addNewElements = () => {
	const container = document.createElement('div')
	container.setAttribute('class', 'container')
	app.appendChild(container)
}

// This will open poup when user click on Add movie Button 
_openPopup = () => {
	document.getElementById('addNewMovie').style.display = 'block';
}

//Call on add new movie button which is in popup
_addNewMovie = () => { 
	let title = document.getElementById("title").value;
	let year = document.getElementById("year").value;
	let posterUrl = document.getElementById("posterUrl").value;
	if (title && year && posterUrl) {
		let newData = {
			title: title,
			year: year,
			posterUrl: posterUrl,
			id: _service_generateUniqueId()
		}
		_service_addViewInDomInService(newData); 
		allMovieList.push(newData);
		
		document.getElementById('addNewMovie').style.display = 'none';
		document.getElementById('congratsMsg').style.display = 'block';
		document.getElementById("title").value = ''; 
		document.getElementById("year").value = '';
		document.getElementById("posterUrl").value = '';
	} else {
		alert("Please fill all fileds")
	} 
}

//Close poup based on popup name
_closeModel = (popup_name) => {
	document.getElementById(popup_name).style.display = 'none';
}
 
 