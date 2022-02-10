// document.addEventListener("click", function(e) {
//     if (e.target.classList.contains("gallery-item")) {
//         const src = e.target.getAttribute("src").replace("-th", "").replace("img-", "photo-");
//         document.querySelector(".modal-img").src = src;
//         const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
//         myModal.show();
//     }
// })

$('.modalGallery__img').click(function(e) {
    var img = e.target.src;
    var modal = '<div class="modal" id="modal"><img src="' + img + '" class="modal__img"><div class="modal__shut" id="modal__shut">X</div></div>'
    $('body').append(modal);
    $('#modal__shut').click(function() {
        $('#modal').remove();
    })
});

$(document).keyup(function(e) {
    if (e.which == 27) {
        $('#modal').remove();
    }
})