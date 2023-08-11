
//浏览器检测
 if(window.addEventListener){ 
	$(".IE6_tip").hide();
	}else if(window.attachEvent){ 
	$(".IE6_tip").show();
	}
	
//文件上传 输入域
  $(function() {
    $('#doc-form-file').on('change', function() {
      var fileNames = '';
      $.each(this.files, function() {
        fileNames += '<span class="ywg-badge">' + this.name + '</span> ';
      });
      $('#file-list').html(fileNames);
    });
//数据导入 词库选择
  $("#next").click(function(){
	  var select1 = $("#select1").val();
	  $(".targetChose").hide();
	  $(".updateBox").show();
	  if(select1=="yiwugou"){
		  $(".updateTarget").find("span").html("义乌购");  		 
	  }
	  });
  $(".updateTarget font").click(function(){
	  $(".targetChose").show();
	   $(".updateBox").hide();
	  });
  });
