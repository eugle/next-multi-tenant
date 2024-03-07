/** @format */

'use client';

import Banner from '@/app/components/home/banner';
import Header from '@/app/components/home/header';
import Footer from '@/app/components/home/footer';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Trade() {
	return (
		<>
			<Banner />
			<Header />
			<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
				className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
				aria-hidden="true"
				>
				<defs>
					<pattern
					id="e813992c-7d03-4cc4-a2bd-151760b470a0"
					width={200}
					height={200}
					x="50%"
					y={-1}
					patternUnits="userSpaceOnUse"
					>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
					<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					strokeWidth={0}
					/>
				</svg>
				<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
				</svg>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				<div className="lg:pr-4">
					<div className="lg:max-w-lg">
					<p className="text-base font-semibold leading-7 text-indigo-600">外贸官网</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">海外服务器</h1>
					<p className="mt-6 leading-8 text-gray-500">
						在极简官网的基础上，增加英文版本和海外服务器部署，使海外客户能够快速访问。通过英文官网达到宣传展示的目的，以获取海外订单。
					</p>
					</div>
				</div>
				</div>
				<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
				<img
					className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
					src="/product/trade.jpg"
					alt="外贸官网 - 海外服务器"
				/>
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				<div className="lg:pr-4">
					<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
					<p>
						即将上线...
					</p>
					</div>
				</div>
				</div>
			</div>
			</div>
			<Footer />
		</>
	);
}
