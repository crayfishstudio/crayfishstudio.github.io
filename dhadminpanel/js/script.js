document.querySelector('img').addEventListener('click', function (event) {
    event.preventDefault();
    zoom.to({
        element: event.target
    });
});
