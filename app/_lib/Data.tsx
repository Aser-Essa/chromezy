import Image from "next/image";

export const ServicesData = [
  {
    title: "MVP",
    description:
      "We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.",
    backgroundColor: "#2F41A3",
    image: (
      <Image
        src={"/cardImage1.png"}
        width={149.28}
        height={177}
        alt="Image Card"
        className="absolute right-5 top-8"
      />
    ),
  },
  {
    title: "SaaS",
    description:
      "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
    backgroundColor: "#7E2148",
    image: (
      <Image
        src={"/cardImage2.png"}
        width={149.28}
        height={177}
        alt="Image Card"
        className="absolute right-5 top-8"
      />
    ),
  },
  {
    title: "AI",
    description:
      "We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes",
    backgroundColor: "#AA7333",
    image: (
      <Image
        src={"/cardImage3.png"}
        width={149.28}
        height={177}
        alt="Image Card"
        className="absolute right-5 top-8"
      />
    ),
  },
  {
    title: "B2B & B2C Commerce Transformation",
    description:
      "We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.",
    backgroundColor: "#224A38",
    image: (
      <Image
        src={"/cardImage4.png"}
        width={149.28}
        height={177}
        alt="Image Card"
        className="absolute right-5 top-8"
      />
    ),
  },
];

export const ClientsData = [
  {
    description:
      "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    name: "JEET OBERAI",
    jopTitle: "(Entrepreneur), PayLoan",
    rate: "4.8 / 5",
    project: "Product Development",
    country: "Singapore",
    image: (
      <Image
        src={"/AD8.png"}
        height={24}
        width={63}
        priority
        alt=""
        className="h-6 w-[63px]"
      />
    ),
  },

  {
    description:
      "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
    name: "MARC DOLLON",
    jopTitle: "CTO, MasterStudy",
    rate: "5 / 5",
    project: "SaaS-Based Cloud ERP",
    country: "United States",
    image: (
      <Image
        src={"/AD1.png"}
        height={40}
        width={140}
        priority
        quality={100}
        alt=""
      />
    ),
  },

  {
    description:
      "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    name: "BRANDON LAU",
    jopTitle: "(CEO), KIRI Journey",
    rate: "5 / 5",
    project: "E-commerce Development",
    country: "HongKong",
    image: (
      <Image
        src={"/AD4 - Copy.png"}
        height={25}
        width={48}
        priority
        alt=""
        className="h-[25px] w-[48px]"
      />
    ),
  },

  {
    description:
      "We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.",
    name: "JEFTA MUGWENI",
    jopTitle: "(CEO), Campion Savings Club",
    rate: "5 / 5",
    project: "Custom CRM MVP Development",
    country: "Zimbabwe",

    image: (
      <Image src={"/AD3 - Copy.png"} height={42} width={75} priority alt="" />
    ),
  },
];

export const SuccessStoriesData = [
  {
    title: "FinConnect",
    description: "Customer Relationship Management (CRM)",
    image: (
      <Image
        src={"/succes story 1.png"}
        fill
        alt="succes story"
        className="object-cover"
      />
    ),
  },
  {
    title: "HealthSync",
    description: "Health Tracking App for Patients and Doctors",
    image: (
      <Image
        src={"/succes story 2.png"}
        fill
        alt="succes story"
        className="object-cover"
      />
    ),
  },
  {
    title: "Commerce360",
    description: "Online Store, Multivendor Marketplace & E-commerce Apps",
    image: (
      <Image
        src={"/succes story 3.png"}
        fill
        alt="succes story"
        className="object-cover"
      />
    ),
  },
  {
    title: "PrintwithAI",
    description:
      "Web-to-Print Software / Online Design Tool / Product Designer Tool",
    image: (
      <Image
        src={"/succes story 4.png"}
        fill
        alt="succes story"
        className="object-cover"
      />
    ),
  },
  {
    title: "PM Insights",
    description: "Project Management Tool (SaaS & Hosted)",
    image: (
      <Image
        src={"/succes story 5.png"}
        fill
        alt="succes story"
        className="object-cover"
      />
    ),
  },
];
