SELECT * 
FROM comments
INNER JOIN allgames
ON comments.game_id=allgames.id WHERE Category="Football";