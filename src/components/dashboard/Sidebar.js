import React from 'react';
import {
	UserOutlined,
	HomeFilled,
	FireOutlined,
	FileTextFilled,
	SaveFilled,
	SettingFilled,
	QuestionCircleFilled,
	LogoutOutlined,
} from '@ant-design/icons';
import { Typography, Image } from 'antd';
import { CustomMenu, SidebarHeader, SidebarWrap, MenuWrap  } from './StyledComponent';

const { Title } = Typography;

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}
const upperMenuItems = [
	getItem('Overview', '1',  <HomeFilled />),
	getItem('Opportunities', '2', <FireOutlined />),
	getItem('My competitors', '3', <UserOutlined />),
	getItem('Briefs', '4', <FileTextFilled />),
	getItem('Saved', '5', <SaveFilled />),
];

const bottomMenuItems = [
	getItem('Settings', '1',  <SettingFilled />),
	getItem('Help', '2', <QuestionCircleFilled />),
	getItem('Log out', '3', <LogoutOutlined />),
];

const App = () => {
	return (
		<SidebarWrap>
			<SidebarHeader>
			<Image src='/img/search.svg' preview={false} />
			<Title level={4}>Concured</Title>
			</SidebarHeader>
        <MenuWrap>
			<CustomMenu mode='inline' items={upperMenuItems} selectedKeys={['1']} />
			<CustomMenu mode='inline' items={bottomMenuItems} />
        </MenuWrap>
      </SidebarWrap>
	);
};
export default App;