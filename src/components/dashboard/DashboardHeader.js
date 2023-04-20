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
          <Title>Poroject statistic</Title>
          <Image src="/img/doubt-icon.svg" preview={false} />
        </RowAlignedContent>
        <ButtonsWrap>
          <CustomButton type="primary" background="#7166f9" color="#F6F6FB">
            30 days
          </CustomButton>
          <CustomButton type="primary">90 days</CustomButton>
          <CustomButton type="primary">6 months</CustomButton>
          <CustomButton type="primary">12 months</CustomButton>
        </ButtonsWrap>
      </TitleWrap>
    </>
  );
};

export default DashboardHeader;
