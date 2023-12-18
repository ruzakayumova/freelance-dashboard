import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[350px_1fr]">
      <div className="hidden bg-slate-800 lg:block bg-slate-900  ">
        <div className="flex h-full max-h-screen flex-col">
          <div className="flex h-[350px] items-center px-16 mb-12">
            <Link
              className="flex items-center font-semibold flex-col justify-center gap-5"
              href="#"
            >
              <Avatar className="w-32 h-32">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-lg">Feruza Abdukayumova</span>
              <Button className="bg-indigo-500 rounded-3xl hover:bg-indigo-600">
                Entry level
              </Button>
            </Link>
          </div>
          <div
            className="flex-1 py-2 bg-gray-800"
            style={{ borderTopRightRadius: "140px" }}
          >
            <nav className="grid items-start px-4 text-lg font-medium ">
              <Link
                className="flex items-center gap-5 rounded-lg px-3 py-4 text-white transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-5 rounded-lg px-3 py-4 text-gray-400 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Projects
              </Link>
              <Link
                className="flex items-center gap-5 rounded-lg px-3 py-4 text-gray-400  transition-all hover:text-white dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Invoices
              </Link>
              <Link
                className="flex items-center gap-5 rounded-lg px-3 py-4 text-gray-400 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <GlobeIcon className="h-4 w-4" />
                Reports
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-zinc-50">
        <header className="flex h-14 lg:h-[60px] items-center justify-between w-full">
          <div>
            <h1 className="text-stone-900 font-bold text-2xl">
              Good morning, <span className="text-gray-500">Feruza</span>
            </h1>
          </div>
          <div className="">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-56 bg-gray-200 rounded-xl shadow-none border-none appearance-none pl-8 dark:bg-gray-950 placeholder:text-gray-500"
                  placeholder="Search for projects"
                  type="search"
                />
              </div>
            </form>
          </div>
        </header>
        <main className="">
          <div className="grid grid-cols-3 my-12">
            <Card className="bg-indigo-500 text-white mr-12 rounded-3xl p-8">
              <LineChartIcon />
              <CardTitle className="px-0 text-lg py-2">Earnings</CardTitle>
              <CardContent className="text-5xl px-0">
                <span className="text-gray-300">$</span>8350
              </CardContent>
              <CardFooter className="bg-indigo-600 rounded-3xl py-2 mr-12 text-xs">
                +10% since last month
              </CardFooter>
            </Card>
            <div className="bg-white p-3 mr-14 rounded-xl shadow-xl">
              <Card className="bg-gray-100 border-none flex flex-row-reverse items-center justify-end gap-4 rounded-xl p-4 mb-4">
                <div className="">
                  <CardTitle className="text-black p-0 text-lg pb-2">
                    Rank
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-gray-500">
                    In top 30%
                  </CardDescription>
                </div>
                <CardContent className="bg-indigo-500 rounded-xl p-4 text-2xl text-white">
                  98
                </CardContent>
              </Card>
              <Card className="bg-gray-100 border-none rounded-xl p-4">
                <div className="flex flex-row-reverse items-center justify-end gap-4 mb-4">
                  <div>
                    <CardTitle className="text-black p-0 text-lg pb-2">
                      Projects
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      8 this month
                    </CardDescription>
                  </div>
                  <CardContent className="bg-indigo-500 rounded-xl p-4 text-2xl text-white">
                    32
                  </CardContent>
                </div>
                <cardFooter>
                  <Badge className="bg-slate-300 mr-2 hover:bg-slate-400">mobile app</Badge>
                  <Badge className="bg-slate-300 hover:bg-slate-400">branding</Badge>
                </cardFooter>
              </Card>
            </div>
            <div className="text-black">
              <h2 className="text-lg mb-4 font-medium">Your projects</h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <Card className="flex items-center border-none gap-4 mb-4 shadow-none">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="p-0 pb-2 text-md">
                      Logo design for bakery
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      1 day remaining
                    </CardDescription>
                  </div>
                </Card>
                <Card className="flex items-center border-none gap-4 mb-4 shadow-none">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="p-0 text-md pb-2">
                      Logo design for bakery
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      1 day remaining
                    </CardDescription>
                  </div>
                </Card>
                <Link
                  href="#"
                  className="flex justify-end text-indigo-800 text-md font-medium hover:text-indigo-600"
                >
                  See all projects
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 mr-12">
              <div>
                <h1 className="text-black text-lg mb-4 font-medium">
                  Recent Invoices
                </h1>
                <div className="rounded-3xl shadow">
                  <Card className="bg-white border-none flex items-center justify-between p-4 rounded-t-3xl">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-black p-0 text-lg pb-2">
                          Alexander Williams
                        </CardTitle>
                        <CardDescription className="text-gray-500">
                          JQ Holdings
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-emerald-400 px-5 py-2 hover:bg-green-100">
                      Paid
                    </Badge>
                    <p className="text-black text-lg">$1,200,87</p>
                  </Card>
                  <Card className="bg-white border-none flex items-center justify-between p-4 flex-1 rounded-b-3xl">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-black p-0 text-lg pb-2">
                          Alexander Williams
                        </CardTitle>
                        <CardDescription className="text-gray-500">
                          JQ Holdings
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-rose-100 text-rose-500 px-5 py-2 hover:bg-rose-100">
                      Late
                    </Badge>
                    <p className="text-black text-lg">$1,200,87</p>
                  </Card>
                </div>
              </div>
              <div>
                <Card className="bg-slate-800 border-none flex items-center justify-between px-4 py-6 mt-4 rounded-2xl">
                  <div className="flex items-center gap-5">
                  <SmileIcon />
                  <div>
                    <CardTitle className="p-0 text-white pb-2 text-lg">Engage with Clients</CardTitle>
                    <CardDescription className="text-gray-400">Join slack channel</CardDescription>
                  </div>
                  </div>
                  <Button className="bg-indigo-500 rounded-xl hover:bg-indigo-400">Join now</Button>
                </Card>
              </div>
            </div>
            <div className="">
              <h1 className="text-black text-lg mb-4 font-medium">Recommended Project</h1>
              <Card className="flex items-center p-5 bg-white border-none justify-between shadow rounded-t-3xl">
                <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="p-0 text-black text-md pb-2">Thomas Marting</CardTitle>
                  <CardDescription className="text-gray-400 text-xs">Updated 10 mins ago</CardDescription>
                </div>
                </div>
                <Badge className="bg-indigo-500 hover:bg-indigo-500 py-2 px-3">Design</Badge>
              </Card>
              <Card className="p-5 border-none bg-white shadow rounded-b-3xl">
                <CardTitle className="text-black text-md pb-2">
                  Need a desiner to form branding essentials for my business
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm pb-6">
                  Looking for a talanted brand designer to create all the
                  branding materials for my new startup.
                </CardDescription>
                <CardFooter className="bg-gray-100 p-3 flex items-center justify-between rounded-xl">
                  <p className="text-black">
                    <span className="text-gray-400">$</span>8,700<span className="text-gray-400">/month</span>
                  </p>
                  <Badge className="border-indigo-600 text-indigo-600 px-3">Full time</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DoorOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h3" />
      <path d="M13 20h9" />
      <path d="M10 12v.01" />
      <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
    </svg>
  );
}

function DotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}

function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function FrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
