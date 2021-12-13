$(document).ready(function () {
   $(".dropdown-submenu a").on("click", function(e) {
       $(this).next("ul").toggleClass("show");
       e.stopPropagation();
       e.preventDefault();
   })

   $(".navbar form .form-control").on("keyup", function() {
       $(".navbar .x-clear-icon").show();
   })

   $(".navbar .x-clear-icon").on("click", function() {
       $(".navbar form .form-control").val(null).focus();
       $(".navbar .x-clear-icon").hide();
   })

   // Enable bootstrap tooltip
   const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="toggle"]'))
   const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl)
   })

   $('[data-bs-toggle="tooltip"]').tooltip();
});