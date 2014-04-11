#pragma strict

var playText : GameObject;
var quitText : GameObject;

function Start () {

	playText = GameObject.FindGameObjectWithTag("Play Game");
	quitText = GameObject.FindGameObjectWithTag("Quit Game");
}

function OnMouseOver () {

	renderer.material.color = Color.blue;
}

function OnMouseExit () {
	
	renderer.material.color = Color.white;
}

function OnMouseUp () {
	
	if ( this.gameObject == playText ) {
	
		Application.LoadLevel(1);
	}
	else if ( this.gameObject == quitText ) {
	
		Application.Quit();
	}
}