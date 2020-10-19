import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { Button, Row, Col } from 'antd';
import zh from './locales/zh';
import en from './locales/en';
import ja from './locales/ja';

export default class Index extends React.Component {

    messages = {
        zh: zh,
        en: en,
        ja: ja
    }
    state = {
        locale: 'zh'
    }

    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.messages[this.state.locale]}>
                <div style={{ margin: 20, background: 'red', color: 'white', width: 233 }}>
                    <FormattedMessage id='welcome' />
                </div>
                <div style={{ margin: 20, background: 'purple', color: 'white', width: 233 }}>
                    <FormattedMessage id='defaultMessage' defaultMessage='使用缺省消息' />
                </div>
                <div style={{ margin: 20, background: 'black', color: 'white', width: 233 }}>
                    <FormattedMessage id='description' defaultMessage='描述' description='使用描述' />
                </div>
                <div style={{ margin: 20, background: 'blue', color: 'white', width: 233 }}>
                    <FormattedMessage id='value' values={{ value: 233 }} />
                </div>
                <div style={{ margin: 20, background: 'green', color: 'white', width: 233 }}>
                    <FormattedMessage id='function'>
                        {
                            txt => (
                                <div style={{fontSize: 30}}>{txt}</div>
                            )
                        }
                    </FormattedMessage>
                </div>
                <Row gutter={16} style={{ margin: 20 }}>
                    <Col>
                        <Button onClick={() => this.setState({ locale: 'zh' })}>
                            <FormattedMessage id='changeToChinese' />
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => this.setState({ locale: 'en' })}>
                            <FormattedMessage id='changeToEnglish' />
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => this.setState({ locale: 'ja' })}>
                            <FormattedMessage id='changeToJapanese' />
                        </Button>
                    </Col>
                </Row>
            </IntlProvider>
        )
    }
}