import { Icons } from '@/components/icons'

type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    calendarLink?: string
    description: string | JSX.Element
    descriptionRaw: string
    projects: {
        name: string
        icon?: keyof typeof Icons
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
    openSource?: {
        description?: string
        projects?: {
            repository: string
            description: string | JSX.Element
            title: string
            link: string
        }[]
    }
}

export const CONFIG: Config = {
    name: 'Dickson ENEH',
    avatar: '/images/main.png',
    title: 'Software Engineer',
    siteUrl: 'https://Dickson.run/',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/DICKSON-ENEH',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dicksoneneh/',
            icon: 'linkedin',
        },
        {
            name: 'X',
            url: 'https://x.com/eneh_dickson',
            icon: 'x',
        },
        // {
        //     name: 'Upwork',
        //     url: 'https://www.upwork.com/freelancers/~0108a6d64ff5b64440',
        //     icon: 'upwork',
        // },
        {
            name: 'dickseneh99@gmail.com',
            url: 'mailto:dickseneh99@gmail.com',
            icon: 'email',
        },
    ],
    calendarLink: 'https://cal.com/rehoboth-ekene/30min',
    description: (
        <>
            Hi, I&apos;m Dickson from Nigeria. I work as a Full-stack Developer
            at{' '}
            <a
                href='https://www.megamillions.com/'
                target='_blank'
                className='whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
            >
                Mega Millions
                <Icons.arrowUpRight className='inline-block size-4' />
            </a>
            . I love building websites with good UI/UX, and I&apos;m also
            passionate about new technologies, open-source software, and
            contributing to the community.
        </>
    ),
    descriptionRaw: `Hi, I'm Dickson from Nigeria.  I work as a part-time Full-stack Developer at Mega Millions. I love building websites with good UI/UX, and I'm also passionate about new technologies, open-source software, and contributing to the community.`,
    projects: [
        {
            name: 'Mega Millions',
            image: '/images/megalogo.webp',
            description:
                'Mega Millions is one of Americas two big jackpot games, and the only one with Match 5 prizes up to $5 million (with the optional Megaplier).',
            url: 'https://www.megamillions.com/',
            tags: [
                { name: 'Astro', icon: 'astro' },
                { name: 'React', icon: 'react' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'Algolia', icon: 'algolia' },
                { name: 'Remix', icon: 'remix' },
                { name: 'Clerk', icon: 'clerk' },
                { name: 'Drizzle', icon: 'drizzle' },
            ],
            featured: true,
        },
        {
            name: 'Afri Rewards',
            image: '/images/afrilogo.webp',
            description:
                'AfriRewards is a Nigerian cashback platform offering up to 20% rewards on purchases, with easy withdrawals and a ₦10,000 sign-up bonus.',
            url: 'https://www.afrirewards.com/',
            tags: [
                { name: 'Astro', icon: 'astro' },
                { name: 'Preact', icon: 'preact' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
            ],
            featured: true,
            testimonial:
                'Dickson was absolutely amazing with the work he did for me. He truly went above and beyond and was super clear, efficient, and very knowledgeable. He thought about pretty much everything related to the project and even thought outside the box to create solutions to any issues. Truly a 10/10 hire. One of my best hired on Upwork. Will definitely be rehiring on future projects.',
        },
        {
            name: 'Abbreve',
            image: '/images/logo.eae324e7.png',
            description:
                'Abbreve is a community-driven, open source dictionary for internet slang. It lets users enter a slang term to quickly see its full expanded meaning, while inviting contributions to grow its ever-evolving database.',
            url: 'https://abbreve.vercel.app/',
            tags: [
                { name: 'Remix', icon: 'remix' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: true,
            github: 'https://github.com/DICKSON-ENEH/Abbreve',
        },
        {
            name: 'Finders Force',
            image: '/images/finders.jpg',
            description:
                'Finders Force is an upcoming mobile and web app that uses AI to connect depots with operations, streamlining traffic management while keeping you updated with the latest TM news and the Finders Force Movement.',
            url: 'https://play.google.com/store/apps/details?id=com.findersforce.findersforce',
            tags: [
                { name: 'Next', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
                { name: 'Drizzle', icon: 'drizzle' },
                { name: 'Neon', icon: 'neon' },
            ],
            featured: false,
            // github: 'https://github.com/stormynight9/purng',
        },
        {
            name: 'Wassapview',
            image: '/images/wassap.svg',
            description:
                'WassapView helps users grow their WhatsApp audience by enabling contact sharing, bulk SMS sending, and increased status views.',
            url: 'https://www.wassapview.com/',
            tags: [
                { name: 'Next', icon: 'next' },
                { name: 'TypeScript', icon: 'typescript' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'shadcn/ui', icon: 'shadcn' },
            ],
            featured: false,
            // github: 'https://github.com/stormynight9/gson-image-labelizer',
        },
        {
            name: 'Nombabase',
            image: '/images/nombabase-logo.svg',
            description:
                'Nombabase is a modern Canadian online hub offering a range of resources, insights, and tools to empower users in their personal and professional endeavors. ',
            url: 'https://www.nombabase.ca/',
            featured: false,
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'GraphQL', icon: 'graphQL' },
            ],
            // github: 'https://github.com/stormynight9/random-anime-movie-generator',
        },
        {
            name: 'kickstartintovos ',
            image: '/images/kickstartintovos.png',
            description:
                'Kickstart into VOS is an innovative platform that equips you with expert insights, curated resources, and actionable strategies to launch your journey into the VOS ecosystem and thrive in the digital landscape. ',
            url: 'https://kickstartintovos.com/',
            featured: false,
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'GraphQL', icon: 'graphQL' },
            ],
            // github: 'https://github.com/stormynight9/random-anime-movie-generator',
        },
        {
            name: 'GCET',
            image: '/images/gcet.png',
            description:
                'GCET (Global Concept Emerge Technologies Ltd) is a premier IT services and consultancy provider based in Lagos, Nigeria. They empower businesses by building robust IT organizations and delivering innovative, tailored solutions to drive growth and efficiency. ',
            url: 'https://www.gcetng.com/',
            featured: false,
            tags: [
                { name: 'React', icon: 'react' },
                { name: 'Tailwind CSS', icon: 'tailwindcss' },
                { name: 'GraphQL', icon: 'graphQL' },
            ],
            // github: 'https://github.com/stormynight9/random-anime-movie-generator',
        },
    ],
    openSource: {
        description:
            'I have contributed to various open-source projects, including Astro, TailwindCSS, shadcn/ui, and more. I also made a few open-source projects that did benefit the community.',
        // projects: [
        //     {
        //         repository: 'stormynight9/clerk-shadcn-theme',
        //         description: (
        //             <>
        //                 A theme for Clerk components that syncs with any
        //                 shadcn/ui configuration. Got excited when I had my first{' '}
        //                 <a
        //                     href='https://github.com/stormynight9/clerk-shadcn-theme/issues?q='
        //                     target='_blank'
        //                     className='deco whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
        //                 >
        //                     issue
        //                     <Icons.arrowUpRight className='inline-block size-4' />
        //                 </a>{' '}
        //                 and{' '}
        //                 <a
        //                     href='https://github.com/stormynight9/clerk-shadcn-theme/pulls?q='
        //                     target='_blank'
        //                     className='deco whitespace-nowrap font-medium text-foreground underline decoration-muted-foreground underline-offset-2'
        //                 >
        //                     PR
        //                     <Icons.arrowUpRight className='inline-block size-4' />
        //                 </a>{' '}
        //                 from the community!
        //             </>
        //         ),

        //         title: 'clerk-shadcn-theme',
        //         link: 'https://www.github.com/stormynight9/clerk-shadcn-theme',
        //     },
        //     {
        //         repository: 'DICKSON-ENEH/afritest',
        //         description:
        //             'A modern SaaS landing page template with multiple themes, designed for collecting waitlist emails.',
        //         title: 'afritest',
        //         link: 'https://github.com/DICKSON-ENEH/afritest',
        //     },
        // ],
    },
}
