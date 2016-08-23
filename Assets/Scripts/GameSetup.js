#pragma strict

var mainCam : Camera;
var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

var player01 : Transform;
var player02 : Transform;
var player01goal : Transform;
var player02goal : Transform;

function Start () 
{
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3 (Screen.width * 2f , 0f, 0f)).x, 1f);
	topWall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height, 0f)).y + 0.5f);
	
	bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3 (Screen.width * 2f , 0f, 0f)).x, 1f);
	bottomWall.offset = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).y - 0.5f);
	
	leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3 (0f, Screen.height * 2f, 0f)).y);
	leftWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x - 0.5f, 0f);
	
	rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3 (0f, Screen.height * 2f, 0f)).y);
	rightWall.offset = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.5f, 0f);
	
	player01.position.x = mainCam.ScreenToWorldPoint(new Vector3(75f, 0f, 0f)).x; 
	player02.position.x = mainCam.ScreenToWorldPoint(new Vector3(Screen.width - 75f, 0f, 0f)).x;
	
	player01goal.position.x = mainCam.ScreenToWorldPoint(new Vector3(-1f, 0f, 0f)).x; 
	player02goal.position.x = mainCam.ScreenToWorldPoint(new Vector3(Screen.width + 1f, 0f, 0f)).x;
}