// Handle click on a product
function onClickProduct(event) {

    console.log(event);
    event.preventDefault();
    
    gtag('event', 'Home Product', { 'label': event.target.innerText });

    setTimeout(() => {
        window.location = event.target.href;
    }, 200);

}
