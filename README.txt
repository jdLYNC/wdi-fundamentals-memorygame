# wdi-fundamentals-memorygame

Pre-Course Assignment for GA WDI.

Memory game website contains all features & functions from WDI Fundamentals Units 1 - 11 assignments along with the following additions:

	-	Super sweet sub heading.
	-	Additional footer link to developer linked.
	-	Orange outline highlights cards on hover.
	-	Card order is randomised each time or “shuffled”.
	-	Player can continue “matching” beyond the initial 2 cards selected.
	-	Number of rows (numRows) variable introduced in JS allowing for easy extension of game on dev side by increasing this value.
	-	“Matching” rules adjust automatically to correspond to number of cards/rows in game.
	-	Cards cannot be reselected for further matches once turned over.
	-	2nd card in play image changes prior to alert message.
	-	Player score counter.

Desired features not included are as follows:

	-	Alternative user feedback to alerts.
		//Not attempted.
	-	“Non-matched” cards returning to “facedown”.
		//Attempted but failed to find solution to select the two img elements for src changing.
	-	Player selected difficulty.
		//Not attempted.  Plan to include via prompt or input field in conjunction with start/reset button.
	-	Start/reset button.
		//Attempted but unable to call successfully call createBoard function on click.
	-	Card flipping animation.
		//Attempted with CSS 3D transforms but this led to cards “vibrating” on page.