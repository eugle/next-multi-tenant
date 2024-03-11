"use client";

import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    DeviceTabletIcon,
    GlobeEuropeAfricaIcon,
    FingerPrintIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const products = [
    { name: '极简官网', description: '轻松快速地完成宣传型企业官网的创建', href: '/official/product/website', icon: DeviceTabletIcon },
    { name: '极简商城', description: '简单高效地创建你的独立极简商城', href: '/official/product/store', icon: ShoppingBagIcon },
    { name: '外贸官网', description: '基于海外服务器的宣传型英文产品官网', href: '/official/product/trade', icon: GlobeEuropeAfricaIcon },
]
const callsToAction = [
    { name: '创建教程', href: '/official/tutorial', icon: PlayCircleIcon },
    { name: '联系销售', href: '/official/contact', icon: ChatBubbleLeftEllipsisIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

import basePath from "@/app/utils/config";

async function getData(token) {
    const res = await fetch(`${basePath}/auth/me`, {
        method: 'GET',
        headers: {
            "x-tenant": "www",
            "Content-Type": "application/json",
            "authorization": "Bearer "+token
        }
    })
   
    return res.json()
}

export default function Header() {
    const [user, setUser] = useState('');

    const router = useRouter()

    useEffect(() => {
        if(window !== "undefined"){
            const historyUser = localStorage.getItem('UserToken') || '';
            
            getData(historyUser).then(res => {
                if(res.statusCode === 401){
                    localStorage.setItem('UserToken', '')
                }
                setUser(res);
            });
        }
    },[]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b-[1px] border-gray-200" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-6 w-auto" src="/logo/logo-only-photo.svg"
                            alt="积木库 - 移动端优先的免费自助建站平台"
                            title="积木库 - 移动端优先的免费自助建站平台" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  hover:text-gray-700">
                            轻快极简的产品系列
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link href={item.href} className="block font-semibold text-gray-900  hover:text-gray-700">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href="/official/custom" className="text-sm font-semibold leading-6 text-gray-900  hover:text-gray-700">
                        定制
                    </Link>
                    <Link href="/official/tutorial" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        教程
                    </Link>
                    {/* <Link href="/official/company" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        公司
                    </Link>
                    <Link href="/official/aigc" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        AI内容生成辅助系统
                    </Link> */}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href={user ? "/account" : "/account/login"} className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        {user ? '会员中心' : '登陆'} <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-6 w-auto"
                                src="/logo/logo-only-photo.svg"
                                alt="积木库 - 移动端优先的免费自助建站平台"
                                title="积木库 - 移动端优先的免费自助建站平台"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                轻快极简的产品系列
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="/official/custom"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    定制
                                </Link>
                                <Link
                                    href="/official/tutorial"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    教程
                                </Link>
                                {/* <Link
                                    href="/official/company"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    公司
                                </Link>
                                <Link
                                    href="/official/aigc"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    AI内容生成辅助系统
                                </Link> */}
                            </div>
                            <div className="py-6">
                                <Link
                                    href={user ? "/account" : "/account/login"}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {user ? '会员中心' : '登陆'} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
