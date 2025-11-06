import type {FieldError, UseFormRegisterReturn} from "react-hook-form";
import type {JSX} from "react";

interface IProps {
    register: UseFormRegisterReturn;
    placeholder: string;
    error: FieldError | undefined;
}

function TextArea({register, placeholder, error}: IProps): JSX.Element {
    return (
        <div className="w-full">
            <textarea {...register} minLength={1}
                      className="w-full px-4 py-3 text-sm outline-none bg-white rounded"
                      placeholder={placeholder}/>
            {error && <small className="text-red-500 pl-1">{error.message}</small>}
        </div>
    );
}

export default TextArea;