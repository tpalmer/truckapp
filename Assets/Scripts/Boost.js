#pragma strict

@script RequireComponent(AudioSource)
  
var boost : Vector3;
var home : Vector3;
var boosting : boolean;
var boostAudio : AudioClip; 

function Start () {
	home = new Vector3 (transform.position.x, transform.position.y, transform.position.z);
}

function Update () {
	if (!boosting) {
		var currentPosition = new Vector3 (transform.position.x, transform.position.y, transform.position.z);
		var rb = GetComponent.<Rigidbody>();
		
		if (currentPosition.x < home.x) {
			// Vehicle is to the right of the starting position.
			rb.velocity = Vector3(3, 0, 0);	
		}
		else {
			// Vehicle is to the left of the starting position.
			rb.velocity = Vector3(0, 0, 0);
		}
	}
}

function OnMouseDown () {
	boosting = true;
	
	var rb = GetComponent.<Rigidbody>();
	rb.velocity = boost;
  
  AudioSource.PlayClipAtPoint(boostAudio, transform.position);
}

function OnMouseUp () {
	boosting = false;
	
	var rb = GetComponent.<Rigidbody>();
	rb.velocity = Vector3(0, 0, 0);
}