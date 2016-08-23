#pragma strict

var ballSpeed : int = 20;

function Start () 
{
	yield WaitForSeconds (2);
	goBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) 
{	//Adding velocity based on paddle movement
	if (colInfo.collider.tag == "Player") 
	{ 
		GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3; 
		GetComponent.<AudioSource>().pitch = Random.Range(0.9f, 1.1f);
		GetComponent.<AudioSource>().Play();
	}
	
	//Preventing sliding on top and bottom wall
	if(GetComponent.<Rigidbody2D>().velocity.y < 1 && GetComponent.<Rigidbody2D>().velocity.y * -1 < 1)
	{
		if (colInfo.collider.tag == "TopWall")
		{
			GetComponent.<Rigidbody2D>().AddForce(new Vector2(0, -2));
		}
		
		else if (colInfo.collider.tag == "BottomWall")
		{
			GetComponent.<Rigidbody2D>().AddForce(new Vector2(0, 2));
		}
	}
}

function resetBall()
{
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	yield WaitForSeconds (2); 
	goBall();
}

function goBall()
{
	var RandomNumber = Random.Range(0,2);
	
	if(RandomNumber <= 0.5)
	{
		GetComponent.<Rigidbody2D>().AddForce(new Vector2(ballSpeed, 7));
	}
	else
	{
		GetComponent.<Rigidbody2D>().AddForce(new Vector2(-ballSpeed, -7));
	}
}