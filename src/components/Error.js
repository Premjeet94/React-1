import { useRouteError } from "react-router"

export const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div className="flex w-screen flex-col gap-5 h-screen justify-center items-center">
            <h1 className="text-5xl">Oops!!!!!</h1>
            <h2 className="text-3xl">Something Went Wrong</h2>
            <h2 className="text-xl">{err.status} {err.statusText}</h2>
        </div>
    )
}