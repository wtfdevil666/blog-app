"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { BlogEditSchema } from "@/schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { permanentRedirect } from "next/navigation";
import { editBlog } from "@/actions";
import { useRouter } from "next/navigation";

const EditForm = ({
    id,
    title,
    description,
    content,
}: {
    id: string;
    title: string;
    description: string;
    content: string;
}) => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof BlogEditSchema>>({
        resolver: zodResolver(BlogEditSchema),
        defaultValues: {
            title: "",
            description: "",
            content: "",
        },
    });
    const router = useRouter();
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editContent, setEditContent] = useState(content);
    const [success, setSuccess] = useState("");

    const onSubmit = (values: z.infer<typeof BlogEditSchema>) => {
        startTransition(() => {
            const data = {
                title: editTitle,
                description: editDescription,
                content: editContent,
            };
            console.log("id", values);
            console.log("data", data);
            editBlog(id, data);
            setSuccess("Saved !");
            router.refresh();
            permanentRedirect(`/blog/${id}`);
        });
        router.push;
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
                                        onChangeCapture={(e) => {
                                            setEditTitle(e.currentTarget.value);
                                        }}
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
                                        onChangeCapture={(e) => {
                                            setEditDescription(
                                                e.currentTarget.value
                                            );
                                        }}
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
                                        onChangeCapture={(e) => {
                                            setEditContent(
                                                e.currentTarget.value
                                            );
                                        }}
                                        placeholder="Tell Your Story ..."
                                        disabled={isPending}
                                        className="h-[220px]"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="w-full mt-8">Save Changes</Button>
                </form>
            </Form>
        </div>
    );
};

export default EditForm;
