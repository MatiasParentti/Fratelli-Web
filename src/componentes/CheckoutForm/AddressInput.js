import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';


const AddressInput = ({ name, label, required }) => {

    const { control } = useFormContext();
    // const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onChange={onChange}
                        onBlur={onBlur}
                        fullWidth
                        value={value}
                        label={label}
                        required={required}
                    />
                )}
            />
        </Grid>
    )


}



export default AddressInput;