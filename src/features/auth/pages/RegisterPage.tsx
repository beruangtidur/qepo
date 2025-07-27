import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const RegisterPage = () => {
    return (
        <PageContainer>
            <SectionContainer className="min-h-[calc(100vh-144px)]">
                <Card>
                    <CardHeader className="flex flex-col items-center justify-center">
                        <h1>Create an Account</h1>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </SectionContainer>
        </PageContainer>
    )
}


export default RegisterPage;
