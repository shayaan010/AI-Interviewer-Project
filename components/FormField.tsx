import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
  FormDescription,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({ 
    name, 
    control, 
    label, 
    placeholder, 
    type="text" }: 
    FormFieldProps<T>) => {
    return(
    <Controller 
        name={name} 
        control={control} 
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input 
                        className="input" 
                        placeholder={placeholder} 
                        type={type}
                        {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
    );
    };

export default FormField