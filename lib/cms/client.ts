import type { HomePageContent } from '@/types/content'

export async function getHomePage(): Promise<HomePageContent> {
  return {
    hero: {
      chipText: 'Coming Soon to Outlook & Google Calendar',
      headlinePrimary: 'Schedule with your cycle,',
      headlineAccent: 'not against it',
      subcopy:
        "Be among the first to experience the revolutionary calendar add-on that aligns your professional schedule with your body's natural energy patterns.",
      emailPlaceholder: 'Enter your email',
      ctaText: 'Join Waitlist',
      avatars: [
        '/Hero/avatars/Background+Border.jpg',
        '/Hero/avatars/Background+Border-1.jpg',
        '/Hero/avatars/Background+Border-2.jpg',
        '/Hero/avatars/Background+Border-3.jpg'
      ],
      waitlistCount: '2,847+',
      waitlistSubcopy: 'Join them for early access',
      backgroundImageUrl: '/Hero/main/hero-pattern-img.jpg'
    },
    stats: {
      items: [
        {
          icon: 'boost',
          value: '40%',
          title: 'Productivity Boost',
          subcopy: 'Beta testers report significant improvements'
        },
        {
          icon: 'saved',
          value: '3 hrs',
          title: 'Saved Weekly',
          subcopy: 'Less time on poorly-timed meetings'
        },
        {
          icon: 'waitlist',
          value: '2,847+',
          title: 'On Waitlist',
          subcopy: 'Professional women waiting to get access'
        },
        {
          icon: 'rating',
          value: '4.9',
          title: 'Beta Rating',
          subcopy: 'From our early access testers'
        }
      ]
    },
    showcase: {
      title: 'See Ayika in Action',
      subcopy: "A sneak peek at what you'll get when we launch",
      imageUrl: '/Showcase/GIF.png',
      imageWidth: 1075,
      imageHeight: 591
    },
    features: {
      headline: 'Everything you need to optimize your schedule',
      subcopy:
        "Powerful features designed to help you work in harmony with your body's natural rhythms",
      cards: [
        {
          title: 'Smart Scheduling',
          subcopy:
            'Get real-time suggestions for optimal meeting times based on your current phase and energy levels',
          iconSrc: '/Features/smart-scheduling.svg',
          bullets: ['Phase-aware scheduling', 'Energy match scores', 'Auto-reschedule suggestions'],
          imageSrc: '/Features/smart-scheduling-img.png'
        },
        {
          title: 'Energy Forecasting',
          subcopy:
            'Visualize your energy patterns up to 4 weeks ahead with accurate phase predictions',
          iconSrc: '/Features/energy-forecasting.svg',
          bullets: ['7-day forecasts', 'Phase transitions', 'Energy level tracking']
        },
        {
          title: 'Cycle Tracking',
          subcopy:
            'Track your menstrual cycle or use our Ghost Cycle feature aligned with lunar rhythms',
          iconSrc: '/Features/cycle-tracking.svg',
          bullets: ['Menstrual tracking', 'Lunar alignment option', 'Privacy controls']
        },
        {
          title: 'Quick Insights',
          subcopy:
            'See your daily phase, energy level, and optimal tasks at a glance',
          iconSrc: '/Features/quick-insights.svg',
          bullets: ['Daily overview', 'Task recommendations', 'Event alignment']
        },
        {
          title: 'Intelligent Alerts',
          subcopy: 'Receive timely notifications about phase changes and scheduling recommendations',
          iconSrc: '/Features/intelligent-alerts.svg',
          bullets: ['Phase change alerts', 'Scheduling tips', 'Customizable notifications'],
          imageSrc: '/Features/intelligent-alert-img.png'
        },
        {
          title: 'Privacy First',
          subcopy:
            "Your data stays private with full control over what's visible in your calendar",
          iconSrc: '/Features/privacy-first.svg',
          bullets: ['Encrypted data', 'Granular controls', 'No data sharing']
        }
      ]
    },
    launchSteps: {
      headline: 'When We Launch',
      subcopy: 'Simple setup, powerful results',
      steps: [
        {
          title: 'Install the Add-in',
          subcopy:
            'One-click install from AppSource (Outlook) or Google Workspace Marketplace. Takes less than 30 seconds.'
        },
        {
          title: 'Set Your Preferences',
          subcopy:
            'Input your cycle data or choose Ghost Cycle. Customize your privacy and notification settings.'
        },
        {
          title: 'Start Scheduling Smarter',
          subcopy:
            'Get real-time suggestions and optimize your calendar based on your energy patterns.'
        }
      ]
    },
    phaseCalculator: {
      chipLabel: 'See Current Phase',
      headline: 'Try Our Phase Calculator',
      subcopy: 'Get a preview of how Ayika works - calculate your current phase',
      form: {
        lastPeriodLabel: 'Last Period Start Date',
        lastPeriodPlaceholder: 'dd/mm/yyyy',
        cycleLengthLabel: 'Average Cycle Length (days)',
        cycleLengthPlaceholder: '28',
        ctaText: 'Calculate My Phase',
        footerNote: 'Full version includes 4-week forecasting, energy tracking, and calendar integration'
      },
      backgroundImageUrl: '/Calculator/calculator-bg.png'
    },
    resources: {
      headline: 'Insights & Resources',
      subcopy: 'Learn more about cycle awareness and productivity optimization',
      items: [
        {
          imageSrc: '/Resources/Understanding Your Cycle Phases.png',
          title: 'Understanding Your Cycle Phases',
          description: 'Learn about the four main phases and how they affect your energy and productivity.',
          linkText: 'Read more'
        },
        {
          imageSrc: '/Resources/The Science Behind Ghost Cycle.png',
          title: 'The Science Behind Ghost Cycle',
          description: 'How lunar rhythms can provide structure when menstrual cycles are unpredictable.',
          linkText: 'Read more'
        },
        {
          imageSrc: '/Resources/Professional Women & Cycle Awareness.png',
          title: 'Professional Women & Cycle Awareness',
          description: 'Breaking taboos and bringing cycle awareness into the workplace.',
          linkText: 'Read more'
        },
        {
          imageSrc: '/Resources/Scheduling Tips for Each Phase.png',
          title: 'Scheduling Tips for Each Phase',
          description: 'Practical advice for aligning different task types with your energy patterns.',
          linkText: 'Read more'
        },
        {
          imageSrc: '/Resources/Privacy & Data Security Guide.png',
          title: 'Privacy & Data Security Guide',
          description: 'Understanding how Ayika protects your sensitive health information.',
          linkText: 'Read more'
        }
      ]
    },
    community: {
      headline: 'Join Our Growing Community',
      subcopy:
        'Connect with 2,847+ professional women who are transforming their productivity. Share experiences, exchange tips, and find support in your cycle-aware scheduling journey.',
      cards: [
        {
          title: 'Share Stories',
          subcopy: 'Connect with others on similar journeys',
          iconSrc: '/Community/stories.svg',
          variant: 'brand'
        },
        {
          title: 'Find Support',
          subcopy: 'Get encouragement and advice when you need it',
          iconSrc: '/Community/support.svg',
          variant: 'light'
        },
        {
          title: 'Get Tips',
          subcopy: 'Learn productivity hacks from the community',
          iconSrc: '/Community/tips.svg',
          variant: 'light'
        },
        {
          title: 'Access Resources',
          subcopy: 'Exclusive guides and templates for members',
          iconSrc: '/Community/resources.svg',
          variant: 'light'
        }
      ],
      callout: {
        backgroundImageUrl: '/Community/waitlist.png',
        stats: [
          { value: '40%', title: 'Productivity Boost' },
          { value: '3 hrs', title: 'Saved Weekly' },
          { value: '2,847+', title: 'On Waitlist' }
        ],
        ctaText: 'Join Waitlist'
      }
    },
    faq: {
      headline: 'Frequently Asked Questions',
      banner: {
        title: 'Still have questions?',
        subcopy: 'Exclusive guides and templates for members',
        ctaText: 'View More',
        backgroundImageUrl: '/Calculator/calculator-bg.png'
      },
      items: [
        {
          question: 'When will Ayika launch?',
          answer:
            "We're currently in final testing with our beta users. Join the waitlist to be among the first notified when we launch publicly. Early waitlist members will get priority access!",
          open: true
        },
        {
          question: 'How does Ayika protect my privacy?',
          answer:
            "Your cycle data is encrypted and stored securely. You have complete control over what's visible in your calendar - choose to show just energy levels, phase names, or keep everything private. We never share your data with third parties."
        },
        {
          question: 'What if my cycle is irregular?',
          answer:
            "Ayika works great with irregular cycles! You can input multiple recent period dates to improve predictions, or use our Ghost Cycle feature which aligns with the moon's 29.5-day rhythm for a predictable pattern."
        },
        {
          question: 'Can I use Ayika without tracking my period?',
          answer:
            "Absolutely! You can use Ayika to track just your energy levels, or opt for the Ghost Cycle feature. It's designed to be flexible for all users regardless of their tracking preferences."
        },
        {
          question: 'Will this work with both Outlook and Google Calendar?',
          answer:
            "Yes! Ayika will be available as an add-in for both Outlook Calendar (Office 365 and Desktop) and Google Calendar (Workspace and Personal accounts) at launch."
        },
        {
          question: 'Will there be a free version?',
          answer:
            "Yes! We'll offer a free forever plan with core features, plus premium options for advanced functionality. Details will be shared closer to launch."
        },
        {
          question: 'How do I get early access?',
          answer:
            "Join our waitlist! We're giving priority access to waitlist members, and we'll notify you via email as soon as we're ready to onboard new users."
        }
      ]
    },
    footer: {
      backgroundImageUrl: '/Hero/main/hero-pattern-img.jpg',
      logoSrc: '/Footer/Icon White 1.png',
      wordmarkSrc: '/Footer/wordmark.svg',
      columns: [
        {
          title: 'Links',
          items: [
            { label: 'Features', href: '#features' },
            { label: 'See It In Action', href: '#showcase' },
            { label: 'Calculator', href: '#calculator' },
            { label: 'FAQ', href: '#faq' }
          ]
        },
        {
          title: 'Company',
          items: [
            { label: 'About', href: '#hero' },
            { label: 'Contact', href: '#footer-cta' },
            { label: 'Community', href: '#community' },
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' }
          ]
        }
      ],
      cta: {
        title: 'Transform Your Productivity',
        subcopy: 'Exclusive guides and templates for members',
        emailPlaceholder: 'youremail@example.com',
        ctaText: 'Join Waitlist',
        note: 'Early members get priority access and exclusive launch bonuses'
      },
      copyright: '© 2025 Ayika. Built with care for professional women everywhere.'
    },
    testimonials: {
      headline: 'What Beta Testers Are Saying',
      subcopy: 'Real feedback from women testing Ayika right now',
      items: [
        {
          photoSrc: '/Testimonials/Ifeoma-Okoro.png',
          quote:
            "I've been beta testing Ayika for 3 weeks and it's already transformed how I schedule my presentations. Can't wait for the full launch!",
          rating: 5,
          label: 'Beta Tester',
          authorName: 'Ifeoma Okoro',
          authorRole: 'Creative Director, Agency',
          starIconSrc: '/Testimonials/star.svg',
          quoteIconSrc: '/Testimonials/Quote Left.svg'
        },
        {
          photoSrc: '/Testimonials/Aisha-Bello.png',
          quote:
            "I've cut my meeting prep time in half since using Ayika. The collaborative features are a game-changer for my team!",
          rating: 5,
          label: 'Early Adopter',
          authorName: 'Aisha Bello',
          authorRole: 'Art Director, Moxie Studios',
          starIconSrc: '/Testimonials/star.svg',
          quoteIconSrc: '/Testimonials/Quote Left.svg'
        },
        {
          photoSrc: '/Testimonials/Ngozi-Eze.png',
          quote:
            "Ayika has streamlined my workflow and boosted my confidence. I'm now able to present my ideas with clarity and impact.",
          rating: 5,
          label: 'Beta Tester',
          authorName: 'Ngozi Eze',
          authorRole: 'Chief Creative, Stellar Design',
          starIconSrc: '/Testimonials/star.svg',
          quoteIconSrc: '/Testimonials/Quote Left.svg'
        }
      ]
    }
  }
}
