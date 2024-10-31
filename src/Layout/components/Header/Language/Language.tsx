import React, { useState } from 'react';

import { MenuProps, Row } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown';
import { useTranslation } from 'react-i18next';
import Text from '@/Component/UI/Text';
import { Icon } from '@/Component/UI/IconFont/Icon';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import i18n from 'i18next';
const text_key = {
  vi: 'header_ling_vi',
  en: 'header_ling_en',
} as any;

const img_path = {
  vi: '/Images/flag-vn.png',
  en: '/Images/flag-uk.png',
} as any;

const Language = () => {
  const { t } = useTranslation('home');
  const language = i18n.language;
  const navigate = useNavigate();
  const onChangeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
    const currentPath = window.location.pathname; // Get current path
    navigate(currentPath, { state: { locale } });
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div
          className='flex items-center gap-[16px] cursor-pointer'
          onClick={() => onChangeLanguage('vi')}
        >
          <img src={img_path.vi} alt={'flag-en'} className='max-w-[24px] max-h-[18px]' />
          <Text className='text-[14px] font-normal'>{t('header_ling_vi')}</Text>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          className='flex items-center gap-[16px] cursor-pointer'
          onClick={() => onChangeLanguage('en')}
        >
          <img src={img_path.en} alt={'flag-en'} className='max-w-[24px] max-h-[18px]' />
          <Text className='text-[14px] font-normal'>{t('header_ling_en')}</Text>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']}>
        <Row wrap={false} className='gap-2 cursor-pointer flex items-center'>
          <img
            src={img_path[language as string]}
            alt={'flag-en'}
            className='max-w-[24px] max-h-[18px]'
          />
          <Text className='text-[--bs-navbar-hover-color]'>{t(text_key[language as string])}</Text>
          <Icon className='text-[--bs-navbar-hover-color]' icon='icon-alt-arrow-down' />
        </Row>
      </Dropdown>
    </div>
  );
};

export default Language;
