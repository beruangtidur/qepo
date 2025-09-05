import { useRef } from "react"
import { useForm } from "react-hook-form"
import { PageContainer } from "~/components/layout/PageContainer"
import { SectionContainer } from "~/components/layout/SectionContainer"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { api } from "~/utils/api"
import type { EditProfileFormSchema } from "../forms/edit-profile"
import { Edit } from "lucide-react"
import { EditProfileFormInner } from "../components/EditProfileFormInner"
import { AuthRoute } from "~/components/layout/AuthRoute"

const ProfilePage = () => {

    const inputFileRef = useRef<HTMLInputElement>(null)

    const handleOpenFile = () => {
        inputFileRef.current?.click()
    }

    const { data: getProfileData } = api.profile.getProfile.useQuery();
    // const form = useForm<EditProfileFormSchema>({
    //     values: {
    //         bio: getProfileData?.bio ?? "",
    //         username: getProfileData?.username ?? ""
    //     },
    // })

    return (
        <AuthRoute>
            <PageContainer>
                <SectionContainer
                    padded
                    minFullscreen
                    className="gap-y-6 py-8"
                >
                    <h1 className="text-3xl font-semibold mb-8">Profile Settings</h1>

                    <Card>
                        <CardContent className="pt-6 flex gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <Avatar className="size-24">
                                    <AvatarFallback>VF</AvatarFallback>
                                    <AvatarImage />
                                </Avatar>
                                <Button onClick={handleOpenFile} size="sm" variant="outline" className="cursor-pointer">Change Avatar</Button>
                                <input className="hidden" type="file" ref={inputFileRef} />
                            </div>
        
                            <div className="flex-1 grid grid-cols-2 gap-y-4">
                                {getProfileData && (
                                    <EditProfileFormInner defaultValues={{ bio: getProfileData?.bio, username: getProfileData?.username }} />
                                )}
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex justify-end gap-4 w-full">
                        <Button>Simpan</Button>
                    </div>

                </SectionContainer>
            </PageContainer>
        </AuthRoute>
    )
}


export default ProfilePage