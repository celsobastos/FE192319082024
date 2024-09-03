var doc = document;
var reparos = doc.querySelectorAll('.service-item.row .servicos-item');
reparos.forEach(item => {
    item.addEventListener('click', event => {
        const children = event.target.parentNode.parentNode.children;
        Array.prototype.forEach.call(children, element => {
            element.firstElementChild.classList.remove('format');
        });
        event.target.classList.toggle('format')
    });
});
