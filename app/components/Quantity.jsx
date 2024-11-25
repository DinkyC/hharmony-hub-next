import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Quantity({ counter, setCounter }) {

    const onIncrement = () => {
        setCounter(counter + 1);
    }; 

    const onDecrement = () => {
        if (counter === 1) {
            return; 
        } else {
            setCounter(counter - 1); 
        }
    };

    const onClear = () => {
        setCounter(1);
    };

    return (
        <div className="flex flex-row">
            <div className="mr-1 mt-px sm:mt-0 shadow font-bold text-center rounded bg-white h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
                <div onClick={onDecrement} className="btn-xs sm:btn-sm shadow bg-gray-50 rounded-md flex justify-center items-center w-full h-full">
                    <FontAwesomeIcon icon={faMinus} />
                </div>
            </div>
            <div className="mt-px sm:mt-0 shadow font-bold text-center rounded bg-white h-6 w-8 sm:h-8 sm:w-10  flex items-center justify-center">
                <div onClick={onClear} className="flex justify-center items-center w-full h-full">
                   <span>{counter}</span>
                </div>
             </div>
            <div className="ml-1 mt-px sm:mt-0 shadow font-bold text-center rounded bg-white h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
                <div onClick={onIncrement} className="btn-xs sm:btn-sm shadow bg-gray-50 rounded-md flex justify-center items-center w-full h-full">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    );
}
