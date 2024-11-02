import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Text from '@/Component/UI/Text';
import { Icon } from '@/Component/UI/IconFont/Icon';
import Language from './Language/Language';
import { useTranslation } from 'react-i18next';
import Container from '@/Component/UI/Container/Container';
import { Drawer } from 'antd';

function Header() {
  const { t } = useTranslation('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    setOpen(false);
  };

  return (
    <div className='relative z-10 h-[60px]'>
      <Container className='flex justify-between h-full items-center'>
        <ul className='flex gap-4 items-center'>
          <Text className='text-2xl text-[--brand-name-100]'>{t('txt_name_title')}</Text>
          <div className='flex gap-4 items-center hidden-header'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `${
                  isActive ? 'header_active' : ''
                } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
              }
            >
              <Text className='text-lg'>{t('txt_home')}</Text>
            </NavLink>
            <NavLink
              to={'/project'}
              className={({ isActive }) =>
                `${
                  isActive ? 'header_active' : ''
                } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
              }
            >
              <Text className='text-lg'>{t('txt_project')}</Text>
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                `${
                  isActive ? 'header_active' : ''
                } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
              }
            >
              <Text className='text-lg'>{t('txt_about')}</Text>
            </NavLink>
          </div>
        </ul>
        <ul className='flex gap-4 items-center hidden-header'>
          <Language />
          <Icon
            onClick={toggleTheme}
            icon={`${theme === 'light' ? 'icon-icon-light' : 'icon-icon-dark'}`}
            className='text-2xl text-[--bs-navbar-color] cursor-pointer'
          />
        </ul>
        <div className='hidden-menu'>
          <Icon
            icon='icon-hamburger-menu'
            className='text-[24px] text-[--text-white]'
            onClick={showDrawer}
          ></Icon>
          <Drawer onClose={onClose} open={open} className='!bg-[--background-body]'>
            <div className='flex flex-col gap-4'>
              <NavLink
                onClick={onClose}
                to={'/'}
                className={({ isActive }) =>
                  `${
                    isActive ? 'header_active' : ''
                  } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
                }
              >
                <Text className='text-lg'>{t('txt_home')}</Text>
              </NavLink>
              <NavLink
                onClick={onClose}
                to={'/project'}
                className={({ isActive }) =>
                  `${
                    isActive ? 'header_active' : ''
                  } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
                }
              >
                <Text className='text-lg'>{t('txt_project')}</Text>
              </NavLink>
              <NavLink
                onClick={onClose}
                to={'/about'}
                className={({ isActive }) =>
                  `${
                    isActive ? 'header_active' : ''
                  } hover:text-[--bs-navbar-hover-color] text-[--bs-navbar-color] `
                }
              >
                <Text className='text-lg'>{t('txt_about')}</Text>
              </NavLink>
              <Icon
                onClick={toggleTheme}
                icon={`${theme === 'light' ? 'icon-icon-light' : 'icon-icon-dark'}`}
                className='text-2xl text-[--bs-navbar-color] cursor-pointer'
              />
              <Language onClose={onClose} />
            </div>
          </Drawer>
        </div>
      </Container>
    </div>
  );
}

export default Header;
