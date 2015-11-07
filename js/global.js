/*	
	- Ultimate MapleStory Calculator (pre-BB) -
	- Written and designed by Robert Spier -
*/
$(document).ready(function() {
	
	// Button configuration
	
	$("#calculatevalues").click(function() {
		main();
	});
	$("#resetvalues").click(function() {
		resetAll();
	});
	
	// Select2 configuration
	
	$(".monsterdata-list").select2({
		data: monsterlist,
	});
	$(".undeadlist-list").select2({
		data: undeadlist,
	});
	$(".jobselect-data").select2({
		minimumResultsForSearch: Infinity,
		placeholder: "Choose"
	});
	$(".skillmastery").select2({
		minimumResultsForSearch: Infinity
	});
	$(".elementamp").select2({
		minimumResultsForSearch: Infinity
	});
	$(".elemwandbonus").select2({
		minimumResultsForSearch: Infinity
	});
	$(".heallevel").select2({
		minimumResultsForSearch: Infinity
	});
	$(".monsteramount").select2({
		minimumResultsForSearch: Infinity
	});
	$(".damagetype-data").select2({
		minimumResultsForSearch: Infinity
	});
});
hideAll();

// Filter based on jobselection

$("#jobselect").change(function() {
	var job = $("#jobselect").val();
	switch (job) {
		case "1": // warrior
			hideAll();
			$("#stats").show();
			$(".str").show();
			$(".dex").show();
			$(".acc").show();
			$(".minrange").show();
			$(".maxrange").show();
			$("#warriorskills").show();
			$("#monsterselect").show();
			$(".damagetype").show();
			break;
		case "2": // bowman
			hideAll();
			$("#stats").show();
			$(".str").show();
			$(".dex").show();
			$(".acc").show();
			$(".minrange").show();
			$(".maxrange").show();
			$("#archerskills").show();
			$("#monsterselect").show();
			$(".damagetype").show();
			break;
		case "3": // thief
			hideAll();
			$("#stats").show();
			$(".luk").show();
			$(".dex").show();
			$(".str").show();
			$(".acc").show();
			$(".minrange").show();
			$(".maxrange").show();
			$("#thiefskills").show();
			$(".damagetype").show();
			$("#monsterselect").show();
			break;
		case "4": // pirate
			hideAll();
			$("#stats").show();
			$(".str").show();
			$(".dex").show();
			$(".acc").show();
			$(".minrange").show();
			$(".maxrange").show();
			$("#pirateskills").show();
			$("#monsterselect").show();
			$(".damagetype").show();
			break;
		case "5": // magician
			hideAll();
			$("#stats").show();
			$(".int").show();
			$(".luk").show();
			$(".totalmagic").show();
			$("#magicianskills").show();
			$("#monsterselect").show();
			$(".damagetype").show();
			break;
		case "6": // heal
			hideAll();
			$("#stats").show();
			$(".int").show();
			$(".luk").show();
			$(".totalmagic").show();
			$("#healskills").show();
			break;
		case "7": // lucky7 / triplethrow 
			hideAll();
			$("#stats").show();
			$(".luk").show();
			$(".dex").show();
			break;
		case "8": // meso explosion
			hideAll();
			$("#stats").show();
			$(".luk").show();
			$(".dex").show();
			break;
		default:
			hideAll();
	}
});

// Declaring all global variables up front

var multiply, maxdmg, mindmg, avgdmg, elemwandbonus, elementamp, skillmastery,
	skillattack, acc, totalmagic, totalint, totalluk, totalstr, totaldex, fire,
	ice, poison, holy, lightning;

// Main calculating function

function main() {

	var job = $("#jobselect").val();
	var def;
	var damagetype = parseInt($("#damagetype").val());

	// MONSTER LEVEL
	var m = parseInt($("#monster").val());

	// LEVEL DIFFERENCE
	var d = parseInt(monsterlist[m].level) - parseInt($("#level").val());
	if (d < 0) {
		d = 0;
	}

	switch(job) {

		case "1": // warrior

		$("#results").show();
		def = monsterlist[m].wdef + "</b> weapon defense";
		$(".currentaccuracy").hide();
		
		// WARRIOR (GLOBAL DECLARE)
		
		acc = parseInt($("#acc").val());
		
		// DAMAGE

		// elemental multiplier
		
		checkWeakness(damagetype, m);

		// ACCURACY
		
		globalAccuracy(d, acc, m);
		
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "2": // bowmen

		$("#results").show();
		console.log('i pass hits')

		def = monsterlist[m].wdef + "</b> weapon defense";
		$(".currentaccuracy").hide();
		
		// ARCHER (GLOBAL DECLARE)
		
		acc = parseInt($("#acc").val());
		
		// DAMAGE

		// elemental multiplier
		
		checkWeakness(damagetype, m);

		// ACCURACY
		
		globalAccuracy(d, acc, m);
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "3": // thief

		$("#results").show();
		def = monsterlist[m].wdef + "</b> weapon defense";
		$(".currentaccuracy").hide();
		
		// THIEF (GLOBAL DECLARE)
		
		acc = parseInt($("#acc").val());
		
		// DAMAGE
		
		// elemental multiplier
		
		checkWeakness(damagetype, m);

		// ACCURACY
		
		globalAccuracy(d, acc, m);
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "4": // pirate

		$("#results").show();
		def = monsterlist[m].wdef + "</b> weapon defense";
		$(".currentaccuracy").hide();
		
		// PIRATE (GLOBAL DECLARE)
		
		acc = parseInt($("#acc").val());
		
		// DAMAGE
		
		// elemental multiplier
		
		checkWeakness(damagetype, m);

		// ACCURACY
		
		globalAccuracy(d, acc, m);
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "5": // magician

		$("#results").show();
		def = monsterlist[m].mdef + "</b> magic defense";
		
		//  MAGICIAN (GLOBAL DECLARE)
		
		totalint = parseInt($("#int").val());
		totalluk = parseInt($("#luk").val());
		totalmagic = parseInt($("#totalmagic").val());
		skillattack = parseInt($("#skillattack").val());
		skillmastery = eval($("#skillmastery option:selected").val());
		elementamp = eval($("#elementamp option:selected").val());
		elemwandbonus = eval($("#elemwandbonus option:selected").val());
		
		//	DAMAGE
		
		// max
		
		var result1 = ((totalmagic * totalmagic) / 1000);
		result1 += totalmagic;
		result1 = result1 / 30;
		var result2 = (totalint / 200);
		var maxresult = eval(result1) + eval(result2);
		
		// min
		
		var result3 = ((totalmagic * totalmagic) / 1000);
		var result4 = (totalmagic * skillmastery * 0.9);
		result3 += result4;
		result4 = result3 / 30;
		var result5 = (totalint / 200);
		var minresult = eval(result4) + eval(result5);
		
		// minmax
		
		maxdmg = Math.floor(parseInt(maxresult * skillattack * elementamp *	elemwandbonus));
		mindmg = Math.floor(parseInt(minresult * skillattack * elementamp *	elemwandbonus));
		
		// elemental multiplier
		
		checkWeakness(damagetype, m);
		
		// def reduxx + avg
		
		maxdmg = (maxdmg - monsterlist[m].mdef * 0.5 * (1 + 0.01 * d));
		mindmg = (mindmg - monsterlist[m].mdef * 0.6 * (1 + 0.01 * d));
		avgdmg = Math.floor(parseInt((eval(maxdmg) + eval(mindmg)) / 2));
		
		// declare array
		
		var roundmatk = [mindmg, maxdmg, avgdmg];
			
			// max damage
		for 
			(var i = 0; i < roundmatk.length; i++) {
			if (roundmatk[i] > 99999) {
				roundmatk[i] = 99999;
			} else {}
		}
		
		// min damage
		
		for (var i = 0; i < roundmatk.length; i++) {
			if (roundmatk[i] < 1) {
				roundmatk[i] = 1;
			} else {}
		}

		$("#mindmg").html(Math.floor(roundmatk[0]));
		$("#maxdmg").html(Math.floor(roundmatk[1]));
		$("#avgdmg").html(Math.floor(roundmatk[2]));
		
		//	ACCURACY
		
		magicAccuracy(totalint, totalluk, m, d);
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "6": // heal

		$("#results").show();
		
		// RESET BECAUSE UNDEAD ONLY
		
		damagetype = 4;
		var m = parseInt($("#unmonster").val());
		var d = parseInt(monsterlist[m].level) - parseInt($("#level").val());
		if (d < 0) {
			d = 0;
		}
		def = monsterlist[m].mdef + "</b> magic defense";
		
		//  MAGICIAN HEAL (GLOBAL DECLARE)
		
		totalint = parseInt($("#int").val());
		totalluk = parseInt($("#luk").val());
		totalmagic = parseInt($("#totalmagic").val());
		heallevel = eval($("#heallevel option:selected").val());
		monsteramount = eval($("#monsteramount option:selected").val());
		
		// DAMAGE
		
		var mobamount = [48 / 48, 38 / 48, 33 / 48, 30 / 48, 28 / 48];
		mobamount = mobamount[monsteramount]
			
			// min-max-avg dmg 
		var mindmg = ((totalint * 1.2 + totalluk * 4) * totalmagic / 1000 *	heallevel * mobamount);
		var maxdmg = ((totalint * 4.8 + totalluk * 4) * totalmagic / 1000 *	heallevel * mobamount);

		checkWeakness(damagetype, m);
		
		// def reduxx + avg
		
		maxdmg = (maxdmg - monsterlist[m].mdef * 0.5 * (1 + 0.01 * d))
		mindmg = (mindmg - monsterlist[m].mdef * 0.6 * (1 + 0.01 * d))
		avgdmg = Math.floor(parseInt((eval(maxdmg) + eval(mindmg)) / 2));
		
		// declare array
		
		var roundmatk = [mindmg, maxdmg, avgdmg]
			
			// max damage
		for 
			(var i = 0; i < 3; i++) {
			if (roundmatk[i] > 99999) {
				roundmatk[i] = 99999;
			} else {}
		}
		
		// min damage
		
		for (var i = 0; i < 3; i++) {
			if (roundmatk[i] < 1) {
				roundmatk[i] = 1;
			} else {}
		}

		$("#mindmg").html(Math.floor(roundmatk[0]));
		$("#maxdmg").html(Math.floor(roundmatk[1]));
		$("#avgdmg").html(Math.floor(roundmatk[2]));
		
		// ACCURACY
		
		magicAccuracy(totalint, totalluk, m, d);
		$('#monsterdata').html("<b>" + monsterlist[m].text + "</b> is a level <b>" +
			monsterlist[m].level + "</b> monster with <b>" + monsterlist[m].hp +
			"</b> HP. It has <b>" + def + " and  <b>" + monsterlist[m].avoid +
			"</b> avoidabillity.");

		break;
		case "7": // lucky7/triple
		break;
		case "8": // meso explosion
		break;
		default: 
			console.log('nope');
			console.log(job)
	}
	
	generateAdvice(mindmg, avgdmg, m);

}
	
// Magic accuracy


function magicAccuracy(totalint, totalluk, m, d) {

	var currentaccuracy = Math.floor(totalint / 10) + Math.floor(totalluk / 10);
	var maxaccuracy = Math.floor((monsterlist[m].avoid + 1) * (1 + 0.04 * d));
	var minaccuracy = Math.floor(0.41 * maxaccuracy);
	var hitratio = -0.7011618132 * Math.pow(((currentaccuracy - minaccuracy + 1) /
		(maxaccuracy - minaccuracy + 1)), 2) + 1.702139835 * ((currentaccuracy -
		minaccuracy + 1) / (maxaccuracy - minaccuracy + 1));
	hitratio = Math.round(hitratio * 100);
	if (currentaccuracy < minaccuracy) {
		hitratio = 0;
	} else if (currentaccuracy >= maxaccuracy) {
		hitratio = 100;
	} else {}
	$("#currentaccuracy").html(currentaccuracy);
	$("#maxaccuracy").html(maxaccuracy);
	$("#minaccuracy").html(minaccuracy);
	$("#hitratio").html(hitratio);
}
	
// Normal accuracy

function globalAccuracy(d, acc, m) {
	var hitratio = acc / ((1.84 + 0.07 * d) * monsterlist[m].avoid) - 1;
	hitratio = Math.round(hitratio * 100);
	var outcomemin = 0;
	var outcomemax = 0;
	
	// round
	
	if (hitratio > 100) {
		hitratio = 100;
	} else if (hitratio < 0) {
		hitratio = 0;
	} else if (isNaN(hitratio)) {
		hitratio = 0;
	}
	
	// min
	
	for (var i = 1; outcomemin < 100; i++) {
		outcomemin = i / ((1.84 + 0.07 * d) * monsterlist[m].avoid) - (1 * 0.05 * (d -
			5));
		outcomemin = Math.round(outcomemin * 100);
		var maxaccuracy = i;
	}
	
	// max
	
	for (var i = 1; outcomemax < 1; i++) {
		outcomemax = i / ((1.84 + 0.07 * d) * monsterlist[m].avoid) - (1 * 0.05 * (d -
			5));
		outcomemax = Math.round(outcomemax * 100);
		var minaccuracy = i;
	}
	$("#maxaccuracy").html(maxaccuracy);
	$("#minaccuracy").html(minaccuracy);
	$("#hitratio").html(hitratio);
}

// Checking for the monsters elemental status


function checkWeakness(damagetype, m) {
		
	// fire
	
	if (monsterlist[m].elem.indexOf("F3") !== -1) {
		fire = "Weak";
	} else if (monsterlist[m].elem.indexOf("F2") !== -1) {
		fire = "Strong";
	} else if (monsterlist[m].elem.indexOf("F1") !== -1) {
		fire = "Immume";
	} else {
		fire = "None";
	}
	$("#firevalue").html(fire);
	
	// ice
	
	if (monsterlist[m].elem.indexOf("I3") !== -1) {
		ice = "Weak";
	} else if (monsterlist[m].elem.indexOf("I2") !== -1) {
		ice = "Strong";
	} else if (monsterlist[m].elem.indexOf("I1") !== -1) {
		ice = "Immume";
	} else {
		ice = "None";
	}
	$("#icevalue").html(ice);
	
	// poison
	
	if (monsterlist[m].elem.indexOf("S3") !== -1) {
		poison = "Weak";
	} else if (monsterlist[m].elem.indexOf("S2") !== -1) {
		poison = "Strong";
	} else if (monsterlist[m].elem.indexOf("S1") !== -1) {
		poison = "Immume";
	} else {
		poison = "None";
	}
	$("#poisonvalue").html(poison);
	
	// holy
	
	if (monsterlist[m].elem.indexOf("H3") !== -1) {
		holy = "Weak";
	} else if (monsterlist[m].elem.indexOf("H2") !== -1) {
		holy = "Strong";
	} else if (monsterlist[m].elem.indexOf("H1") !== -1) {
		holy = "Immume";
	} else {
		holy = "None";
	}
	$("#holyvalue").html(holy);
	
	// lightning
	
	if (monsterlist[m].elem.indexOf("L3") !== -1) {
		lightning = "Weak";
	} else if (monsterlist[m].elem.indexOf("L2") !== -1) {
		lightning = "Strong";
	} else if (monsterlist[m].elem.indexOf("L1") !== -1) {
		lightning = "Immume";
	} else {
		lightning = "None";
	}
	$("#lightningvalue").html(lightning);
	if (damagetype !== 0) {
		if (damagetype == 1) {
			switch (fire) {
				case "Weak":
					$("#elembonusdamage").html(
						"This monster is weak versus your <b>fire</b> attack (150% damage)");
					maxdmg *= 1.5;
					mindmg *= 1.5;
					break;
				case "Strong":
					$("#elembonusdamage").html(
						"This monster is strong versus your <b>fire</b> attack (50% damage)");
					maxdmg /= 2;
					mindmg /= 2;
					break;
				case "Immume":
					$("#elembonusdamage").html(
						"This monster is immume versus your <b>fire</b> attack (1 damage only)"
					);
					maxdmg = 1;
					mindmg = 1;
					break;
				default:
					$("#elembonusdamage").html(
						"This monster has nothing special versus your <b>fire</b> attack (100% damage)"
					);
			}
		} else if (damagetype == 2) {
			switch (ice) {
				case "Weak":
					$("#elembonusdamage").html(
						"This monster is weak versus your <b>ice</b> attack (150% damage)");
					maxdmg *= 1.5;
					mindmg *= 1.5;
					break;
				case "Strong":
					$("#elembonusdamage").html(
						"This monster is strong versus your <b>ice</b> attack (50% damage)");
					maxdmg /= 2;
					mindmg /= 2;
					break;
				case "Immume":
					$("#elembonusdamage").html(
						"This monster is immume versus your <b>ice</b> attack (1 damage only)");
					maxdmg = 1;
					mindmg = 1;
					break;
				default:
					$("#elembonusdamage").html(
						"This monster has nothing special versus your <b>ice</b> attack (100% damage)"
					);
			}
		} else if (damagetype == 3) {
			switch (poison) {
				case "Weak":
					$("#elembonusdamage").html(
						"This monster is weak versus your <b>poison</b> attack (150% damage)");
					maxdmg *= 1.5;
					mindmg *= 1.5;
					break;
				case "Strong":
					$("#elembonusdamage").html(
						"This monster is strong versus your <b>poison</b> attack (50% damage)");
					maxdmg /= 2;
					mindmg /= 2;
					break;
				case "Immume":
					$("#elembonusdamage").html(
						"This monster is immume versus your <b>poison</b> attack (1 damage only)"
					);
					maxdmg = 1;
					mindmg = 1;
					break;
				default:
					$("#elembonusdamage").html(
						"This monster has nothing special versus your <b>poison</b> attack (100% damage)"
					);
			}
		} else if (damagetype == 4) {
			switch (holy) {
				case "Weak":
					$("#elembonusdamage").html(
						"This monster is weak versus your <b>holy</b> attack (150% damage)");
					maxdmg *= 1.5;
					mindmg *= 1.5;
					break;
				case "Strong":
					$("#elembonusdamage").html(
						"This monster is strong versus your <b>holy</b> attack (50% damage)");
					maxdmg /= 2;
					mindmg /= 2;
					break;
				case "Immume":
					$("#elembonusdamage").html(
						"This monster is immume versus your <b>holy</b> attack (1 damage only)"
					);
					maxdmg = 1;
					mindmg = 1;
					break;
				default:
					$("#elembonusdamage").html(
						"This monster has nothing special versus your <b>holy</b> attack (100% damage)"
					);
			}
		} else if (damagetype == 5) {
			switch (lightning) {
				case "Weak":
					$("#elembonusdamage").html(
						"This monster is weak versus your <b>lightning</b> attack (150% damage)"
					);
					maxdmg *= 1.5;
					mindmg *= 1.5;
					break;
				case "Strong":
					$("#elembonusdamage").html(
						"This monster is strong versus your <b>lightning</b> attack (50% damage)"
					);
					maxdmg /= 2;
					mindmg /= 2;
					break;
				case "Immume":
					$("#elembonusdamage").html(
						"This monster is immume versus your <b>lightning</b> attack (1 damage only)"
					);
					maxdmg = 1;
					mindmg = 1;
					break;
				default:
					$("#elembonusdamage").html(
						"This monster has nothing special versus your <b>lightning</b> attack (100% damage)"
					);
			}
		}
	} else {
		$("#elembonusdamage").html("You are not applying any elemental damage");
	}
}

// Generating advice


function generateAdvice(mindmg, avgdmg, m) {
		
	var hitamount, hitamount2;

	if (m === 0) {
		$("#adviceuser").html(
			"<center>nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope nope</center><br><br>"
		).append(
			"<center><img alt='nope' style='width:250px; height:240px;' src='http://i.imgur.com/9IsB2Ka.gif'/></center>"
		);

	} else {
		if (mindmg < 2) {
			hitamount = monsterlist[m].hp;
			hitamount2 = monsterlist[m].hp;
		} else {
			hitamount = Math.ceil(monsterlist[m].hp / mindmg);
			hitamount2 = Math.ceil(monsterlist[m].hp / avgdmg);
		}
		$("#adviceuser").html("You need to hit this monster at least <b>" +
			hitamount +
			"</b> time(s) to kill it. (using your minimal damage per hit)<br>However, you probably have to hit it <b>" +
			hitamount2 +
			"</b> time(s) to kill it. (using your average damage per hit)");
	}
}
	
// Hide/reset function


function hideAll() {
	$("#stats").hide();
	$("#hptarget").hide();
	$("#monsterselect").hide();
	$("#magicianskills").hide();
	$("#archerskills").hide();
	$("#warriorskills").hide();
	$("#pirateskills").hide();
	$("#thiefskills").hide();
	$("#healskills").hide();
	$("#results").hide();
	$(".int").hide();
	$(".luk").hide();
	$(".str").hide();
	$(".dex").hide();
	$(".acc").hide();
	$(".minrange").hide();
	$(".maxrange").hide();
	$(".totalmagic").hide();
	$(".currentaccuracy").show();
	$(".damagetype").hide();
	$(".damagetype-data").hide();
}

function resetAll() {
	var def = undefined;
	$('.jobselect-data').select2('val', "Choose")
	$(".damagetype-data").select2('val', 0)
	$("#monsterdata").html("");
	$("#firevalue").html("-");
	$("#icevalue").html("-");
	$("#poisonvalue").html("-");
	$("#holyvalue").html("-");
	$("#lightningvalue").html("-");
	$("#elembonusdamage").html("");
	$("#mindmg").html("-");
	$("#avgdmg").html("-");
	$("#maxdmg").html("-");
	$("#currentaccuracy").html("-");
	$("#maxaccuracy").html("-");
	$("#minaccuracy").html("-");
	$("#hitratio").html("-");
	$("#adviceuser").html("-")
	hideAll()
}