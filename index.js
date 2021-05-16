// run this to get Jquery available
$("<style type='text/css'> .isNotActive{ display: none; font-weight:bold;} </style>").appendTo("head")
javascript: (function (e, s) {
    e.src = s;
    e.onload = function () {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')
// document. ready to wait for jquery to be ready 
$(document).ready(function () {
    // Extracts the number of items in the cart, the cart total, and the item images from the page. Store them in variables.
    // saving the total of items in the cart to itemText
    const totalItemCost = $('.subtotal').text()
    // grabbing total number of items from the cart
    const totalItems = $(".number-items").text()

    // Overlay and Modal divs
    const overlay = $('<div id="overlay"></div>');
    // create modal divs
    const modal = $("<div id='modal'></div>");
    const modalHeader = $("<div id='modal-header'></div>")
    const title = $("<h1 id='title'></h1>")
    const modalBody = $("<div id='modal-body'><div>")
    // modal body content
    const numItemsCartDiv = $("<div id='numItemsCartDiv'></div>")
    const cartTotalH1 = $("<div id='cartTotalH1'></div>")
    const closeModalDiv = $("<button id='close-modal'></button>")
    const shoppingCartBtnDiv = $("<button id='shopping-cart'></button>")

    // set the text properties of the modal
    shoppingCartBtnDiv.css({
        backgroundColor: "green",
        height: "80px",
        width: "80px",
    })

    cartTotalH1.css({
        fontFamily: "serif",
        fontSize: "1.75rem",
        fontWeight: "bold"
    })

    title.text("Kohls Shopping List")
    closeModalDiv.text("x")
    modalBody.text(`
        Product 1:
        Product 2:
    `)
    numItemsCartDiv.text(`Total Items: ${totalItems}`)
    cartTotalH1.text(`Cart Total: ${totalItemCost}`)
    shoppingCartBtnDiv.text("Shopping Cart")

    // setting href attribute for shopping Cart
    shoppingCartBtnDiv.attr("href", "https://www.kohls.com/checkout/shopping_cart.jsp")

    // passing the style properties for the overlay to a css object
    // Darkened background for the overlay to sit on
    numItemsCartDiv.css({
        fontFamily: "serif",
        fontSize: "1.75rem",
        fontWeight: "bold"
    })

    overlay.css({
        position: "fixed",
        display: "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: 0.5,
        zIndex: 100
    })
     // set the css for the modal
     modal.css({
        position: "fixed",
        display: "none",
        top: "50%",
        left: "50%",
        transform: 'translate("-50%", "-50%")',
        border: "1px solid black",
        borderRadius: "10px",
        zIndex: 110,
        backgroundColor: "white",
        height: "300px",
        width: "500px",
        maxWidth: "80%",
        opacity: 1
    })
    // modal header styles
    modalHeader.css({
        padding: "10px, 15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid black"
    })
    // modal title styles
    title.css({
        fontFamily: "serif",
        fontSize: "2.25rem",
        fontWeight: "bold"
    })

    closeModalDiv.css({
        cursor: "pointer",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "1.25rem",
        fontWeight: "bold"
    })
    
    modalBody.css({
        padding: "10px, 15px"
    })
    // append the modal to the document body
    overlay.appendTo(document.body)
    modal.appendTo($("#overlay"))
    modalHeader.appendTo(modal)
    title.appendTo(modalHeader)
    closeModalDiv.appendTo(modalHeader)
    modalBody.appendTo(modal)
    numItemsCartDiv.appendTo(modalBody)
    cartTotalH1.appendTo(modalBody)
    shoppingCartBtnDiv.appendTo(modalBody)

    // event listener to close modal button
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'close-modal'){
              console.log("close Modal btn clicked")
              console.log(e.target)
              console.log(e.target.id)
              overlay.css({ 'display' : 'none'});
              modal.css({ 'display' : 'none'});
         }
     });

     // event listener to go to shopping cart page
     document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'shopping-cart'){
            e.preventDefault()
              console.log("Going to Shopping Cart")
              console.log(e.target)
              console.log(e.target.id)
         }
     });
     
    // Creates a trigger that activates when the user scrolls into the bottom 10% of the page.
    $(window).scroll(function () {
        // The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            // clear the overlay and modal display none properties
            overlay.css({ 'display' : ''});
            modal.css({ 'display' : ''});
        }
    });
})
