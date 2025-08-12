import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { api } from "~/utils/api";
import { toast } from "sonner";
import { supabase } from "~/lib/supabase/client";
import { AuthError } from "@supabase/supabase-js";
import { SupabaseAuthErrorCode } from "~/lib/supabase/authErrorCodes";
import { useRouter } from "next/router";
import { GuestRoute } from "~/components/layout/GuestRoute";

const LoginPage = () => {

    const router = useRouter();
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })


    const handleLoginSubmit = async (values: RegisterFormSchema) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password
            })
            if (error) throw error

            await router.replace('/')

        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.code) {
                    case SupabaseAuthErrorCode.invalid_credentials:
                        form.setError('email', { message: 'Email atau password salah' })
                        form.setError('password', { message: 'Email atau password salah' })
                        break;

                    case SupabaseAuthErrorCode.email_not_confirmed:
                        form.setError('email', { message: 'Email belum terverifikasi' })
                        break;
                    default:
                        toast.error("Sebuah kesalahan terjadi saat login, silahkan coba lagi")
                        break;
                }
            }
        }
    }

    return (
        <GuestRoute>
            <PageContainer>
                <SectionContainer padded className="min-h-[calc(100vh-144px)] w-full flex flex-col justify-center m-auto items-center">
                    <Card className="min-w-[480]">
                        <CardHeader className="flex flex-col items-center justify-center">
                            <h1 className="text-primary text-3xl font-bold">Silahkan Login🖖</h1>
                            <p className="text-muted-foreground">Qepoin kreator favorit kamu</p>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <RegisterFormInner
                                    // isLoading={true}
                                    onRegisterSubmit={handleLoginSubmit}
                                    buttonText="Masuk"
                                    isShowPassword={false}
                                />
                            </Form>

                            {/* ====== */}

                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <div className="flex items-center justify-between w-full gap-x-4">
                                <div className="w-full h-[2px] border-t-2"></div>
                                <p className="flex-1 text-muted-foreground text-nowrap text-sm">Atau lanjut dengan</p>
                                <div className="w-full border-t-2 h-[2px]"></div>
                            </div>
                            <Button variant="secondary" className="w-full cursor-pointer" size="lg">
                                <FcGoogle />
                                Login dengan Google</Button>
                            <p>Belum  punya akun? Daftar dulu dong <Link href="/register" className="text-blue-600 font-bold">P, daftar</Link></p>
                        </CardFooter>
                    </Card>
                </SectionContainer>
            </PageContainer>
        </GuestRoute>
    )
}


export default LoginPage;
