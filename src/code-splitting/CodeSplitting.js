import {lazy, useState, Suspense} from "react";

const CodeSplitting = () => {
    const onClick = () => {
        import('./notify').then(result => result.default());
    };

    const [visible, setVisible] = useState(false);
    const onClick2 = () => {
        setVisible(true);
    };
    const SplitMe = lazy(() => import('./SplitMe'));

    return (
        <div>
        <h1 onClick={onClick2}>Code Splitting</h1>
            <Suspense fallback={<div>loading...</div>}>
                {visible && <SplitMe />}
            </Suspense>
        </div>
    );
}

export default CodeSplitting;