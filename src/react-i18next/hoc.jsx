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