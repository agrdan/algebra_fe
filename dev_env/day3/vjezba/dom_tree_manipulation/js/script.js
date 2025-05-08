$(document).ready(function(){
	/* Dohvaćanje elemenata predaka - parent(), parentsUntil(), parents() */
	const sekcija1Btn = $("#sekcija1 button");
	sekcija1Btn.eq(0).click(function(){
		$("#polaziste").parent().css("backgroundColor", "rgba(255,0,0,0.1)");
	});
	sekcija1Btn.eq(1).click(function(){
		$("#polaziste").parentsUntil("body").css("backgroundColor", "rgba(0,0,255,0.1)");
	});
	sekcija1Btn.eq(2).click(function(){
		$("#polaziste").parents().css("backgroundColor", "rgba(0,255,0,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Dohvaćanje elemenata potomaka - children(), find() */
	const sekcija2Btn = $("#sekcija2 button");
	sekcija2Btn.eq(0).click(function(){
		$("#polaziste").children().css("backgroundColor", "rgba(255,0,0,0.1)");
	});
	sekcija2Btn.eq(1).click(function(){
		$("#polaziste").find("*").css("backgroundColor", "rgba(0,255,0,0.1)");
	});
	sekcija2Btn.eq(2).click(function(){
		$("#polaziste").find("p").css("backgroundColor", "rgba(0,0,255,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Dohvaćanje elemenata s istim roditeljom (braća) - next(), prev(), siblings() */
	const sekcija3Btn = $("#sekcija3 button");
	sekcija3Btn.eq(0).click(function(){
		$("#polaziste").next().css("backgroundColor", "rgba(0,0,0,0.1)");
	});
	sekcija3Btn.eq(1).click(function(){
		$("#polaziste").prev().css("backgroundColor", "rgba(255,0,255,0.1)");
	});
	sekcija3Btn.eq(2).click(function(){
		$("#polaziste").siblings().css("backgroundColor", "rgba(0,255,0,0.1)");
	});
	sekcija3Btn.eq(3).click(function(){
		$("#polaziste").siblings("article").css("backgroundColor", "rgba(255,0,0,0.1)");
	});
	/* -------------------------------------------- */
	
	/* Filtriranje elemenata - first(), last(), eq(), filter(), not() */
	const sekcija4Btn = $("#sekcija4 button");
	sekcija4Btn.eq(0).click(function(){
		$("div").first().css("backgroundColor", "rgba(255,0,0,0.1)");
	});
	sekcija4Btn.eq(1).click(function(){
		$("div").last().css("backgroundColor", "rgba(0,255,0,0.1)");
	});
	sekcija4Btn.eq(2).click(function(){
		$("div").eq(1).css("backgroundColor", "rgba(0,0,255,0.1)");
	});
	sekcija4Btn.eq(3).click(function(){
		$("article").filter("#polaziste").css("backgroundColor", "rgba(255,0,255,0.1)");
	});
	sekcija4Btn.eq(4).click(function(){
		$("article").not("#polaziste").css("backgroundColor", "rgba(255,255,0,0.1)");
	});
	/* -------------------------------------------- */
});