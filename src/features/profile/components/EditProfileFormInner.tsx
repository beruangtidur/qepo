import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import type { EditProfileFormSchema } from "../forms/edit-profile"

type EditProfileFormInnerProps = {
    defaultValues: {
        username?: string,
        bio?: string | null
    }
}
export const EditProfileFormInner = (props: EditProfileFormInnerProps) => {
    console.log(props.defaultValues)
    const form = useForm<EditProfileFormSchema>({
        defaultValues:{
            bio: props.defaultValues.bio,
            username: props.defaultValues.username
        }
    })
    // {
    //     defaultValues: {
    //         username: props?.defaultValues.username,
    //         bio: props?.defaultValues.bio ?? ""
    //     }
    // }
    return (
        // <></>
        <Form {...form}>
            {/* <form action="" > */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                        return (
                            <>
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            </>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => {
                        return (
                            <>
                                <FormItem className="col-span-2">
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea rows={3} {...field} />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            </>
                        )
                    }}
                />
            {/* </form> */}
        </Form>
    )
}