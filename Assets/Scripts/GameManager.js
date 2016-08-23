#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;
var theBall : Transform;

function Start()
{
	theBall = theBall = GameObject.Find("Ball").transform;
}

static function Score (wallName : String) 
{
	if(wallName == "RightWall")
	{
		playerScore01 += 1;
	}
	
	else if(wallName == "LeftWall")
	{
		playerScore02 += 1;
	}

}

function OnGUI()
{
	GUI.skin = theSkin;
	GUI.Label(new Rect (Screen.width/2 - 168, 20, 100, 100), "" + playerScore01);
	GUI.Label(new Rect (Screen.width/2 + 132, 20, 100, 100), "" + playerScore02);
	
	if (GUI.Button (new Rect( Screen.width/2 - 121/2, 35, 121, 53), "RESET"))
	{
		playerScore01 = 0; 
		playerScore02 = 0; 
		theBall = GameObject.Find("Ball").transform; 
		theBall.gameObject.SendMessage ("resetBall");
	}
}