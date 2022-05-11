let modal = document.getElementById('my_modal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function() {
    if(Event.target == modal) {
        modal.style.display = 'none';
    }
}

const changeHandler = e => {
    const value = e.value;
    e.value = value.replace(/\D/g, '');
}
