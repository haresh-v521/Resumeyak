/**
 * Static Actions
 */

/** Tooltip active on click */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
	$('.resume_list_item span.icon').click(function(e) {
		var par=$(this).parent();
		var par_first=$(par).parent().attr("id");
		$('#'+par_first+ ' .resume_list_options').fadeToggle(400);
		
    });
	$('span.icon_menu').click(function(e) {
		$('.main_navigation').fadeToggle(400);
		
    });
	$('.has_sub_nav > a').click(function(e) {
        $('.resume_name_sub_menu').fadeToggle(400);
    });
	$('.icon_close').click(function(e) {
        $('.alert_yak_finder').fadeOut(500);
    });
	/*$('.finder_head button.btn').click(function(e) {
		var tab_id=$(this).parent().attr("id");
		if($('#'+tab_id).hasClass('finder_active')){
		$('#'+tab_id).removeClass('finder_active');
		}else{
		$('#'+tab_id).addClass('finder_active');
		}
    });*/
	
	$('.collapse').on('show.bs.collapse', function () {
		$(this).parent().addClass('finder_active');
});
$('.collapse').on('hide.bs.collapse', function () {
  $(this).parent().removeClass('finder_active');
});
});

/*........Add Remove Minor fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_minor_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
           addMinorField();
    });  
    $('.edu_fields_section_more').on("click",".remove_minor_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
var x=1;
function addMinorField(){
	 x++; //counter increment
			
            $('.edu_fields_section_more').append("<div class='minor-field-section no_label_left' style='margin-left: 108px;'><input type='text' value='' name='minor-field-"+ x + "' class='minor-text-field' onKeyPress='if(event.keyCode==13){addMinorField();}' /><span class='icon remove_minor_field'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
}
/*........Add Remove Honors fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var y = 1; //initialize counter for text box
    $('.add_more_hononrs_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
         addHonorsField();   
       // }
    });  
    $('.edu_honors_fields_more').on("click",".remove_honor_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); y--;
    })
});
var y=1
function addHonorsField(){
	y++; //counter increment
            $('.edu_honors_fields_more').append("<div class='minor-field-section' style='width:100%;'><input type='text' value='' name='honor-field-"+ y + "' class='minor-text-field' onKeyPress='if(event.keyCode==13){addHonorsField();}' /><span class='icon remove_honor_field'><i class='fa fa-minus'></i></span></div></div>"); //add input field
}
/*........Add Remove Socities fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_socities_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
		addSocitiesField();
                   // }
    });  
    $('.edu_socities_fields_more').on("click",".remove_socity_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); z--;
    })
});
var z=1
function addSocitiesField(){
	z++; //counter increment
            $('.edu_socities_fields_more').append("<div class='minor-field-section' style='width:100%;'><input type='text' value='' name='society-field-"+ z + "' class='minor-text-field' onKeyPress='if(event.keyCode==13){addSocitiesField();}' /><span class='icon remove_socity_field'><i class='fa fa-minus'></i></span></div></div>"); //add input field

}
/*........Add Remove Honors More Page fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_honors_awards_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
            x++; //counter increment
			
            $('.honours_award_section_more').append("<div class='new_more_fields'><div class='col-5 left_more_fields'><select name='job_name_"+ x +"' class='select-item select-item-job-name' style='-webkit-appearance: none;'><option value='0' class='label_name'>Type</option></select></div><div class='col-7 minor-field-section right_field_more'><input type='text' value='' name='minor-field-"+ x +"' class='minor-text-field' /><span class='icon icon-minus remove_honors_awards_fields'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
    });  
    $('.honours_award_section_more').on("click",".remove_honors_awards_fields", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});

/*........Add Remove Lincenses Certificate More Page fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_licensese_certificare_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
            x++; //counter increment
			
            $('.licensese_certificare_section_more').append("<div class='new_more_fields'><div class='col-5 left_more_fields'><select name='job_name_"+ x +"' class='select-item select-item-job-name' style='-webkit-appearance: none;'><option value='0' class='label_name'>Type</option></select></div><div class='col-7 minor-field-section right_field_more'><input type='text' value='' name='minor-field-"+ x +"' class='minor-text-field' /><span class='icon icon-minus remove_licensese_certificare_fields'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
    });  
    $('.licensese_certificare_section_more').on("click",".remove_licensese_certificare_fields", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});

/*........Add Remove Lincenses Certificate More Page fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_professional_civil_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
            x++; //counter increment
			
            $('.professional_civil_section_more').append("<div class='new_more_fields'><div class='col-5 left_more_fields'><select name='job_name_"+ x +"' class='select-item select-item-job-name' style='-webkit-appearance: none;'><option value='0' class='label_name'>Type</option></select></div><div class='col-7 minor-field-section right_field_more'><input type='text' value='' name='minor-field-"+ x +"' class='minor-text-field' /><span class='icon icon-minus remove_professional_civil_fields'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
    });  
    $('.professional_civil_section_more').on("click",".remove_professional_civil_fields", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});


/*........Add Remove Publication More Page fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_publicition_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
            x++; //counter increment
			
           $('.publicition_section_more').append("<div class='minor-field-section' style='width:100%;'><div class='publications_fields_left'><p>Citation</p><input type='text' name='pub-field-"+ x +"' class='minor-text-field' /><div class='job_name_finder'><select name='type_pub_"+ x +"' class='select-item select-item-job-name input mouseLeave' style='-webkit-appearance: none;'><option value='0' class='label_name'>Type</option></select></div></div><div class='publication_icon_more'><span class='icon icon-minus remove_publicition_fields'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
    });  
    $('.publicition_section_more').on("click",".remove_publicition_fields", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});

/*........Add Remove Patents More Page fields.............*/
$(document).ready(function() {
    //var max_fields_limit      = 8; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_patents_fields').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        //if(x < max_fields_limit){ //check conditions
            x++; //counter increment
			
           $('.patents_section_more').append("<div class='minor-field-section' style='width:100%;'><div class='publications_fields_left'><p>Patent Title</p><input type='text' name='patents-title-field-"+ x +"' class='minor-text-field' /><p>Patent Holders</p><input type='text' name='patents-holder-field-"+ x +"' class='minor-text-field' /><div class='job_name_finder'><select name='type_patents_"+ x +"' class='select-item select-item-job-name input mouseLeave' style='-webkit-appearance: none;'><option value='0' class='label_name'>Type</option></select></div></div><div class='publication_icon_more'><span class='icon icon-minus remove_patents_fields'><i class='fa fa-minus'></i></span></div></div>"); //add input field
       // }
    });  
    $('.patents_section_more').on("click",".remove_patents_fields", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
    })
});

/*........Add Remove new resume fields.............*/
$(document).ready(function() {
    $('.add_new_resume_field').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
           $('.my_resume_list_items').append("<div class='new-resume-fields_container_section'><h3 class='new_resume_heading'>New Resume <span class='remove_new_resume_input_secton'><i class='fa fa-times' aria-hidden='true'></i></span></h3><div class='col-12 resume_field_container'><div class='col-md-6 col-sm-12 group mr-2 inputP55' style='height: 50px;'><div><input type='text' class='input_text_info mouseLeave'><span class='highlight'></span> <span class='bar'></span><label class='label_name label_name_color'>Resume Name:</label></div></div><div class='col-md-6 col-sm-12 group mr-2 inputP55' style='height: 50px;'><div><input type='text' class='input_text_info mouseLeave'><span class='highlight'></span> <span class='bar'></span><label class='label_name label_name_color'>Position</label></div></div></div><div class='text-center' style='display:block; margin:15px auto 30px auto;'><button class='btn1 btn-rounded btn-next mt-4'><span style='margin-left: -14px;'>Next</span> <span class='pl-5'><i class='next-icon fas fa-chevron-right'></i></span></button></div></div>"); //add input field
	$('.add_new_resume_field').hide('fast');
    });  
    $('.my_resume_list_items').on("click",".remove_new_resume_input_secton", function(e){ //user click on remove text links
        e.preventDefault(); $('.new-resume-fields_container_section').remove(); $('.add_new_resume_field').show('fast');
    })
});



$(document).ready(function() {
    $('.visible_section_setings').click(function(e) {
        if($(this).is('.visible_section_sidebar')){
			$(this).addClass('invisible_section_sidebar');
			$(this).removeClass('visible_section_sidebar');
		}else{
			$(this).addClass('visible_section_sidebar');
			$(this).removeClass('invisible_section_sidebar');
		}
    });
});

/*........Add New Content Section in Resume.............*/
$(document).ready(function() {
       $('#resune_new_section_button').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
           $('#resume_new_section_extra_content').append("<div id='headingSix' class='card-header' style='padding: 0px;'><span data-toggle='collapse' data-target='#collapseSix' aria-expanded='true' aria-controls='collapseSix' class='heading_tab_section_sidebar' style='display: block; padding: 10px;'>New Section</span></div><div id='collapseSix' aria-labelledby='headingSix' data-parent='#accordionSidebar' class='collapse show' style=''><div class='card-body'><div class='group mr-2 input_yak_logo'><div><input maxlength='100' type='text' name='skill_title' id='skill_title' placeholder='New Section Title' class='input mouseLeave' style='padding-right: 40px;'><span class='highlight'></span><span class='bar'></span><label class='label_name'>Section Title</label></div><span><img src='http://test.resumeyak.com/images/bg/logo.png' alt='' data-original-title='null' class='small_logo has-tooltip v-tooltip-open'><div aria-hidden='false' x-placement='top' class='tooltip' style='position: absolute; will-change: transform; top: -30px; right: -128px; display: none; visibility: hidden;'><div class='tooltip-arrow' style='left: 25px;'></div><div class='tooltip-inner'>Skills</div></div></span></div><div class='group mr-2 input_yak_logo'><div><textarea name='skill_desc' id='skill_desc' placeholder='Section Description' class='input mouseLeave' style='padding-right: 40px;'> </textarea></div><span><img src='http://test.resumeyak.com/images/bg/logo.png' alt='' data-original-title='null' class='small_logo has-tooltip v-tooltip-open'><div aria-hidden='false' x-placement='top' class='tooltip' style='position: absolute; will-change: transform; top: -30px; right: -128px; display: none; visibility: hidden;'><div class='tooltip-arrow' style='left: 25px;'></div><div class='tooltip-inner'>Skills Section Description</div></div></span></div><p>Add content to this section</p><div class='group mr-2'><select name='skill_select_type' id='skill_select_type' class='select-item input mouseLeave' style='-webkit-appearance: none;'><option value='1'>Content Type</option></select></div></div></div>"); //add input field
       $('#resune_new_section_button').hide();
	   
    });  
});
$(document).ready(function(e) {
	$('.input_yak_logo_label_shrink > div > .input').focusin(function(e) {
        $(this).addClass('activeInput');
    });
    $('.input_yak_logo_label_shrink > div > .input').focusout(function(e) {
        var value_input=$('.activeInput').val();
		if(value_input!=""){
			$('.activeInput ~ .label_name').addClass('mouseleavefill');
			$(this).removeClass('activeInput');
		}else{
			$('.activeInput ~ .label_name').removeClass('mouseleavefill');
			$(this).removeClass('activeInput');
			//alert('empty');
		}
    });
});
$(document).ready(function(e) {
	$('.input_text_info').focusin(function(e) {
        $(this).addClass('activeInput');
    });
    $('.input_text_info').focusout(function(e) {
        var value_input=$('.activeInput').val();
		if(value_input!=""){
			$('.activeInput ~ .label_name').addClass('mouseleavefill');
			$(this).removeClass('activeInput');
		}else{
			$('.activeInput ~ .label_name').removeClass('mouseleavefill');
			$(this).removeClass('activeInput');
			//alert('empty');
		}
    });
});

$(document).ready(function(e) {
    $('#preview-tab').click(function(e) {
        $('#resume_complete_preview_container').fadeIn(600);
    });
	$('.close_pop_up i').click(function(e) {
        $('#resume_complete_preview_container').fadeOut(600);
    });
});

/*.......Upgrade Form pop up.............*/
$(document).ready(function(e) {
    $('.get_upgade_subscription_btn').click(function(e) {
        $('.subscription_plans_list').hide();
		$('.subscription_upgrade_form_container').show();
		$('.upgrade_plans_list').scrollTop( 0 );
    });
	$('.close_pop_up_upgrade_form').click(function(e) {
        $('.upgrade_popup_container').hide();
		$('.subscription_upgrade_form_container').hide();
		$('.subscription_plans_list').show();
		$('body').css('height','auto');
		$('body').css('overflow','visible');
    });
	$('.show_upgrade_popup_btn').click(function(e) {
        $('.upgrade_popup_container').show();
		$('body').css('height','100vh');
		$('body').css('overflow','hidden');
    });
});

/*Funcational and Chronological  button Classes Script*/
$(document).ready(function(e) {
    $('.btnonlyBorder').click(function(e) {
        $(this).addClass('btnonlyBorder_FillSolid');
		$(this).removeClass('btnonlyBorder');
    });
	$('.btnPlusButton_White').click(function(e) {
        $(this).addClass('btnPlusButton');
		$(this).removeClass('btnPlusButton_White');
    });
});

function DisplayChange(value){
	if(value == 'Qualification Statement'){
		$('.qualification_statement_headline_section').fadeIn('fast');
		$('.endorsment_headline_section').fadeOut('fast');
	}else{
		$('.endorsment_headline_section').fadeIn('fast');
		$('.qualification_statement_headline_section').fadeOut('fast');
		
	}
}

/*.......Custom Range Input............*/
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).next().attr('value');
      $(this).html(value + ' pt');
    });

    range.on('input', function(){
      $(this).prev(value).html(this.value + ' pt');
    });
  });
};

rangeSlider();

/*....... Create password pop up.............*/
$(document).ready(function(e) {
    $('.skip_create_password').click(function(e) {
        $('.pop_up_setpassword').fadeOut('slow');
    });
	$('.edit_email_btn').click(function(e) {
        $('.input_text_info').attr("readonly", false);
		$('.small_logo_email').fadeIn('slow');
    });
});

// This code empowers all input tags having a placeholder and data-slots attribute
    document.addEventListener('DOMContentLoaded', () => {
        for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
            const pattern = el.getAttribute("placeholder"),
                slots = new Set(el.dataset.slots || "_"),
                prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
                first = [...pattern].findIndex(c => slots.has(c)),
                accept = new RegExp(el.dataset.accept || "\\d", "g"),
                clean = input => {
                    input = input.match(accept) || [];
                    return Array.from(pattern, c =>
                        input[0] === c || slots.has(c) ? input.shift() || c : c
                    );
                },
                format = () => {
                    const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                        i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                        return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
                    });
                    el.value = clean(el.value).join``;
                    el.setSelectionRange(i, j);
                    back = false;
                };
            let back = false;
            el.addEventListener("keydown", (e) => back = e.key === "Backspace");
            el.addEventListener("input", format);
            el.addEventListener("focus", format);
            el.addEventListener("blur", () => el.value === pattern && (el.value=""));
        }
    });