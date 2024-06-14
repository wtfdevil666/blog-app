"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import * as z from "zod";
import { BlogSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { publish } from "@/actions";
import { useTransition } from "react";
import { permanentRedirect, redirect } from "next/navigation";

const WriteArea = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof BlogSchema>>({
        resolver: zodResolver(BlogSchema),
        defaultValues: {
            title: "",
            description: "",
            content: "",
        },
    });

    const onSubmit = (values: z.infer<typeof BlogSchema>) => {
        startTransition(() => {
            publish(values);
            permanentRedirect("/dashboard");
        });
    };

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        name="title"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Title"
                                        type="text"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="description"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        type="text"
                                        placeholder="Description"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="content"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        disabled={isPending}
                                        placeholder="Tell Your Story ..."
                                        className="h-[220px]"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="w-full mt-8">Publish</Button>
                </form>
            </Form>
        </div>
    );
};

export default WriteArea;
