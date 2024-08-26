"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const contactFormSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
    message: z.string().min(10).max(500),
});

export function ContactForm() {
    // 1. Define form
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof contactFormSchema>) {
      // Submit 
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[20rem] md:w-[24rem]">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input className="bg-green-900" placeholder="Name" {...field} />
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
                        <FormControl>
                            <Input className="bg-green-900" placeholder="Email" {...field} />
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
                        <FormControl>
                            <Input className="bg-green-900" placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                /> 
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Textarea className="bg-green-900" placeholder="Enter your message here..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                /> 
                <Button type="submit">Submit</Button>
            </form>
        </Form>
      )
}