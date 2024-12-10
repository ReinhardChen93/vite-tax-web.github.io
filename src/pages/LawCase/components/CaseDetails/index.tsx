import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseDetail } from "../../data";

interface CaseDetailsProps {
  caseDetails: CaseDetail;
}

export function CaseDetails({ caseDetails }: CaseDetailsProps) {
  return (
    <Card className="mb-8 bg-white text-[#1F2732] rounded-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">案例细节</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">客户</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">{caseDetails.clientName}</p>
            </div>
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">日期</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">{caseDetails.date}</p>
            </div>
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">Service Value</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">${caseDetails.serviceValue}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">Law Type</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">{caseDetails.lawType}</p>
            </div>
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">Case Status</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">{caseDetails.caseStatus}</p>
            </div>
            <div className="border-b-[1px] border-[#909090] pb-6">
              <h3 className="text-lg  font-bold">Time Frame</h3>
              <p className="mt-1 text-sm text-[#909090] font-medium">{caseDetails.timeFrame}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 bg-taxSecondary">
          <div className="border-[1px] border-black py-7 ">
            <ul className="w-fit mx-auto">
              <li className="text-xl font-bold mb-2 w-fit ">Result</li>
              <li className="text-3xl font-bold w-fit ">${caseDetails.result}</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}