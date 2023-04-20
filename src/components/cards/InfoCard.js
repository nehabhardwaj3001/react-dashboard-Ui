import React from "react";
import { Typography, Col, Image } from "antd";
import {
  CustomCard,
  CardUpperSection,
  CardLowerSection,
  JustifiedContent,
} from "../dashboard/StyledComponent";

const { Title, Text } = Typography;

const InfoCard = ({
  image,
  icon,
  percentage,
  totalPercentage,
  title,
  quesmark,
  background,
  color,
}) => {
  return (
    <Col span={12}>
      <CustomCard background={background}>
        <CardUpperSection color={color}>
          <Image src={image} preview={false} className="card-img" />
          <div>
            {icon}
            <Text>{percentage}</Text>
          </div>
        </CardUpperSection>
        <CardLowerSection color={color}>
          <Title>{totalPercentage}</Title>
          <JustifiedContent>
            <Title level={4}>{title}</Title>
            <Image src={quesmark} preview={false} />
          </JustifiedContent>
        </CardLowerSection>
      </CustomCard>
    </Col>
  );
};

export default InfoCard;
