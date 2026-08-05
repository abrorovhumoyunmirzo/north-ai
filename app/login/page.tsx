"use client";

import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 lg:grid lg:grid-cols-12">
      {/* Left Column: Hero/Brand Area (Visible on lg screens) */}
      <div className="relative hidden flex-col justify-between border-r border-neutral-200/80 bg-neutral-50/50 p-12 lg:col-span-5 lg:flex xl:col-span-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Welcome back.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Continue building your future with AI.
          </p>
        </div>

        <div className="text-xs text-neutral-400">
          © 2026 North AI Inc. All rights reserved.
        </div>
      </div>

      {/* Right Column: Auth Card */}
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 lg:col-span-7 lg:p-8 xl:col-span-6">
        {/* Mobile Logo */}
        <div className="mb-8 flex justify-center lg:hidden">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <Card className="w-full max-w-md border-neutral-200/80 shadow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-neutral-900">
              Sign in
            </CardTitle>
            <CardDescription className="text-neutral-500">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="border-neutral-200 focus-visible:ring-neutral-900"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-neutral-200 focus-visible:ring-neutral-900"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center space-x-2 pt-1">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="text-sm font-normal text-neutral-600 cursor-pointer"
              >
                Remember me
              </Label>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-neutral-400">or</span>
              </div>
            </div>

            {/* Social Auth */}
            <Button
              variant="outline"
              className="w-full border-neutral-200 hover:bg-neutral-50"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
          </CardContent>

          <CardFooter className="flex justify-center border-t border-neutral-100 pt-6">
            <p className="text-sm text-neutral-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-neutral-900 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}