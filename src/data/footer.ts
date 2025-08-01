import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge insurance lead generation solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "features"
        },
        {
            text: "Pricing",
            url: "pricing"
        },
        {
            text: "Testimonials",
            url: "testimonials"
        }
    ],
    email: 'Mdbrokersusa@gmail.com',
    telephone: '+1 (954) 684-8414',
    socials: {
        
    }
}