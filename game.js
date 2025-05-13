"use strict"

const TITLE = "-Number Plate-";
const TEXT_START = "start";

const SCREEN_X = 1600;
const SCREEN_Y = 800;

let startf = false;

$(function(){
	let canvas = document.getElementById("game");
	let con = canvas.getContext("2d");

	let c = $('body');
	c.on('keydown', function (e) {
		if (!startf) {
			if (e.keyCode === 90) {
				startf = true;

				init();

				draw(con);
			}

			return;
		}
	});

	draw(con);
});

function init () {
}

function draw (con) {
	con.fillStyle = "black";
	con.fillRect(0, 0, SCREEN_X, SCREEN_Y);

	if (!startf) {
		con.textBaseline = "alphabetic";
		con.textAlign = "center";
		con.fillStyle = "white";

		con.font = "48px consolas";
		con.fillText(TITLE, SCREEN_X / 2, SCREEN_Y / 4);

		con.font = "32px consolas";
		con.fillText('> ' + TEXT_START, SCREEN_X / 2, SCREEN_Y / 4 * 3);

		return;
	}
}

