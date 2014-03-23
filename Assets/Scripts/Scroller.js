#pragma strict

var speed : float;
var xBound : int;

function Start () {
}

function FixedUpdate () {
  var xPosition : float;
  if(transform.position.x <= xBound) {
    xPosition = transform.position.x;
  } else {
    xPosition = -xBound + speed;
  }
  transform.position = new Vector3 (xPosition + speed, transform.position.y, transform.position.z);
}