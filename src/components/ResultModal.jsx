import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(
    function ResultModal({ targetTime, remainingTime, onReset }, ref) {
        const dialog = useRef();
        const userLost = remainingTime <= 0;
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            };
        });

        return (
            <dialog ref={dialog} className="result-modal">
                {userLost && <h2> You Lost</h2>}
                <p> You target time was <strong>{targetTime} seconds.</strong></p>
                <p> You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        );
    }
) 

export default ResultModal;