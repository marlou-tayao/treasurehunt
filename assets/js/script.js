$(document).ready( () => {
	let minTime = 2000;
	let score = 0;

	const respawnCircle = function () {
		let itemNum = Math.floor(Math.random() * 3) + 1;

		$(".box").css({
			left : ((Math.random() * $('.jumbotron').width())),
			top : ((Math.random() * 550) + 125)
		});

		$(".box").attr("src",'assets/images/items/item'+ itemNum + '.png')

		
	}


	const respawnMons = function () {
		// $('.jumbotron').append('<div class=""><img class="mons" src="assets/images/monsters/mons1.png"></div>');
		let itemNum = Math.floor(Math.random() * 3) + 1;
		$(".mons").css({
			left : ((Math.random() * $('.jumbotron').width())),
			top : ((Math.random() * 550) + 125)
		});

		$(".mons").attr("src",'assets/images/monsters/mons'+ itemNum + '.png')

		return setTimeout(respawnMons, minTime);
	}

	setTimeout(respawnMons, minTime)
	// $('.jumbotron').append('<div class=""><img class="mons" src="assets/images/monsters/mons1.png"></div>');

	respawnCircle();
	$(".box").click(function() {
		respawnCircle()
		score++;
		$("#showScore").html(score);
	})

	$(".mons").click(function() {
		alert("Oops you lose! :P")
		location.reload();
	})

	$("#easy").click(function () {
		minTime = 1500;
	})

	$("#medium").click(function () {
		minTime = 1000;
	})

	$("#hard").click(function () {
		minTime = 500;
	})

})