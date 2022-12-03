import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePickerWrapper } from "./CalendarWrappers";

export default function ViewsDatePicker(props) {
  const [value, setValue] = React.useState(props.today);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePickerWrapper
          views={["year", "month", "day"]}
          label="Выбор даты"
          minDate={dayjs("2010-03-01")}
          maxDate={dayjs("2030-06-01")}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            props.onWork(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}