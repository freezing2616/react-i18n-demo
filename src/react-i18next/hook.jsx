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