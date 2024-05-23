import { Box, TextField, Stack, Button } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useRef, useState } from "react";

export default function AddProject({ cancelProject, saveProject }) {
    const [projectInfo, setProjectInfo] = useState({
        title: '',
        description: '',
        dueDate: ''
    });

    const handleInputChange = (feild, value) => {
        setProjectInfo(oldInfo => {
            return { ...oldInfo, [feild]: value }
        })
    }

    const handleSave = () => {
        saveProject(projectInfo);
    }

    return (
        <>
            <Box component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    width: '60%',
                    height: '60vh',
                    margin: '0 auto'
                }}>
                <TextField id="filled-basic"
                    label="Project Title"
                    variant="filled"
                    required
                    onChange={(event) => { handleInputChange('title', event.target.value) }}
                />
                <TextField id="fullWidth"
                    label="Project Description"
                    fullWidth
                    required
                    onChange={(event) => { handleInputChange('description', event.target.value) }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        onChange={(date) => { handleInputChange('dueDate', date.format('YYYY-MM-DD')) }}
                        slotProps={{
                            textField: {
                                variant: 'outlined',
                                required: true,
                                label: 'Select date',
                            }
                        }}
                    />
                </LocalizationProvider>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={handleSave}>Save</Button>
                    <Button variant="outlined" onClick={cancelProject}>Cancel</Button>
                </Stack>
            </Box>

        </>
    )

}
