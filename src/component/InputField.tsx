import type {HTMLInputAutoCompleteAttribute, JSX} from "react";
import type {FieldError, UseFormRegisterReturn} from "react-hook-form";

interface IProps {
    placeholder: string;
    register: UseFormRegisterReturn,
    error: FieldError | undefined;
    autocomplete?: HTMLInputAutoCompleteAttribute | undefined;
}

function InputField({placeholder, register, error, autocomplete}: IProps): JSX.Element {
    return (
        <div className="w-full">
            <input type="text" {...register} autoComplete={autocomplete}
                   className="w-full px-3 py-2 text-sm outline-none bg-white rounded"
                   placeholder={placeholder}/>
            {error && <small className="text-red-500 pl-1">{error.message}</small>}
        </div>
    );
}

export default InputField;