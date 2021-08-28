console.log('Message from src/main.js : hello!')


function $( selectors ) {
    return document.querySelector( selectors )
}

function showModal() {
    $( '#navLinksPanel' ).style.display = 'block'
}

function hideModal() {
    $( '#navLinksPanel' ).style.display = 'none'
}