$(document).ready(function () {

  $("#f1").validate({
    rules: {
      firstname: {
        required: true,
        digits: false,
        pattern: true

      },
      lastname: {
        required: true,
        pattern: true
      },
      address1: {
        required: true,
        alphanumeric: true

      },
      address2: {
        required: true,
        alphanumeric: true
      },
      city: {
        required: true
      },
      state: {
        required: true
      },
      pincode: {
        required: true,
        minlength: 4,
        maxlength: 6
      },
      phone: {
        required: true,
        phonePattern: true
      },
      email: {
        email: true
      },
      about: {
        required: true
      },
      feedback: {
        maxlength: 15
      },
      suggestion: {
        maxlength: 15
      },
      gender: {
        required: true
      },
      check: {
        required: true
      }

    },

    messages: {
      firstname: {
        required: "Please enter first name",
        // numeric: "Enter valid name",

      },
      lastname: {
        required: "Please enter last name",
        numeric: "Enter valid name",

      },
      address1: {
        required: "Details required",

      },
      address2: {
        required: "Details required"
      },
      city: {
        required: "Details required"
      },
      state: {
        required: "Details required"
      },
      pincode: {
        required: "Details required",
        minlength: "Minimum 4-digit pin required",
        maxlength: "Maxiimum 6-digit pin required"
      },
      phone: {
        required: "Phone number required"
      },
      email: {
        email: "Enter valid email"
      },
      about: {
        required: "Select required"
      },
      feedback: {
        maxlength: "Maximum 15 characters only"
      },
      suggestion: {
        maxlength: "Maximum 15 characters only"
      },
      gender: {
        required: "Select required"

      },
      check: {
        required: "Select required"
      }

    },

    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents('.radio-container'));
      }
      else { // This is the default behavior 
        error.insertAfter(element);
      }
    }

  });



  $('#submitBtn').on('click', function () {
    var first_name = $('#fname').val();
    var last_name = $('#lname').val();
    var add1 = $('#add1').val();
    var add2 = $('#add2').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var pcode = $('#pin').val();
    var phonenum = $('#phone').val();
    var email = $('#email').val();
    var about = $('#about').val();
    var gen = $('input[name=gender]:checked').val();

    var count = $('#myTable tr').length;
    var display = '<tr class="child"><td>' + count + '</td><td>' + first_name + '</td><td>' + last_name + '</td><td>' + add1 + ',<br>' + add2 + ',<br>' + city + ',<br>' + state + '<br>pincode:' + pcode + '</td><td>' + phonenum + '</td><td>' + email + '</td><td>' + about + '</td><td>' + gen + '</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">update</a></td></tr>'
    // <a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td>'
    // // </tr> <td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>'

    if (first_name != "" && last_name != "" && add1 != "" && add2 != "" && city != "" && state != "" && pcode != "" && phonenum != "" && email != "" && about != "" && gen != "") {
      $('#myTable tbody').append(display);
    }

  });

  $(document).on('click', '.remCF1', function () {
    $(this).parent().parent().remove();
    $('#myTable tbody tr').each(function (i) {
      $($(this).find('td')[0]).html(i + 1);
    });

  });
  $(document).on('click', '.remCF1', function () {
    $(this).parent().parent().update();
    $('#myTable tbody tr').each(function (i) {
      $($(this).find('td')[0]).append(i + 0);
    });

  });


  $("#f1").submit(function (e) {
    e.preventDefault();
  });



});

jQuery.validator.addMethod("pattern", function (value, element) {
  return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
}, "Enter valid name")

jQuery.validator.addMethod("phonePattern", function (value, element) {
  return this.optional(element) || /^[6-9]\d{9}$/i.test(value);
}, "*invalid phone number")


jQuery.validator.addMethod("alphanumeric", function (value, element) {
  return this.optional(element) || /^[a-z," ",0-9]+$/i.test(value);
}, "**address");


//     $(document).on('click','.remCF1',function(){
//         $(this).parent().parent().remove();
//         $('#myTable tbody tr').each(function(i){
//          $($(this).find('td')[0]).html(i+1);
//         });
//         });

