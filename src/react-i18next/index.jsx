import React from 'react';
import RenderProps from './renderProps';
import HookView from './hook';
import HocView from './hoc';
import { Button, Row, Col } from 'antd';
import { Translation } from 'react-i18next';
import './i18n'; //这里是为了写demo，不影响react-intl的使用。正确方式应该放在入口文件中，例如App.js

export default class Index extends React.Component {

    render() {
        return (
            <div>
                <RenderProps />
                <HookView />
                <HocView />
                <Translation>
                    {
                        (t, { i18n }) => (
                            <Row gutter={16} style={{ margin: 20 }}>
                                <Col><Button onClick={() => i18n.changeLanguage('zh')}>{t('切换到中文')}</Button></Col>
                                <Col><Button onClick={() => i18n.changeLanguage('en')}>{t('切换到英文')}</Button></Col>
                                <Col><Button onClick={() => i18n.changeLanguage('ja')}>{t('切换到日文')}</Button></Col>
                            </Row>
                        )
                    }
                </Translation>

            </div>
        )
    }
}
