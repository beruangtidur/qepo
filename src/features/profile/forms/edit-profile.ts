import z from "zod";

const editProfileFormSchema = z.object({
    username: z.string().min(5, {message: "Username minimal 5 karakter"}).max(16 , {message: "Username maksimal 16 karakter"}),
    bio: z.string().nullable()
})

export type EditProfileFormSchema = z.infer<typeof editProfileFormSchema>