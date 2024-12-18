import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";

export const ChessBoard = ({board, socket, setBoard, chess}: {
    chess:any;
    setBoard: any;
    board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]; socket:WebSocket}) =>{
    console.log("chessss: ", chess)

const [from, setFrom] = useState<null | Square>(null)

    return <div className="text-white">
        {
            board.map((row, i)=>{
                return <div key={i}  className="flex">
                    {
                        row.map((square, j) => {
                            const squareRepresentation = String.fromCharCode(97 + (j%8)) + "" + (8-i);
                            return <div key={j} onClick={()=> {
                                if(!from){
                                    setFrom(null)
                                    setFrom(square?.square?? null)
                                } else{
                                    socket.send(JSON.stringify({
                                        type: MOVE,
                                        payload:{
                                            move:{
                                                from,
                                                to: squareRepresentation
                                            }
                                        }
                                    }))
                                    setBoard(chess.board())
                                    console.log({
                                        from,
                                        to: squareRepresentation
                                    })
                                }
                            }} className={`w-16 h-16 ${(i+j)%2 == 0 ? "bg-green-500" : "bg-gray-300"}`}>
                                <div className="w-full h-full flex justify-center items-center text-2xl text-black text-bold"> {square ? square.type : ""} </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
}