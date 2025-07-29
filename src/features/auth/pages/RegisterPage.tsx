import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const RegisterPage = () => {
    return (
        <PageContainer>
            <SectionContainer padded className="min-h-[calc(100vh-144px)] w-full flex flex-col justify-center m-auto">
                <Card>
                    <CardHeader className="flex flex-col items-center justify-center">
                        <h1 className="text-primary text-3xl font-bold">Buat Akun</h1>
                        <p className="text-muted-foreground">Qepoin kreator favorit kamu</p>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </SectionContainer>
        </PageContainer>
    )
}


export default RegisterPage;
