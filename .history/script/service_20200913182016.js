 
 window._service_apiUrl = {
    getMoviesList: "https://run.mocky.io/v3/eda3bc72-1f38-462c-82d8-df0a3045d861"
}

window._service_apiRequrstType = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

window._service_addMultipleInService = function _service_addMultipleInService(allData){
    const app = document.getElementById('root')
	const container = document.createElement('div')
	container.setAttribute('class', 'container')
	app.appendChild(container)

	allData.forEach((movie) => { 
		const card = document.createElement('div')
		card.setAttribute('class', 'card')

		const h3 = document.createElement('h3')
		h3.textContent = movie.title

		const h4 = document.createElement('h4')
		h4.textContent = movie.year

		const logo = document.createElement('img')
		logo.src = movie.posterUrl

		var deleteButton = document.createElement("input");
		deleteButton.type = 'button';
		deleteButton.value = 'Delete';
		deleteButton.id = movie.id;
		deleteButton.className = 'button';
		deleteButton.onclick = function () {
			_deleteMovie(movie.id);
		};

		container.appendChild(card)
		card.appendChild(logo)
		card.appendChild(h3)
		card.appendChild(h4)
		card.appendChild(deleteButton)
	})
}

window._addViewInDomInService = function _service_addMultipleInService(data){
    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h3 = document.createElement('h3')
    h3.textContent = data.title

    const h4 = document.createElement('h4')
    h4.textContent = data.year

    const logo = document.createElement('img')
    logo.src = data.posterUrl

    var deleteButton = document.createElement("input");
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.id = data.id;
    deleteButton.className = 'button';
    deleteButton.onclick = function () {
        _deleteMovie(data.id);
    };
    container.appendChild(card)
    card.appendChild(logo)
    card.appendChild(h3)
    card.appendChild(h4)
    card.appendChild(deleteButton)
}

window._deleteElements = function _deleteElements(){
	var element = document.getElementsByClassName("container"),
		index;
	for (index = element.length - 1; index >= 0; index--) {
		element[index].parentNode.removeChild(element[index]);
	}
}

window._generateUniqueId = function _generateUniqueId(){
	let stringFourChar = () => {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return stringFourChar() + '-' + stringFourChar() + '-' + stringFourChar() + stringFourChar();
}

window._showErrorMsg = function _showErrorMsg(msg){
    const errorMessage = document.createElement('marquee')
	errorMessage.textContent = msg;
	app.appendChild(errorMessage)
}