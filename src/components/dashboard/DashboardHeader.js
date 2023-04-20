import React from "react";
import {
  DashboardHeaderWrap,
  RowAlignedContent,
  LogoTitleWrap,
  UserInfoWrap,
  TitleWrap,
  ButtonsWrap,
  CustomButton,
  CustomDivider,
} from "./StyledComponent";
import { Typography, Image } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const ScaledImage = styled(Image)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const AnimatedTitle = styled(Title)`
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #7166f9;
  }
`;

const AnimatedButton = styled(CustomButton)`
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #7166f9;
  }
`;

const DashboardHeader = () => {
  return (
    <>
      <DashboardHeaderWrap>
        <RowAlignedContent>
          <LogoTitleWrap>
            <ScaledImage src="/img/logo.svg" preview={false} />
            <Title level={4}>Boro team</Title>
            <CaretDownOutlined />
          </LogoTitleWrap>
          <ScaledImage src="/img/add-icon.svg" preview={false} />
        </RowAlignedContent>
        <UserInfoWrap>
          <ScaledImage src="/img/user.svg" preview={false} />
          <Title level={4}>Zahra hasht..</Title>
          <CaretDownOutlined />
        </UserInfoWrap>
      </DashboardHeaderWrap>
      <CustomDivider margin="5px 0 44px" />
      <TitleWrap>
        <RowAlignedContent>
          <AnimatedTitle>Poroject statistic</AnimatedTitle>
          <ScaledImage src="/img/doubt-icon.svg" preview={false} />
        </RowAlignedContent>
        <ButtonsWrap>
          <AnimatedButton type="primary" background="#7166f9" color="#F6F6FB">
            30 days
          </AnimatedButton>
          <AnimatedButton type="primary">90 days</AnimatedButton>
          <AnimatedButton type="primary">6 months</AnimatedButton>
          <AnimatedButton type="primary">12 months</AnimatedButton>
        </ButtonsWrap>
      </TitleWrap>
    </>
  );
};

export default DashboardHeader;
