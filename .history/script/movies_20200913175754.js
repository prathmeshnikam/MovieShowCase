 
var movieList = [];
var allMovieList = [];


 _getMovieList = () => { 
	var request = new XMLHttpRequest()
	request.open(apiRequrstType.GET, apiUrls.getMoviesList, true)

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			var finalData = JSON.parse(this.response);
			if (finalData.code == 0) {
				movieList = finalData.data.movieList;
				allMovieList = finalData.data.movieList;
				_addMultipleInService(movieList);
			} else {
				_showErrorMsg('Somthing Went Wrong!');
			}
		} else {
			_showErrorMsg('Unable to call api');
		}
	}

	// Send request
	request.send()
}

_deleteMovie = (id) => {
	var index = allMovieList.findIndex(function (o) {
		return o.id === id;
	})
	if (index !== -1) allMovieList.splice(index, 1);
 
	_deleteElements();  
	movieList = allMovieList;
	_addMultipleInService(movieList); 
}


_serchMovie = () => {
	var filterValue = document.getElementById("movieTitle").value;
	_deleteElements(); 
	movieList = allMovieList.filter(option => option.title.toLowerCase().startsWith(filterValue)); 
	_addMultipleInService(movieList);
}

 _addNewElements = () => {
	const container = document.createElement('div')
	container.setAttribute('class', 'container')
	app.appendChild(container)
}


_openPopup = () => {
	document.getElementById('addNewMovie').style.display = 'block';
}
  
_addNewMovie = () => { 
	let title = document.getElementById("title").value;
	let year = document.getElementById("year").value;
	let posterUrl = document.getElementById("posterUrl").value;
	if (title && year && posterUrl) {
		let newData = {
			title: title,
			year: year,
			posterUrl: posterUrl,
			id: _generateUniqueId()
		}
		_addViewInDomInService(newData); 
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

_closeModel = (popup_name) => {
	document.getElementById(popup_name).style.display = 'none';
}
 
 