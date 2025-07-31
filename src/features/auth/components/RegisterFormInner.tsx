import { Button } from "~/components/ui/button"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import type { RegisterFormSchema } from "../forms/register"
import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"


type RegsiterFormInnerProps = {
    onRegisterSubmit : (values: RegisterFormSchema) => void
}

export const RegisterFormInner = (props: RegsiterFormInnerProps) => {
    const form = useFormContext<RegisterFormSchema>()
    const [ showPassword, setShowPassword] = useState<boolean>(false)


    return (
        <form onSubmit={form.handleSubmit(props.onRegisterSubmit)}>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                    return (
                        <>
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
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
                name="password"
                render={({ field }) => (
                    <>
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type={showPassword ? 'text' : 'password'} {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>

                    </>
                )}
            />

            <Label className="flex item-center gap-4">
                <Checkbox checked={showPassword} onCheckedChange={(checked) => { setShowPassword(!!checked) }} />
                Show Password
            </Label>


            <Button className="mt-5 w-full cursor-pointer" type="submit">Submit</Button>
        </form>
    )
}