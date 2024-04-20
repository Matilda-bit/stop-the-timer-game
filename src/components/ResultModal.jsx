import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(
    function ResultModal({ result, targetTime }, ref) {
        const dialog = useRef();

        useImperativeHandle(ref, () => {
            return {
                open() {
                    //dialog.current.showModal();

                }
            };
        });

        return (
            <div ref={ref} className="result-modal">
                <h2> You {result}</h2>
                <p> You target time was <strong>{targetTime} seconds.</strong></p>
                <p> You stopped the timer with <strong>X seconds left.</strong></p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </div>
        );
    }
) 

export default ResultModal;