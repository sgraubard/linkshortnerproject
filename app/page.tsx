import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Link2, BarChart3, LayoutDashboard, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroButtons, CtaButton } from '@/components/landing-buttons';

const features = [
  {
    icon: Zap,
    title: 'Instant Shortening',
    description: 'Transform any long URL into a concise, shareable link in seconds.',
  },
  {
    icon: LayoutDashboard,
    title: 'Centralized Dashboard',
    description: 'Manage all your short links from one clean, intuitive dashboard.',
  },
  {
    icon: BarChart3,
    title: 'Click Analytics',
    description: 'Track how many times each link has been clicked and monitor engagement.',
  },
  {
    icon: Link2,
    title: 'Reliable Redirects',
    description: 'Fast and dependable redirects ensure your audience always lands in the right place.',
  },
];

const steps = [
  { number: '01', title: 'Create an account', description: 'Sign up for free in seconds using your email.' },
  { number: '02', title: 'Paste your long URL', description: 'Enter any URL you want to shorten in the dashboard.' },
  { number: '03', title: 'Share your short link', description: 'Copy your new short link and share it anywhere.' },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-8">
        <Badge variant="secondary" className="text-sm px-4 py-1">
          Free to get started
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          Shorten Links.{' '}
          <span className="text-muted-foreground">Share Everywhere.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Create short, memorable links in seconds. Track clicks, manage your links, and share with confidence.
        </p>
        <HeroButtons />
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A simple yet powerful tool built to make link management effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="text-muted-foreground">Get up and running in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-muted-foreground/30">{number}</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to start shortening links?
          </h2>
          <p className="text-muted-foreground">
            Join today and take control of your links — no credit card required.
          </p>
          <div className="flex justify-center">
            <CtaButton />
          </div>
        </div>
      </section>
    </div>
  );
}
