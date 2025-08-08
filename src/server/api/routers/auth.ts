import z from "zod";
import { passwordSchema } from "~/schemas/auth";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const postRouter = createTRPCRouter({
    register: publicProcedure.input(z.object({
        email: z.string().email().toLowerCase(),
        password: passwordSchema
    })).mutation(async ({ctx, input}) =>{
        const {db}  = ctx
        const {email, password} = input

        const supabase = sup
    })


})