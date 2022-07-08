import { Tabs } from 'antd'
import React from 'react'

export default function Screen() {

    const { TabPane } = Tabs;

    return (
        <Tabs tabPosition="bottom">
            <TabPane tab="1" key="1">
                Content of Tab 1
            </TabPane>
            <TabPane tab="2" key="2">
                Content of Tab 2
            </TabPane>
            <TabPane tab="3" key="3">
                Content of Tab 3
            </TabPane>
        </Tabs>
    )
}
