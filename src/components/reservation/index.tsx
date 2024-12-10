import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import ContactFormBg from "@/assets/images/ContactFormBg.png";
import styled from "styled-components";

const formSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z.string().min(11, "请输入有效的电话号码"),
  businessScope: z.string().min(2, "请输入业务范围"),
  message: z.string().min(10, "留言至少需要10个字符"),
});

const FormContainer = styled.div`
  background-image: url(${ContactFormBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function ReservationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessScope: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // 处理表单提交逻辑
  }

  return (
    <FormContainer className="p-5 md:p-10 lg:p-16 xl:px-[16.25rem] xl:py-[12.125rem] bg-blueSsecondary relative">
      <Card className="rounded-lg shadow-lg bg-gradient-to-br from-taxPrimary to-taxPrimary/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100 font-medium">
                        姓名 *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-0 bg-white/10 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 rounded-md"
                          placeholder="请输入姓名"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100 font-medium">
                        邮箱 *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-0 bg-white/10 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 rounded-md"
                          placeholder="请输入邮箱"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100 font-medium">
                        联系电话 *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-0 bg-white/10 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 rounded-md"
                          placeholder="请输入联系电话"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessScope"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100 font-medium">
                        业务范围 *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="border-0 bg-white/10 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 rounded-md"
                          placeholder="请输入业务范围"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-200" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-100 font-medium">
                      留言 *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="请输入留言内容"
                        className="resize-none border-0 bg-white/10 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 rounded-md"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-taxSecondary hover:bg-[#d4b274] text-taxPrimary transition-colors duration-300 min-w-[160px] font-medium shadow-md hover:shadow-lg"
                >
                  立即预约
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </FormContainer>
  );
}
