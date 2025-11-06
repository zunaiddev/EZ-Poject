import InputField from "./InputField.tsx";
import Button from "./Button.tsx";
import {useForm} from "react-hook-form";
import type {FormReq} from "../types/FormReq.ts";
import TextArea from "./TextArea.tsx";

function ContactForm() {
    const {
        register,
        handleSubmit, formState: {errors, isSubmitting}
    } = useForm<FormReq>();

    function onSubmit(data: FormReq) {
        console.log(data);
    }

    return (
        <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <InputField placeholder="Your name*"
                        register={register("name", {
                            required: "Please Enter Yor name",
                        })}
                        error={errors.name}
            />

            <InputField placeholder="Your email*"
                        register={register("email", {
                            required: "Please Enter Your email",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please Enter a valid email"
                            }
                        })}
                        error={errors.email}
            />

            <InputField placeholder="Phone"
                        register={register("phone", {
                            pattern: {
                                value: /^\+?\d{1,4}?[\s-]?\d{6,14}$/,
                                message: "Please Enter a valid contact number"
                            }
                        })}
                        error={errors.phone}
            />

            <TextArea placeholder="Your message*"
                      register={register("message", {
                          required: "Please Enter Your message",
                      })}
                      error={errors.message}
            />

            <Button isSubmitting={isSubmitting}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;