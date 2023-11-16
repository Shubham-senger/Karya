"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useConvexAuth} from "convex/react"
import { Spinner } from "@/components/spinner";
import {SignInButton} from "@clerk/clerk-react";
import Link from "next/link";
export const Heading = () => {
    const {isAuthenticated,isLoading}=useConvexAuth()
    return ( 
        <div className="max-w-3xl space-y-4 dark:bg-[#1f1f1f]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Organize your work and life with <span className="underline">Karya</span>.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Karya is where <br />
                better && faster work happens.
            </h3>
            {isLoading &&(
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading&&(
                <Button asChild>
                    <Link href="/documents">
                        Enter Karya
                        <ArrowRight className="h-4 w-4 ml-2 "/>
                    </Link>                
            </Button>
            )}
            {!isAuthenticated && !isLoading &&(
                <SignInButton mode="modal">
                    <Button>
                        Get Karya
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
     );
}