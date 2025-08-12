import { useRouter } from "next/router"
import { useEffect, type PropsWithChildren } from "react"
import { supabase } from "~/lib/supabase/client"


export const GuestRoute = (props: PropsWithChildren) => {
    const router = useRouter()


    useEffect(() => {
        void (async () => {
            const user = await supabase.auth.getUser()

            if (user) {
                await router.replace('/')
            }
        }
        )()
    }, [])

    return props.children
}
