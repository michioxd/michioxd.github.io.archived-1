import { useCallback, useState } from "react"
import LoadingAsset from "./screen/Loading"
import Main from "./screen/Main"

function App() {
    const [isDone, setIsDone] = useState<boolean>(false);
    const [stillLoading, setStillLoading] = useState<boolean>(true);

    const handleDone = useCallback(() => {
        setIsDone(true);
        setTimeout(() => setStillLoading(false), 2500);
    }, [isDone]);

    return (
        <>
            {
                isDone && <Main />
            }
            {
                stillLoading && <LoadingAsset onDone={handleDone} />
            }
        </>
    )
}

export default App
