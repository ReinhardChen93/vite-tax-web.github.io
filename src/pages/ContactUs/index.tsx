import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import * as z from "zod"
import AnimationRevealPage from "@/components/helpers/AnimationRevealPage"
import HeaderBox from '@/components/HeaderBox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  service: z.string().min(2, {
    message: "Please specify the service you want.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})
const ContactUs: React.FC = () => {
  const { t } = useTranslation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <AnimationRevealPage>
      <HeaderBox title={t('nav.contact')} />
      <div className="custom-container ">
        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr,1fr] gap-10 relative">
            <div className="relative p-4 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:translate-x-[50%] after:w-[1px] after:bg-[#3A4553] last:after:hidden">
              <h2 className="text-2xl font-bold text-taxSecondary mb-4">Say Hello To Pecter</h2>
              <p className="text-gray-600 dark:text-gray-300">
                There are of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
            </div>

            <div className="relative p-4 after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:translate-x-[50%] after:w-[1px] after:bg-[#3A4553] last:after:hidden">
              <h2 className="text-xl font-semibold text-taxSecondary mb-4">Las Vegas</h2>
              <p>4264 Mesa Drive</p>
              <p>contact@diocara.com</p>
              <p>+0 123 654 78910</p>
            </div>

            <div className="relative p-4">
              <h2 className="text-xl font-semibold text-taxSecondary mb-4">New York</h2>
              <p>4264 Mesa Drive</p>
              <p>contact@diocara.com</p>
              <p>+0 123 654 78910</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blueSsecondary p-4 md:p-24 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20">
                <div className="flex flex-col gap-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem >
                        <FormLabel >
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input

                            placeholder="Your name here "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel >Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email here" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel >Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <FormControl>
                          <Input placeholder="What service you want" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel >Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={8}
                            placeholder="Your message here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="w-full bg-taxSecondary text-taxPrimary font-bold py-7 px-16 hover:bg-opacity-90 transition-colors"
                  >
                    {t('buttons.submit')}
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Contact Details Footer */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-12">
          <div className="flex flex-col sm:flex-row px-10 py-16 gap-16 bg-blueSsecondary">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-taxSecondary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-normal text-lg text-taxSecondary">Call Us On:</h3>
                <p className="text-xl">911-987654321</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-taxSecondary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-normal text-lg text-taxSecondary">Email Us:</h3>
                <p className="text-xl">yourmail@email.com</p>
              </div>
            </div>
          </div>


          <div className="flex items-center space-x-4 px-10 py-16 bg-blueSsecondary">
            <div className="p-3 rounded-full bg-taxSecondary">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-normal text-lg text-taxSecondary">Main Office:</h3>
              <p className="text-xl">Los Feliz Blvd, Los Angeles, CA 90027, USA</p>
            </div>
          </div>
        </div>
      </div>
    </AnimationRevealPage>
  )
}

export default ContactUs