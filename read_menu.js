$(document).ready(function(){
	$('a').click(function(){
		//Asigna nombre de la cafetería
		$('#cafeteria').text($(this).text());					
	});
	//Obtención y asignación de fecha
	var d = new Date();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var year = d.getFullYear();
	var today = (day<10?'0':'')+ day + '/' +(month<10?'0':'')+ month + '/' + year;
	$('#date').text(today);
	today = "\'" + today;
		
	//Lectura de spreadsheet
	$.getJSON( "https://spreadsheets.google.com/feeds/list/0Ai8QKWdXy2RKdDZNeFBIZ0xiaFhtYkZoRGhMZ21CeGc/od6/public/values?alt=json-in-script&callback=?",
	function (data) {
		$.each(data.feed.entry, function(i,entry) {
			var date = entry.gsx$fecha.$t;
			if(today == date){
				var barra = entry.gsx$barra.$t;
				var item = entry.gsx$comida.$t.split(",");
				var menu = "";
				if(barra == "Normal"){
					$.each(item, function(i){
						menu += item[i] + "<br>" ;
					});
					$('#normal').append(menu);
				}else{
					if(barra == "Bienestar"){
						$.each(item, function(i){
							menu += item[i] + "<br>" ;
						});
						$('#bienestar').append(menu);
					}else{
						$.each(item, function(i){
							menu += item[i] + "<br>" ;
						});
						$('#express').append(menu);
					}
				}
			}
		});
	});
});
