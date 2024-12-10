import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import AD_BG from '@/assets/images/LawCase/ad_bg.png';

export function Statistics() {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <Card className="relative bg-transparent border-none shadow-none rounded-none">
        <div className="absolute inset-0">
          <img
            src={AD_BG}
            alt="Courthouse"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">45+ Years</CardTitle>
          <p className="text-lg font-bold text-taxSecondary">OF NYC LEGAL EXPERIENCE</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            $18 Million settlement obtained for paralyzed dockworker in local counsel in Shreveport,
            Louisiana to badly young man.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="text-sm font-bold rounded-none px-24 py-7 bg-taxSecondary text-taxPrimary">
            {t('buttons.about_us')}
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-taxSecondary border-none shadow-none mt-7 rounded-none text-taxPrimary">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">$35Million</CardTitle>
          <p className="text-sm font-bold">RECOVERED FOR OUR CLIENTS</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            $18 Million settlement obtained for paralyzed dockworker in local counsel in Shreveport,
            Louisiana to badly young man.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="text-sm font-bold rounded-none px-14 py-7 bg-blueSsecondary text-white">
            {t('buttons.view_case_result')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}