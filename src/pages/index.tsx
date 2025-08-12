import { Button } from "~/components/ui/button";
import { LogOut, Moon, Sun } from "lucide-react";
import { api } from "~/utils/api";
import { useTheme } from "next-themes";
import { supabase } from "~/lib/supabase/client";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const {setTheme} = useTheme();

  const handleLogout = () => {
    void supabase.auth.signOut();
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b gap-y-8">
        <Button className="cursor-pointer"> Ayo sentuh aku</Button>

        <Button onClick={()=> setTheme('dark')} className="cursor-pointer" size="icon">
          <Moon />

        </Button>
        <Button onClick={()=> setTheme('light')}className="cursor-pointer" size="icon">
          <Sun />
        </Button>
       <Button onClick={handleLogout} variant="destructive" className="cursor-pointer">
        <LogOut />
       </Button>

      </main>
    </>
  );
}
