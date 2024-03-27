import { Link, useRouteError } from "react-router-dom";

 

const Error = () => {
    const error =useRouteError();
    console.log(error);
    return (
        <div className="flex items-center  justify-center flex-col h-screen space-y-4">
            <h1 className="text-3xl font-bold">Oops !!!</h1>
            <h2>{error.status}</h2>
            <h2>{error.error.message}</h2>
            <Link to={'/'} className="bg-green-400 p-5 rounded-full text-white">Go Home</Link>
        </div>
    );
};

export default Error;