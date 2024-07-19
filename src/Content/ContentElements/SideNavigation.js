import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: 'Разгледай само маси',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Разгледай само столове',
    },
    {
        key: '3',
        icon: <ContainerOutlined />,
        label: 'Разгледай само скара',
    }
];
const SideNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        // dispatch(setInput("FSAFDF")) - Set value like setState
    };
    return (
        <div
            style={{
                paddingLeft: '15px',
                width: 256,
            }}
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default SideNavigation;