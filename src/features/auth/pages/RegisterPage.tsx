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

const RegisterPage = () => {
    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const handleRegister = (values: RegisterFormSchema) => {
        alert('regis')
    }

    return (
        <PageContainer>
            <SectionContainer padded className="min-h-[calc(100vh-144px)] w-full flex flex-col justify-center m-auto items-center">
                <Card className="min-w-[480]">
                    <CardHeader className="flex flex-col items-center justify-center">
                        <h1 className="text-primary text-3xl font-bold">Buat Akun</h1>
                        <p className="text-muted-foreground">Qepoin kreator favorit kamu</p>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <RegisterFormInner onRegisterSubmit={handleRegister}/>
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
                            Buat akun dengan Google</Button>
                        <p>Sudah punya akun? <Link href="/login" className="text-blue-600 font-bold">P, login</Link></p>
                    </CardFooter>
                </Card>
            </SectionContainer>
        </PageContainer>
    )
}


export default RegisterPage;
