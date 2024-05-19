let close = document.getElementById('closeBox');
let box = document.getElementById('box');
let open = document.getElementById('openButton');

close.addEventListener("click", function() {
    box.style.display = 'none';
})
open.addEventListener("click", function() {
    box.style.display = 'flex';
})