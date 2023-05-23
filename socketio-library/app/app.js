const socket = io('ws://localhost:8080');

socket.on('message', message => {
    const el = document.createElement('li')
    el.innerHTML = message;
    document.querySelector('ul').appendChild(el);
})

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('input').onkeyup=(e)=>{
        if(e.keyCode==13){
            document.querySelector('button').click()
        }
    }
    
    document.querySelector('button').onclick = () => {
        const text = document.querySelector('input').value;
        socket.emit('message', text);
        document.querySelector('input').value = ''
    }
});

