import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Suspense } from 'react';
import Email from '@/assets/Icon/email.svg';
import Phone from '@/assets/Icon/phone.svg';
import React from 'react';
import Logo from '../../assets/Icon/Logo.png';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import DesktopMenu from '../DesktopMenu';
import MobMenu from '../MobMenu';


const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const Menus = [
    {
      name: t('nav.home'),
      gridCols: 2,
      href: '/'
    },
    {
      name: t('nav.about'),
      subMenuHeading: ['Design', 'Scale'],
      subMenu: [
        {
          name: 'Design',
          desc: 'Responsive design',
          // icon: PanelsTopLeft,
        },
        {
          name: 'Management',
          desc: 'Site control',
          // icon: Bolt,
        },
        {
          name: 'Navigation',
          desc: 'Link pages',
          // icon: PanelTop,
        },
        {
          name: 'CMS',
          desc: 'Management content',
          // icon: Database,
        },
      ],
      gridCols: 2,
    },
    {
      name: t('nav.service'),
      subMenuHeading: ['Design', 'Scale'],
      subMenu: [
        {
          name: 'internationalTaxation',
          desc: 'Responsive design',
          // icon: PanelsTopLeft,
          href: '/service/internationalTaxation'
        },
        {
          name: 'Management',
          desc: 'Site control',
          // icon: Bolt,
        },
        {
          name: 'Navigation',
          desc: 'Link pages',
          // icon: PanelTop,
        },
        {
          name: 'CMS',
          desc: 'Management content',
          // icon: Database,
        },
      ],
      gridCols: 2,
    },
    {
      name: t('nav.contact'),
      gridCols: 2,
      href: 'contactUs'
    },
  ];

  return (
    <Suspense fallback="Loading...">
      <header className="box-border h-fit text-[0.9375rem] absolute z-[2] inset-0 flex-col mx-5 md:mx-10 lg:mx-16 3xl:mx-[16.25rem] ">
        <div className="flex-center-between lg:py-10 py-5 border-[#4E555f] border-b-2">
          <div className="flex-center gap-x-10 xs:gap-x-4">
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
            <div className="flex content-center">
              <img
                src={Logo}
                alt="Logo"
                className="lg:w-[3.5275rem] lg:h-[4.875rem] w-[1.446875rem] h-[2rem] lg:mr-[2.16rem] mr-3"
              />
              <div className="flex flex-col items-center">
                <span className="lg:text-[2.5rem] lg:w-[10rem] text-[1.25rem] w-[5rem] text-justify">
                  诺成财富
                </span>
                <span className="lg:text-[1.25rem] lg:w-[10rem] text-[0.625rem] w-[5rem] tracking-wide">
                  Essence Wealth
                </span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="hidden lg:flex items-center z-[999] relative px-11 py-7 shadow text-taxPrimary text-[1.375rem] bg-taxSecondary rounded-none"
          >
            {t('buttons.scheduled_consultation')}
          </Button>
          <LanguageSwitcher />
        </div>

        <NavigationMenu className="flex-center-between border-[#4E555f] lg:border-b-2">
          <NavigationMenuList className="gap-x-[2.5rem] lg:flex-center py-[2rem] hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}

          </NavigationMenuList>
          <div className="3xl:flex-center gap-x-5 hidden">
            <div className="flex">
              <div className="flex mr-[2.875rem]">
                <div className="border-2 border-taxSecondary w-[3.875rem] h-[3.875rem] flex items-center justify-center rounded-full">
                  <img
                    src={Phone}
                    alt=""
                    className="w-[1.0625rem] h-[1.0625rem]"
                  />
                </div>
                <div className="flex flex-col justify-center ml-[0.625rem]">
                  <span className="text-[1.125rem] text-taxSecondary leading-[1.4375rem]">
                    联系电话：
                  </span>
                  <span className="leading-[1.75rem]">911-987654321</span>
                </div>
              </div>
              <div className="flex">
                <div className="border-2 border-taxSecondary w-[3.875rem] h-[3.875rem] flex items-center justify-center rounded-full">
                  <img
                    src={Email}
                    alt=""
                    className="w-[1.0625rem] h-[1.0625rem]"
                  />
                </div>
                <div className="flex flex-col justify-center ml-[0.625rem]">
                  <span className="text-[1.125rem] text-taxSecondary leading-[1.4375rem]">
                    邮箱：
                  </span>
                  <span className="leading-[1.75rem]">yourmail@mail.com</span>
                </div>
              </div>
            </div>
          </div>

        </NavigationMenu>
      </header>
    </Suspense>

  );
};

export default Navbar;
