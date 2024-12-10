"use client"

import * as React from "react"
import { useNavigate } from "react-router"
import { cn } from "@/utils"
import { Mail, Phone, Building2 } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function CustomNavigationMenu() {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path, { replace: false });
  };

  return (
    <NavigationMenu>
      <div className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center">
          <Building2 className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold">诺诚财富</span>
          <span className="ml-2 text-sm">Essence Wealth</span>
        </div>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              onClick={() => handleNavigate('/')}
            >
              首页
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>服务项目</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="bg-gray-800 text-white p-4">
                <li><span onClick={() => handleNavigate('/international-tax')} className="cursor-pointer">国际税务</span></li>
                <li><span onClick={() => handleNavigate('/corporate-tax')} className="cursor-pointer">企业税务</span></li>
                <li><span onClick={() => handleNavigate('/personal-tax')} className="cursor-pointer">个人税务</span></li>
                <li><span onClick={() => handleNavigate('/accounting')} className="cursor-pointer">会计服务</span></li>
                <li><span onClick={() => handleNavigate('/family-office')} className="cursor-pointer">家族办公室</span></li>
                <li><span onClick={() => handleNavigate('/tax-planning')} className="cursor-pointer">税务筹划</span></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              onClick={() => handleNavigate('/cases')}
            >
              经典案例
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              onClick={() => handleNavigate('/tax-analysis')}
            >
              税法热点解析
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              onClick={() => handleNavigate('/consultation')}
            >
              付费咨询
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()}
              onClick={() => handleNavigate('/contact')}
            >
              联系我们
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <span>联系电话: 911-987654321</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            <span>邮箱: yourmail@mail.com</span>
          </div>
        </div>
      </div>
    </NavigationMenu>
  )
}