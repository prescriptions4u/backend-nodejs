
$(document).ready(function()
{


	$("#getPatient").click(function()
    {
  		


        // This should be inside the #getPatient click function!
        $.get( "/javascripts/patientData.json", function( data ) {

            var tmpl = $.templates("#patientTemplate");

            var rendered = tmpl.render(data);

            $('#getPatientForm').remove();

            $('#patientData').html(rendered);

        });

  		return false;
    });





});

