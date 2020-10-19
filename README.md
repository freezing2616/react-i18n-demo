

## React-i18n
####  安装依赖
```
# npm
$ npm install react-i18next i18next --save
```
如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
```
npm install i18next-http-backend i18next-browser-languagedetector --save
```

#### 初始化配置
新增i18n.js文件
```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './locales/resources'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'zh',
    lng: 'zh',
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
```
将**i18n.js**文件引入到入口文件中App.js
```js
import React from 'react';
import './i18n';

export default class App extends React.Component {

    render() {
        return (
            <div>
                {/* 省略...... */}
            </div>
        )
    }
}

```
#### 切换语言
```js
<Button onClick={() => i18n.changeLanguage('zh')}>{t('切换到中文')}</Button>
```
#### RenderProps
```js
import React from 'react';
import { Translation } from 'react-i18next';

const Index = () => {
    return (
        <Translation>
            {
                t => {
                    return (
                        <div style={{background: 'red', margin: 20, color: 'white', width: 200}}>
                            {t('methods.renderProps')}
                        </div>
                    );
                }
            }

        </Translation>
    )
}

export default Index;
```

#### Hook

### 
```js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div style={{ background: 'yellow', margin: 20, width: 200 }}>
            {t('methods.hook')}
        </div>
    )
}

export default Index;
```

#### Hoc
```js
import React from 'react';
import { withTranslation } from 'react-i18next';

const Index = ({ t }) => {
  return (
    <div style={{ background: 'blue', margin: 20, color: 'white', width: 200 }}>
      {t('methods.hoc')}
    </div>
  );
}

export default withTranslation()(Index);
```

## React-intl
#### 安装依赖
```
npm i -S react-intl
```

#### 初始化
```js
mport React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import App from './App';

export default class Index extends React.Component {

    render() {
        const { locale } = this.state;
        return (
            <IntlProvider locale={locale} messages={this.messages[locale]}>
                <App >
            </IntlProvider>
        )
    }
}
```

#### 切换语言
```js
mport React from 'react';
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
```

#### 通过id获取对应的语言文本
```js
<div style={{ margin: 20, background: 'red', color: 'white', width: 233 }}>
    <FormattedMessage id='welcome' />
</div>
```

#### 使用缺省消息
```js
<div style={{ margin: 20, background: 'purple', color: 'white', width: 233 }}>
    <FormattedMessage id='defaultMessage' defaultMessage='使用缺省消息' />
</div>
```

#### 使用描述
```js
<div style={{ margin: 20, background: 'black', color: 'white', width: 233 }}>
    <FormattedMessage id='description' defaultMessage='描述' description='使用描述' />
</div>
```

#### 通过value传值
```js
<div style={{ margin: 20, background: 'blue', color: 'white', width: 233 }}>
    <FormattedMessage id='value' values={{ value: 233 }} />
</div>
```

#### 函数作为FormattedMessage的子组件
```js
<div style={{ margin: 20, background: 'green', color: 'white', width: 233 }}>
    <FormattedMessage id='function'>
        {
            txt => (
                <div style={{fontSize: 30}}>{txt}</div>
            )
        }
    </FormattedMessage>
</div>
```

#### 参考文档
- https://react.i18next.com/
- https://formatjs.io/
- https://blog.bitsrc.io/react-i18n-how-to-internationalize-your-react-application-3a12bba5a980

#### Demo 地址
https://github.com/freezing2616/react-i18n-demo
