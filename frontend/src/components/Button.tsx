
export const Button = ({onClick, children}: {onClick: ()=> void, children: React.ReactNode}) =>{
    return  <button onClick={onClick} className="text-2xl text-bold px-4 py-3 rounded-lg bg-green-600 text-white">
        {children}
    </button>
}