import { TextField as MuiTextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<Form extends FieldValues> {
    control: Control<Form>;
    name: Path<Form>;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
}

export function TextField<Form extends FieldValues>({
                                                        control,
                                                        name,
                                                        disabled = false,
                                                        required = false,
                                                        type = 'text',
                                                        label,
                                                    }: Props<Form>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState, formState }) => (
                <MuiTextField
                    required={required}
                    disabled={disabled ?? formState.isSubmitting}
                    label={label}
                    placeholder={`Enter ${label}`}
                    type={type}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    onChange={field.onChange}
                    value={field.value}
                    variant="outlined"
                    size="small"
                />
            )}
        />
    );
}
