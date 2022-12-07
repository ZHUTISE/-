import * as React from "react";
import {
  DivWrapper,
  TitleWrapper
} from "./CalendarWrappers";
import { Button } from "@mui/material";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];
export default function MonthChanger(props) {
  const handlePrevClick = () => {
    props.onWork(props.today.clone().subtract(1, "month"));
  };
  const handleNextClick = () => {
    props.onWork(props.today.clone().add(1, "month"));
  };
  return (
    <DivWrapper>
      <DivWrapper>
        <Button id="prev" onClick={handlePrevClick} variant="outlined">
          {" "}
          Предыдущий{" "}
        </Button>
      </DivWrapper>
      <DivWrapper>
        <TitleWrapper>{months[props.today.get("M")]}</TitleWrapper>
        <TitleWrapper>{props.today.format("YYYY")}</TitleWrapper>
      </DivWrapper>
      <DivWrapper>
        <Button id="next" onClick={handleNextClick} variant="outlined">
          {" "}
          Следующий{" "}
        </Button>
      </DivWrapper>
    </DivWrapper>
  );
}
