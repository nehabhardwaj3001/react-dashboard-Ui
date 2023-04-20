import React from "react";
import { Row } from "antd";
import { DashboardContentWrap } from "./StyledComponent";
import DashboardHeader from "./DashboardHeader";
import Cards from "../cards/Cards";

const DashboardContent = () => {
  return (
    <DashboardContentWrap>
      <DashboardHeader />
      <Row>
        <Cards />
      </Row>
    </DashboardContentWrap>
  );
};

export default DashboardContent;
