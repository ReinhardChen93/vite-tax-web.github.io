import AnimationRevealPage from "@/components/helpers/AnimationRevealPage";
import React from 'react'
import { Outlet } from 'react-router-dom';

const ServicePage: React.FC = () => {
  return (
    <AnimationRevealPage>
      <Outlet />
    </AnimationRevealPage>
  )
}

export default ServicePage