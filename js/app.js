
let form = document.querySelector('form')

let body = document.querySelector('body')

let ul = document.querySelector('ul')

let sBtn = document.querySelector('.select_all')







let todos = []


let all = document.querySelector('.all')

all.addEventListener('click', () => {

	todo()

})
let btn_disabled = () => {
	if(todos.length > 0){
		sBtn.disabled = false
	}
	else{
		sBtn.disabled = true
	}
}
let lFilter = () => {
	const result = todos.filter(done => done.done)
	ul.innerHTML = ''
	for(let key of result){
		ul.innerHTML += `<li draggable="true" id="${key.id}" class="${key.done ? 'done' : ''}">${key.text}<span class="close" style="float:right; display:inline-block;">&#10006</span></li>`
	}

}

ul.addEventListener('click', (e) => {
	let index = e.target.parentNode.id;
	const id = e.target.id;
    for(let i in todos) {
        if(todos[i].id == id) {
            if(todos[i].done == true){
            	todos[i].done = false
            }
            else if(todos[i].done == false){
            	todos[i].done = true
            }
        }
		else if(todos[i].id == index) {
			todos.splice(i, 1);
		}
    }
    btn_disabled()
    todo()
    // lFilter()
})


let completed = document.querySelector('.completed')

completed.addEventListener('click', () => {
	lFilter()
})

let todo = () => {
	ul.innerHTML = ''
	for(let key of todos){
		ul.innerHTML += `<li draggable="true" id="${key.id}" class="${key.done ? 'done' : ''}">${key.text}<span class="close" style="float:right; display:inline-block;">&#10006</span></li>`
	}
	let footer = document.querySelector('.footer')
	let total = document.querySelector('.total')

	if(todos.length > 0){
		footer.style.display = 'block'
		total.innerHTML = `total: ${todos.length}`
	}
	else{
		footer.style.display = 'none'
	}
}

let value;
sBtn.addEventListener('click', () => {
	if(value === true) {
		value = !value;
		for(val of todos){
			val.done = false
		}
	} else {
		value = !value;
		for(val of todos){
			val.done = true
		}
	}
	todo()
	
})



let i = 1;
form.addEventListener('submit', (e) => {
	e.preventDefault()

	let input = document.querySelector('input')
	if(input.value){

		todos.push({
			id: i++,
			done: false,
			text: input.value

		})
		todo()
	}

	btn_disabled()
	input.value = ''


})

let t = document.querySelector('.time')

t.innerHTML = new Date().toLocaleString()

setInterval(() => {
	t.innerHTML = new Date().toLocaleString()
}, 0)
