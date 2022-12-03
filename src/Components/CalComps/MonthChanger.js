import * as React from "react";
import {
  DivWrapper,
  ButtonWrapper,
  TitleWrapper
} from "./CalendarWrappers";

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
        <ButtonWrapper id="prev" onClick={handlePrevClick}>
          {" "}
          &lt;{" "}
        </ButtonWrapper>
      </DivWrapper>
      <DivWrapper>
        <TitleWrapper>{months[props.today.get("M")]}</TitleWrapper>
        <TitleWrapper>{props.today.format("YYYY")}</TitleWrapper>
      </DivWrapper>
      <DivWrapper>
        <ButtonWrapper id="next" onClick={handleNextClick}>
          {" "}
          &gt;{" "}
        </ButtonWrapper>
      </DivWrapper>
    </DivWrapper>
  );
}
