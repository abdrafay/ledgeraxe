$(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });
    
});
$(document).ready(function(){
    $('table').wrap('<div class="tbl-responsive"></div>');
});
$('#datemask').inputmask('dd/mm/yyyy', {
    'placeholder': 'dd/mm/yyyy'
});
//Datemask2 mm/dd/yyyy
$('#datemask2').inputmask('mm/dd/yyyy', {
    'placeholder': 'mm/dd/yyyy'
});
//Money Euro
$('[data-mask]').inputmask();

//Date range picker
$('#reservation').daterangepicker();
//Date range picker with time picker
$('#reservationtime').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    locale: {
        format: 'MM/DD/YYYY hh:mm A'
    }
});
$(document).ready(function(){
    
    $(".cbx:checkbox:not(:checked)").each(function (){
        var chkrtHide = 'div .' + $(this).attr('class');    
            $(chkrtHide).fadeIn('slow');

    });
});



$(".tbl-filter:checkbox:not(:checked)").each(function () {
    var column = "table ." + $(this).attr("name");
    $(column).hide();
});
$(".tbl-filter:checkbox").click(function () {
    var column = "table ." + $(this).attr("name");
    $(column).toggle();
});
//

var fromLeft = ".invoice-object";
///
$(document).ready(function () {
    $(".multi-file-uploader").change(function () {
        if (typeof (FileReader) != "undefined") {
            var dvPreview = $(".multi-img-preview");
            dvPreview.html("");
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp|.xls)$/;
            $($(this)[0].files).each(function () {
                var file = $(this);
                if (regex.test(file[0].name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var img = $("<img />");
                        img.attr("style", "height:140px;width: 120px");
                        img.attr("src", e.target.result);
                        dvPreview.append(img);
                    }
                    reader.readAsDataURL(file[0]);
                } else {
                    alert(file[0].name + " is not a valid image file.");
                    dvPreview.html("");
                    return false;
                }
            });
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    });
});//


//
// $(document).ready(function(){
//     $( "table" ).wrap( "<div class='table-responsive'></div>" );
// });
// Show Input element
$('.edit').click(function () {
    $('.txtedit').hide();
    $(this).next('.txtedit').show().focus();
    $(this).hide();
});
// $('.cbx').click(function(){
//       if($('.cbx').checked){
//       $('.rate-hide-show').show()
//     }   
//     else{
//         $('.rate-hide-show').hide()
//     }
// });
     
// Save data
$(".txtedit").focusout(function () {

    // Get edit id, field name and value
    var id = this.id;
    var split_id = id.split("_");
    var field_name = split_id[0];
    var edit_id = split_id[1];
    var value = $(this).val();

    // Hide Input element
    $(this).hide();

    // Hide and Change Text of the container with input elmeent
    $(this).prev('.edit').show();
    $(this).prev('.edit').text(value);
});





// Table Edit //
function toggle(selectAll) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != selectAll)
            checkboxes[i].checked = selectAll.checked;
    }
}
// 

// var $legalNameAsCompany = $('#lgl-name-as-cmpny'),
//     $legalName = $('#lgl-name');
// $state.change(function() {
//     if ($legalNameAsCompany.val() == 'other') {
//         $legalName.removeAttr('disabled');
//     } else {
//         $legalName.attr('disabled', 'disabled').val('');
//     }
// }).trigger('change');
//

// $(document).ready(function(){
//     $(".lgl-name-as-cmpny").toggle(function(){
//         (".lgl-name").removeAttr("disabled");
//     });
// })


// var trow = document.getElementById("#trow");
// $(document).ready(function(){
//     $(".add-line").click(function(){
//         $(".inv-table tbody").append(trow);
//     });
// });

//
// $(document).ready(function(){
//     $("#show-btn").click(function(){
//         $("body").toggleClass("v-com");
//     });

//     $("#close-btn").hide();	
//       $("#show-btn").click(function(){
//       $(".page-2").removeClass("hide");
//       $(".page-2").addClass("slideInDown");
//        $(".page-2").removeClass("slideInUp");
//     $("#close-btn").show();
//     });


//     $("#close-btn").click(function(){
//       $(".page-2").addClass("hide");
//       $(".page-2").addClass("slideInUp");
//       $(".page-2").removeClass("slideInDown");
//       $("#close-btn").hide();
//     });

// });

//
//


//
function changeimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploaded-img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
};
$(document).ready(function () {
    $('.search-select').selectize({
        sortField: 'text'
    });
});
$(document).ready(function () {
    $('#search-select-1').selectize({
        sortField: 'text'
    });
});
// $(document).ready(function(){
//     $('table').addClass('table-responsive');
// });
//
//

//

$(document).ready(function (e) {
    $("#add").click(function addList() {
        var sno = $('.sno').length + 1;
        var ab = $;


        $(".inv-table tbody")
            .append('<tr id="trow" class="trow"><td style="width: 5px;" class="sno">' + sno + '</td> <td><input type="date" style="width: 150px;" name="" id="" class="form-control"></td>' +
                '<td><select class="select2bs4" style="width: 100%;"><option selected="selected" disabled></option><option value=""><a href="">Add New</a></option><option>Sales</option><option>Web</option></select></td> ' +
                '<td></td>' + '<td><input type="text" class="form-control"></td>' + '<td><input type="number" class="form-control"></td>' + '<td><input type="number" class="form-control"></td>' + '<td><input type="number" class="form-control"></td>' + '<td><select class="select2bs4" style="width:100%"><option selected="selected" disabled></option><option>abc(0%)</option></select></td>' + '<td><a href="#1" class="del-row">Delete</a></td></tr>');
                
                    //Initialize Select2 Elements
                    
                    //Initialize Select2 Elements
                    $('.select2bs4').select2({
                        theme: 'bootstrap4'
                    });
                
            });
});
$("#remove").click(function () {
    $(".trow").remove();
});
$(".del-row").click(function () {
    $("#del-trow").remove();
});

$(document).ready(function () {
    $(".add-notes-to-sheet").click(function () {
        $(".notes-adding-area").toggleClass("hide");
    });
});


