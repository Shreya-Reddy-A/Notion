import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font=Poppins({
    subsets: ["latin"],
    weight:["400", "600"]

});
export const Logo=()=>{
    return(
        <div className="hidden md:flex items-center gap-x-2">
<Image src="/logo.png" height="100" width="100" alt="logo" className="dark:hidden"/>
<Image src="/logo-dark.png" height="100" width="100" alt="logo" className="hidden dark:block"/>
<p className={cn("font-semibold", font.className)}>
Clone
</p>
        </div>
    )
}

