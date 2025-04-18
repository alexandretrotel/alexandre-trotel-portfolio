"use client";
import "client-only";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <Card className="border-transparent bg-transparent shadow-none">
        <CardHeader>
          <CardTitle>Not found</CardTitle>
          <CardDescription>
            The page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => router.back()}>Go back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
