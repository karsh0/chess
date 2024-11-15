import { Color, PieceSymbol, Square } from "chess.js";

export const ChessBoard = ({board}: {board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
} | null)[][]}) =>{
    console.log("board: ",board)

    return <div className="text-white">
        {
            board.map((row, i)=>{
                return <div key={i}  className="flex">
                    {
                        row.map((square, j) => {
                            return <div key={j} className={`w-16 h-16 ${(i+j)%2 == 0 ? "bg-green-500" : "bg-gray-300"}`}>
                                <div className="w-full h-full flex justify-center items-center text-2xl text-black text-bold"> {square ? square.type : ""} </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
}