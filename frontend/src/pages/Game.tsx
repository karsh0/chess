import { useEffect, useState } from "react";
import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"
import { Chess } from "chess.js"

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "gameover";

export const Game = () =>{
    const socket = useSocket();
    console.log(new Chess())
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())

    useEffect(()=>{
        if(!socket){
            return
        }
        socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type){
                case INIT_GAME:
                    setBoard(chess.board())
                    console.log("Game initialized")
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board())
                    console.log("move made")
                    break;
                case GAME_OVER:
                    console.log("game over")
                    break;
            }
        }
    },[socket])

    if(!socket) return <div>Connecting....</div>


    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board}/>
                </div>
                <div>
                <Button onClick={() => {
                    socket.send(JSON.stringify({
                    type: INIT_GAME,
                }))}
                }>Play now</Button>
                </div>
            </div>
        </div>
    </div>
}