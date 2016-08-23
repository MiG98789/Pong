#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D)
{
	if(hitInfo.name == "Ball")
	{
		var wallName = transform.name;
		GameManager.Score(wallName);
		hitInfo.gameObject.SendMessage("resetBall");
		GetComponent.<AudioSource>().pitch = Random.Range(0.9f, 1.1f);
		GetComponent.<AudioSource>().Play();
	}
}