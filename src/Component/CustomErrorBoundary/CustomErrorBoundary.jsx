import { ErrorBoundary } from "react-error-boundary";

function CustomBoundaryBoundaryUi({error,resetErrorBoundary}){
    return <div className="font-semibold text-xl h-[100vh] flex justify-center items-center px-6 py-3">
         <div role="alert" className="alert alert-error ">
        <p>SomeThing Went Wrong : </p>
        <pre>{error?.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    </div>
}

export default function CustomErrorBoundary({children}){
    return <ErrorBoundary FallbackComponent={CustomBoundaryBoundaryUi} onReset={()=>window.location.reload()}>
        {children}
    </ErrorBoundary>
}