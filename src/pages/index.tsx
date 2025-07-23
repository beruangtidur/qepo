import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { api } from "~/utils/api";
import { useTheme } from "next-themes";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const {setTheme} = useTheme();

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
      </main>
    </>
  );
}
