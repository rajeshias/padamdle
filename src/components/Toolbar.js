import { InfoCircleOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import logo from "../assets/logo.png"

export default function Toolbar() {
    return (
        <Space >
            <img src={logo} />
            <InfoCircleOutlined />
        </Space>
    )
}
