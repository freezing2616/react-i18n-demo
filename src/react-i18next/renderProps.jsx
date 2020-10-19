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