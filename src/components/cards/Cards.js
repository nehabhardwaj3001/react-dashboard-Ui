import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Typography, Col, Row } from "antd";
import {
  CustomCard,
  CardHeader,
  CustomDivider,
  SourceWrap,
  ColoredDiv,
  TrafficSourceCard,
} from "../dashboard/StyledComponent";
import LineChart from "../charts/LineChart";
import DoughnutChart from "../charts/Doughnut.js";
import InfoCard from "./InfoCard";

const { Title, Text } = Typography;

const Cards = () => {
  return (
    <Row gutter={[17.08, 33.45]}>
      <Col xl={12} lg={24}>
        <CustomCard padding="22px 27px 50px 36px" background="#F6F6FB">
          <CardHeader>
            <Title level={5}>Total visits</Title>
            <Title level={2}>42,43M</Title>
          </CardHeader>
          <CustomDivider margin="28px 0 20px" />
          <LineChart />
        </CustomCard>
      </Col>
      <Col xl={12} lg={24}>
        <Row gutter={[0, 33.45]}>
          <Col span={24}>
            <Row gutter={[17.08, 0]}>
              <InfoCard
                image="/img/graph.svg"
                icon={<CaretUpOutlined />}
                percentage="12%"
                totalPercentage="42,34%"
                title="Bounce Rate"
                quesmark="/img/question-mark.svg"
                background="linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)"
                color="#ffffff"
              />
              <InfoCard
                image="/img/calender.svg"
                totalPercentage="42,34%"
                title="Pages per visit"
                quesmark="/img/page-visit.svg"
              />
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[17.08, 0]}>
              <InfoCard
                image="/img/person.svg"
                icon={<CaretDownOutlined style={{color:'red'}}/>}
                percentage="2,1%"
                totalPercentage="326.60K"
                title="Total Monthly Visit"
              />
              <InfoCard
                image="/img/duration.svg"
                icon={<CaretDownOutlined style={{color:'red'}}/>}
                percentage="2,4%"
                totalPercentage="00:03:27"
                title="Avg.Visit Duration"
              />
            </Row>
          </Col>
        </Row>
      </Col>
      {[1, 2].map(() => (
        <Col xl={12} lg={24}>
          <TrafficSourceCard>
            <CardHeader>
              <Title level={5}>Traffic Sources</Title>
            </CardHeader>
            <CustomDivider margin="26px 0 7px" />
            <Row>
              <Col span={14}>
                <Row>
                  <SourceWrap style={{background: '#EFEFF8', padding: '5px 20px'}}>
                    <Text>sourse</Text>
                    <Text>Traffic sourse,%</Text>
                  </SourceWrap>
                </Row>
                <Row>
                  <SourceWrap>
                    <ColoredDiv />
                    <Title level={5}>Direct</Title>
                    <Title level={5}>50</Title>
                  </SourceWrap>
                </Row>
                <Row>
                  <SourceWrap>
                    <ColoredDiv background="#E17CFD" />
                    <Title level={5}>Search</Title>
                    <Title level={5}>50</Title>
                  </SourceWrap>
                </Row>
              </Col>
              <Col span={10}>
                <DoughnutChart />
              </Col>
            </Row>
          </TrafficSourceCard>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
