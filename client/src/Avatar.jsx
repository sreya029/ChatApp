export default function Avatar({UserId,username}){
    
    return(
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center">
            <div className="text-center w-full opacity-70">{username[0]}</div>
        </div>
    )
}