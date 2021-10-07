export function Member({name, position, image, children}) {
    return(<div className="flex flex-col bg-gray-100 shadow-sm p-8">
        <div className="flex justify-center items-center">
            <img src={`/static/team/${image}`} alt={`${name}, ${position}`} title={`${name}, ${position}`} className="h-32 rounded" />
        </div>
        <div className="text-center pt-6">
            <h3 className="text-xl font-medium">{name}</h3>
            <p>{position}</p>
        </div>
        <div className="flex flex-grow justify-center pt-6 items-end">
            <div className="flex gap-4 items-center">
                {children}
            </div>
        </div>
    </div>);
}