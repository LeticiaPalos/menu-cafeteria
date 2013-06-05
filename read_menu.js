$(document).ready(function(){
	$(function listBooks(){
		var d = new Date();
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var year = d.getFullYear();
		var today = "\'" + (day<10?'0':'')+ day + '/' +(month<10?'0':'')+ month + '/' + year;
		$.getJSON( "https://spreadsheets.google.com/feeds/list/0Ai8QKWdXy2RKdDZNeFBIZ0xiaFhtYkZoRGhMZ21CeGc/od6/public/values?alt=json-in-script&callback=?",
		function (data) {
			$.each(data.feed.entry, function(i,entry) {
				var date = entry.gsx$fecha.$t;
				if(today == date){
					var barra = entry.gsx$barra.$t;
					var item = entry.gsx$comida.$t.split(",");
					if(barra == "Normal"){
						$.each(item, function(i){
							$('#normal').append(item[i]+"<br>");
						});
					}else{
						if(barra == "Bienestar"){
							$.each(item, function(i){
								$('#bienestar').append(item[i]+"<br>");
							});
						}else{
							$.each(item, function(i){
								$('#express').append(item[i]+"<br>");
							});
						}
					}
				}
			});
		});
	});
});