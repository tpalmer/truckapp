#pragma strict

var rotationSpeed : float;

function Update () {
  transform.Rotate(rotationSpeed * Time.deltaTime, 0, 0);
}