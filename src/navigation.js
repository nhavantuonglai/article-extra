import { getBlogPermalink } from './utils/permalinks';

export const headerData = {

	links: [

		{
			text: 'Giới thiệu',
			href: 'https://nhavantuonglai.com/about',
		},

		{
			text: 'Bài viết',
			links: [
				{
					text: 'Đọc thêm',
					href: '/article',
				},
				{
					text: 'Viết lách',
					href: '/viet-lach',
				},
				{
					text: 'Lập trình',
					href: '/tags/developer',
				},
				{
					text: 'Nghiên cứu',
					href: '/tags/nghien-cuu',
				},
				{
					text: 'Văn chương',
					href: '/van-hoc',
				},
			],
		},

		{
			text: 'Công cụ',
			links: [
				{
					text: 'Xem thêm',
					href: 'https://nhavantuonglai.com//analytics',
				},
				{
					text: 'Trợ lý Chat AI',
					href: 'https://nhavantuonglai.com//analytics/integrate',
				},
				{
					text: 'Radio trực tuyến',
					href: 'https://nhavantuonglai.com//analytics/radio',
				},
				{
					text: 'Từ điển tiếng Anh',
					href: 'https://nhavantuonglai.com//analytics/dictionary',
				},
				{
					text: 'Kiểm tra phạt nguội (Beta)',
					href: 'https://nhavantuonglai.com//analytics/phat-nguoi',
				},
				{
					text: 'Dịch phụ đề AI (Beta)',
					href: 'https://nhavantuonglai.com//analytics/subtitle',
				},
				{
					text: 'Quét chữ trong ảnh (Beta)',
					href: 'https://nhavantuonglai.com//analytics/ocr',
				},
			],
		},

		{
			text: 'Dịch vụ',
			links: [
				{
					text: 'Xem thêm',
					href: 'https://nhavantuonglai.com//services',
				},
				{
					text: 'Viết bài chất lượng cao',
					href: 'https://nhavantuonglai.com//services/copywriter',
				},
				{
					text: 'Thiết kế website',
					href: 'https://nhavantuonglai.com//services/website',
				},
				{
					text: 'Triển khai Marketing',
					href: 'https://nhavantuonglai.com//services/marketing',
				},
				{
					text: 'Triển khai SEO',
					href: '/services/seo',
				},
			],
		},

		{
			text: 'Liên hệ',
			href: 'https://nhavantuonglai.com//contact',
		},

	],

	actions: [{
		text: 'Đọc thêm',
		href: 'https://instagram.com/nhavantuonglai',
		target: '_blank'
		}],
};

export const footerData = {

	links: [

		{

			title: 'Công cụ',
			links: [
				{
					text: 'Trợ lý Chat AI',
					href: 'https://nhavantuonglai.com//analytics/integrate',
				},
				{
					text: 'Từ điển tiếng Anh',
					href: 'https://nhavantuonglai.com//analytics/dictionary',
				},
				{
					text: 'Radio trực tuyến',
					href: 'https://nhavantuonglai.com//analytics/radio',
				},
				{
					text: 'Kiểm tra phạt nguội',
					href: 'https://nhavantuonglai.com//analytics/phat-nguoi',
				},
			],
		},

		{
			title: 'Danh mục',
			links: [
				{
					text: 'Viết lách',
					href: '/tags/viet-lach'
				},
				{
					text: 'Viết thuê',
					href: '/tags/viet-thue'
				},
				{
					text: 'Đoản văn',
					href: '/tags/doan-van'
				},
				{
					text: 'Nghiên cứu',
					href: '/tags/nghien-cuu'
				},
			],
		},

		{
			title: 'Chuyên mục',
			links: [
				{
					text: 'Tôn giáo',
					href: '/tags/ton-giao'
				},
				{
					text: 'Triết học',
					href: '/tags/triet-hoc'
				},
				{
					text: 'Khoa học',
					href: '/tags/khoa-hoc'
				},
				{
					text: 'Tâm lý',
					href: '/tags/tam-ly-hoc'
				},
			],
		},

		{
			title: 'Chuyên đề',
			links: [
				{
					text: 'Kỹ năng viết lách',
					href: '/tags/ky-nang-viet'
				},
				{
					text: 'Tối ưu website',
					href: '/tags/website'
				},
				{
					text: 'Vũ trụ rộng lớn',
					href: '/tags/vu-tru'
				},
				{
					text: 'Kỹ năng thông minh',
					href: '/tags/ky-nang'
				},
			],
		},

	],

	secondaryLinks: [

		{
			text: 'Điều khoản',
			href: '/term'
		},

		{
			text: 'Chính sách',
			href: '/policy'
		},

		{
			text: 'v25.02.16',
			href: '/version'
		},

	],

	socialLinks: [

		{
			ariaLabel: 'X',
			icon: 'tabler:brand-x',
			href: 'https://x.com/nhavantuonglai'
		},

		{
			ariaLabel: 'Instagram',
			icon: 'tabler:brand-instagram',
			href: 'https://instagram.com/nhavantuonglai'
		},

		{
			ariaLabel: 'Linkedin',
			icon: 'tabler:brand-linkedin',
			href: 'https://linkedin.com/in/nguyenchanhdanh'
		},

		{
			ariaLabel: 'RSS',
			icon: 'tabler:rss',
			href: '/rss.xml'
		},

	],

};