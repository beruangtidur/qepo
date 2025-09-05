import { createTRPCRouter, protectedProcedure } from "../trpc";

export const profileRouter = createTRPCRouter({
    getProfile: protectedProcedure.query(async ({ctx}) => {
        const {db, user} = ctx

        const profile = await db.profile.findUnique({
            where: {userId: user?.id},
            select: {
                email: true,
                bio: true,
                profilePictureUrl: true,
                username: true
                
            }
        })

        return profile
    })
})