import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () =>{

    const navigate = useNavigate();

    return <div>
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                <img src={"/chessboard.png"} className="max-w-96 rounded-md"/>
                </div>
                <div className="max-w-fit flex justify-center flex-col gap-2">
                <h1 className="text-4xl text-bold text-white">Play chess online at #3 site!</h1>
                <div className="mt-4 flex justify-center">
                   <Button onClick={() => navigate('/game')}>Play Online</Button>
                </div>
                </div>
            </div>
        </div>
    </div>
}