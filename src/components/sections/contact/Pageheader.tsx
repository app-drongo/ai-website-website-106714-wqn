import { ChevronRight, Home, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PageHeaderConfig {
  title: string;
  description: string;
  breadcrumbHome: string;
  breadcrumbHomeHref: string;
  breadcrumbCurrent: string;
  primaryCTA: string;
  primaryCTAHref: string;
  secondaryCTA: string;
  secondaryCTAHref: string;
  responseTime: string;
  supportHours: string;
  contactMethods: string;
  satisfaction: string;
}

export default function Pageheader({ config }: { config?: Partial<PageHeaderConfig> }) {
  const {
    title = 'Get Professional Invoicing Support',
    description = 'Need help with your invoicing? Our expert support team is ready to assist with billing questions, payment issues, and account setup. Get personalized help to streamline your business finances.',
    breadcrumbHome = 'InvoicePro Dashboard',
    breadcrumbHomeHref = '/',
    breadcrumbCurrent = 'Contact Support',
    primaryCTA = 'Start Live Chat',
    primaryCTAHref = '#chat',
    secondaryCTA = 'Call Support',
    secondaryCTAHref = '#phone',
    responseTime = '< 2 hours',
    supportHours = '24/7',
    contactMethods = '5+',
    satisfaction = '98%',
  } = config || {};

  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="bg-background border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href={breadcrumbHomeHref}
              data-editable-href="breadcrumbHomeHref"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span data-editable="breadcrumbHome">{breadcrumbHome}</span>
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium" data-editable="breadcrumbCurrent">
              {breadcrumbCurrent}
            </span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1
                className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
                data-editable="title"
              >
                {title}
              </h1>
              <p className="text-lg text-muted-foreground" data-editable="description">
                {description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="gap-2 border-primary/20 hover:border-primary"
                onClick={() => navigate(secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={secondaryCTAHref}
              >
                <Phone className="size-4" />
                <span data-editable="secondaryCTA">{secondaryCTA}</span>
              </Button>
              <Button
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={() => navigate(primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={primaryCTAHref}
              >
                <MessageSquare className="size-4" />
                <span data-editable="primaryCTA">{primaryCTA}</span>
              </Button>
            </div>
          </div>

          {/* Support Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-primary/10">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground" data-editable="responseTime">
                  {responseTime}
                </span>{' '}
                Average Response
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="supportHours">
                {supportHours}
              </span>{' '}
              Support Available
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="contactMethods">
                {contactMethods}
              </span>{' '}
              Ways to Reach Us
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="satisfaction">
                {satisfaction}
              </span>{' '}
              Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
