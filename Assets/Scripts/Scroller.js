#pragma strict

var speed : float;
var xBound : int;

function Update () {
  if(transform.position.x <= xBound) {
    transform.position = new Vector3 (transform.position.x + 1 * speed, transform.position.y, transform.position.z);
  } else {
    transform.position = new Vector3 (-xBound + 1 * speed, transform.position.y, transform.position.z);
  }
}