/*
Author : Prasanna Kumar Avvaru
Version : 1.0
Date : 06/01/2021
Description : This plugin will add search, check box options for select input field.
*/

(function ($) {

	$.fn.searchSelect = function(){
		var mainThis = this;
		var elementId = mainThis.attr('id');
		var elementClass = (typeof mainThis.attr('class') != 'undefined') ? mainThis.attr('class') : '';
		var elementPlaceHolder = (typeof mainThis.attr('placeholder') != 'undefined') ? mainThis.attr('placeholder') : 'Search';
		this.addClass('rootElement');
		this.hide();
		mainThis.attr('id',elementId+'_master');
		mainThis.removeClass(elementClass);
		mainThis.after('<div class="selectContainer_'+elementId+'"><input type="text" class="'+elementClass+'" id="'+elementId+'_visible" name="search" value="" placeholder="'+elementPlaceHolder+'" readonly="readonly" /><input type="text" value="" id="'+elementId+'" style="display : none;" />');
		var options = '<div class="selectOptionsDiv option_'+elementId+'" style="border: 1px solid darkgray;"><input type="text" name="" value="" class="form-control" id="'+elementId+'_search" placeholder="Search" style="border-radius: 0px;"><p class="selectAll" style="border-color: #777777; border-width: thin; padding: 10px 0px 10px 10px; border-bottom: 1px solid #cccccc; font-weight: 700;"><input type="checkbox" value="all" class="selectall_'+elementId+'" />&nbsp;&nbsp;Select all</p><div style="padding-left: 10px;">';
		mainThis.find('option').each(function(index, el) {
				options = options+'<p class="searchData_'+elementId+'"><input type="checkbox" value="'+$(this).val()+'" class="searchDataCheckBox_'+elementId+'" />&nbsp;&nbsp;'+$(this).text()+'</p>';
		});
		options = options+'</div></div></div>';

		var mainElement = $('#'+elementId+'_visible');

		$(mainElement).after(options);

		var mainSearch = $('#'+elementId+'_search');
		mainSearch.keyup(function(event) {
			var searchValue = this.value;
			$('.searchData_'+elementId).each(function(){
				var para = $(this);
				var paraValue = para.text();

				if(paraValue.toLowerCase().search(searchValue.toLowerCase()) >= 0)
				{
					para.css('display','');
				}
				else
				{
					para.css('display','none');
					//para.children('input').prop('checked',false);
				}
				
			});
		});

		$('#'+elementId+'_visible').click(function(){
			$('#'+elementId+'_search').val('');
			$('.searchData_'+elementId).removeAttr('style');
			$('.option_'+elementId).show();
		});

		$('.searchDataCheckBox_'+elementId).click(function(){
			var selectValues = [];
			var selectText = [];
			var selectAllCheck = true;

			$('.searchDataCheckBox_'+elementId).each(function(){
				var searchDataCheckBox = $(this);
				if(searchDataCheckBox.is(':checked') == true)
				{
					if(searchDataCheckBox.val() != '')
					{
						selectValues.push(searchDataCheckBox.val());	
						selectText.push(searchDataCheckBox.parent('p').text().trim());
					}
				}else {
					selectAllCheck = false;
				}
			});

			
			$('#'+elementId).val(selectValues);
			$('#'+elementId+'_visible').val(selectText);
			$('.selectall_'+elementId).prop('checked',selectAllCheck);
		});


		$('.selectall_'+elementId).click(function(){
			var selectValues = [];
			var selectText = [];
			if($(this).is(':checked') === true)
			{
				$('.searchDataCheckBox_'+elementId).each(function(){
					var searchDataCheckBox = $(this);
					if(searchDataCheckBox.val() != '')
					{
						selectText.push(searchDataCheckBox.parent('p').text().trim());	
						selectValues.push(searchDataCheckBox.val());	
					}

					searchDataCheckBox.prop('checked',true);
				});
			}
			else
			{
				selectValues = [];
				selectText = [];
				$('.searchDataCheckBox_'+elementId).prop('checked',false);
			}

			$('#'+elementId).val(selectValues);
			$('#'+elementId+'_visible').val(selectText);
		});





		$(document).on('click', function (e) {
	    if ($(e.target).closest('.selectContainer_'+elementId).length === 0) {
	        $('.option_'+elementId).hide();
	    }
	});
	}
})(jQuery);