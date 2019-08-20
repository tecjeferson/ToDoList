function capturaItem() {
    let data = []
    const ul = document.getElementById('ul')
    const contentAdded = document.getElementById('contentAdded').value

    const li = document.createElement('li')
    const list = ul.appendChild(li)
    const newItem = list.innerText = contentAdded


    document.body.appendChild(newItem)
   
}