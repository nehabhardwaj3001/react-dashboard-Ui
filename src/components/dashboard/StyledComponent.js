import styled from "styled-components";
import { Button, Card, Divider, Menu } from "antd";

export const CustomMenu = styled(Menu)`
  background: #f6f6fb !important;
  width: 276px;
  .ant-menu-item {
    margin: 0;
  }
  .ant-menu-item-selected {
    background: linear-gradient(
      270.27deg,
      rgba(113, 102, 249, 0.07) 0%,
      rgba(113, 102, 249, 0.03) 97.77%
    );
  }
`;

export const RowAlignedContent = styled.div`
  display: flex;
  align-items: center;
`;

export const JustifiedContent = styled(RowAlignedContent)`
  justify-content: space-between;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 38px 33px;
  background: #f6f6fb;

  .ant-image {
    background: linear-gradient(rgb(169, 201, 255) 0%, rgb(255, 187, 236) 100%);
    padding: 14px;
    border-radius: 50%;
  }
`;

export const SidebarWrap = styled.div`
  width: 276px;
  height: 100vh;
  position: sticky !important;
  top: 0;
  z-index: 9;
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 127px);
  justify-content: space-between;
  background: #f6f6fb;
  .ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
  .anticon {
    height: 24px;
    width: 24px;
  }
`;

export const DashboardContentWrap = styled.div`
  padding: 23px 44px 21px 47px;
  width: 100%;
`;

export const DashboardHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4.ant-typography {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
  .anticon-caret-down {
    color: #070707;
  }
`;
export const LogoTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 25px;
  .ant-image {
    padding: 14px;
    background: #f6f6fb;
    border-radius: 12px;
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  .ant-typography {
    margin-left: 5px;
    margin-right: 18px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .ant-typography {
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    color: #575353;
    margin-right: 28px;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CustomButton = styled(Button)(
  {},
  ({ background, color }) => `
  display: flex;
  align-items: center;
  padding: 10px 24px;
  background: ${background || "#F6F6FB"};
  opacity: 0.9;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  color: ${color || "#2B2F42"};
  box-shadow: none;
`
);

export const CustomDivider = styled(Divider)(
  {},
  ({ margin }) => `
    margin: ${margin || "16px 0"} !important;
    background: #F6F6FB;
  `
);

export const CustomCard = styled(Card)(
  {},
  ({ background, padding }) => `
    padding: 0;
    background: ${background || "#F6F6FB"};
    border: 1px solid #f6f6fb;
    border-radius: 32px;
    .ant-card-body {
      padding: ${padding || "30.76px 37.18px 40.68px 16px"};
    }

  `
);

export const CardHeader = styled(RowAlignedContent)`
  justify-content: space-between;
  h5.ant-typography {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
  }
  h2.ant-typography {
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #7166f9;
  }
`;

export const TrafficSourceCard = styled(Card)`
  padding: 0;
  background: #F6F6FB;
  border-radius: 32px;
`;

export const SourceWrap = styled.div`
  display: flex;
  align-items: center;
  /* background: #efeff8; */
  border-radius: 12px;
  gap: 24px;
  justify-content: center;
  h5.ant-typography {
    font-weight: 400;
    font-size: 12px;
    line-height: 32px;
    color: #000000;
  }
`;

export const ColoredDiv = styled.div(
  {},
  ({ background }) => `
  width: 18px;
  height: 12px;
  background: ${background || "#4cd7f6"};
  border-radius: 2px;
`
);

export const CardUpperSection = styled.div(
  {},
  ({ color }) => `
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 35.72px;
    .card-img {
      margin-left: 34px;
      height: 24px;
      width: auto;
    }
    .anticon-caret-up {
      margin-right: 3px;
      color: #14ed44;
    }
    .ant-typography {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: ${color || "#2B2F42"};
    }
  `
);

export const CardLowerSection = styled.div(
  {},
  ({ color }) => `
    .ant-typography {
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      color: ${color || "#2B2F42"};
    }
    h4.ant-typography {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: ${color || "#2B2F42"};
    }
  `
);
