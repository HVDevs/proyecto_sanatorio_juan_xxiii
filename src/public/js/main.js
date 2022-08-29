var parametros = {};
$.ajax({
    data: parametros,
    url: '/_index_top.php',
    type: 'post',
    success: function (response) {
        $("#contTop").html(response);
    }
});

var parametros = {};
$.ajax({
    data: parametros,
    url: '/_index_footer.php',
    type: 'post',
    success: function (response) {
        $("#contFooter").html(response);
    }
});

$(document).ready(function () {
    $('.modalContainer').load('modal.html');
    $('.modalContainer_prox').load('modal_prox.html');
    $('.modalContainer_wsp').load('modal_wsp.html');
    $('#modalStaff').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).data('dato-image');
        var position = $(e.relatedTarget).data('dato-position');
        var name = $(e.relatedTarget).data('dato-name');
        var cv = $(e.relatedTarget).data('dato-cv');
        var parametros = {
            "image": image,
            "position": position,
            "name": name,
            "cv": cv
        }
        $.ajax({
            type: 'POST',
            url: '/modal_staff.php',
            data: parametros,
            success: function (data) {
                $("#Container_staff").html(data);
            }
        });
    });
    $('#modalRrhh').on('show.bs.modal', function (e) {
        var title = $(e.relatedTarget).data('dato-title');
        var cont = $(e.relatedTarget).data('dato-cont');
        var parametros = {
            "title": title,
            "cont": cont
        }
        $.ajax({
            type: 'POST',
            url: '/mnu_rrhh/modal_rrhh.php',
            data: parametros,
            success: function (data) {
                $("#Container_rrhh").html(data);
            }
        });
    });
});

//Funciona para el collapse
$('.accordion-button').on('click', function () {
    $('.collapse').collapse('hide');
});

//Esta funcion es para la redimencion entre movil y web
//esconde el div derecho, y ajusta el acordion para movil
$(window).resize(function(){
    var element = document.getElementById('hidden-div')
    if($(window).width() < 979){
        for(var i = 1; i < 7; i++){
            $('#accordion-button'+i).href = '';
            $('#accordion-button'+i).attr('data-bs-target', '#collapse'+i)
        }
        element.style.display = 'none'
    }else{
        for(var i = 1; i < 7; i++){
            $('#accordion-button'+i).href = '#collapseItem'+i;
            $('#accordion-button'+i).attr('data-bs-target', '')
        }
        element.style.display = 'block'
    }
});

$(window).width(function(){
    var element = document.getElementById('hidden-div')
    if($(window).width() < 979){
        for(var i = 1; i < 7; i++){
            $('#accordion-button'+i).href = '';
            $('#accordion-button'+i).attr('data-bs-target', '#collapse'+i)
        }
        element.style.display = 'none'
    }else{
        for(var i = 1; i < 7; i++){
            $('#accordion-button'+i).href = '#collapseItem'+i;
            $('.accordion-button'+i).attr('data-bs-target', '')
        }
        element.style.display = 'block'
    }
});