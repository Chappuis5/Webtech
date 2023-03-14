import { CancelIcon, CheckIcon, PenIcon } from "../utils/SvgIcons";

export default function Validation({onCancel}){
    return (
        <div className="flex justify-end m-4">
            <div>
                <button type="submit" className="group flex items-center dark:bg-white rounded">
                    <CheckIcon/>
                </button>
            </div>
            {
                onCancel ?
                <div>
                    <button type="button" onClick={onCancel} className="group flex items-center dark:bg-white rounded">
                        <CancelIcon/>
                    </button>
                </div>
                :
                <></>
            }
        </div>
    )
}