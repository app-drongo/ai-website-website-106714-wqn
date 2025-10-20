import { ChevronRight, Home, FileText, Zap, Shield, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PageHeaderConfig {
  title: string;
  description: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  totalInvoices: string;
  monthlyVolume: string;
  activeUsers: string;
  uptimePercent: string;
  ctaText: string;
  ctaHref: string;
}

export default function Pageheader({ config }: { config: PageHeaderConfig }) {
  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section className="bg-background border-b border-red-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-red-500 transition-colors flex items-center gap-1">
              <Home className="size-4" />
              <span data-editable="breadcrumbHome">{config.breadcrumbHome}</span>
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium" data-editable="breadcrumbCurrent">
              {config.breadcrumbCurrent}
            </span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1
                className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
                data-editable="title"
              >
                {config.title}
              </h1>
              <p className="text-lg text-muted-foreground" data-editable="description">
                {config.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="gap-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => navigate(config.ctaHref)}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <FileText className="size-4" />
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-red-500/20">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground" data-editable="totalInvoices">
                  {config.totalInvoices}
                </span>{' '}
                Invoices Generated
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="monthlyVolume">
                {config.monthlyVolume}
              </span>{' '}
              Monthly Volume
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="activeUsers">
                {config.activeUsers}
              </span>{' '}
              Active Users
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground" data-editable="uptimePercent">
                {config.uptimePercent}
              </span>{' '}
              Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default configuration
PageHeader.defaultProps = {
  config: {
    title: 'About InvoicePro',
    description:
      'Streamline your billing process with our powerful invoicing application. Trusted by over 10,000 businesses worldwide to create, send, and track professional invoices with ease.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'About',
    totalInvoices: '500K+',
    monthlyVolume: '$2.5M+',
    activeUsers: '10K+',
    uptimePercent: '99.9%',
    ctaText: 'Create Invoice',
    ctaHref: '#pricing',
  },
};
