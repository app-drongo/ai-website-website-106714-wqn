'use client'

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "storyTitle",
 *   "text-5": "storyParagraph1",
 *   "text-6": "storyParagraph2",
 *   "text-7": "storyParagraph3",
 *   "text-8": "storyCTA",
 *   "link-0": "storyCTAHref",
 *   "text-9": "quoteText",
 *   "text-10": "quoteAuthor",
 *   "text-11": "stat1Value",
 *   "text-12": "stat1Label",
 *   "text-13": "stat2Value",
 *   "text-14": "stat2Label",
 *   "text-15": "stat3Value",
 *   "text-16": "stat3Label",
 *   "text-17": "stat4Value",
 *   "text-18": "stat4Label",
 *   "text-19": "valuesTitle",
 *   "text-20": "valuesDescription",
 *   "text-21": "value1Title",
 *   "text-22": "value1Description",
 *   "text-23": "value2Title",
 *   "text-24": "value2Description",
 *   "text-25": "value3Title",
 *   "text-26": "value3Description",
 *   "text-27": "value4Title",
 *   "text-28": "value4Description",
 *   "text-29": "teamTitle",
 *   "text-30": "teamDescription",
 *   "text-31": "team1Name",
 *   "text-32": "team1Role",
 *   "text-33": "team1Bio",
 *   "text-34": "team2Name",
 *   "text-35": "team2Role",
 *   "text-36": "team2Bio",
 *   "text-37": "team3Name",
 *   "text-38": "team3Role",
 *   "text-39": "team3Bio",
 *   "text-40": "team4Name",
 *   "text-41": "team4Role",
 *   "text-42": "team4Bio",
 *   "text-43": "teamCTA",
 *   "link-1": "teamCTAHref",
 *   "text-44": "testimonialQuote",
 *   "text-45": "testimonialAuthorName",
 *   "text-46": "testimonialAuthorTitle"
 * }
 */

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"
import { useRouter } from "next/navigation"

interface AboutProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  storyTitle?: string;
  storyParagraph1?: string;
  storyParagraph2?: string;
  storyParagraph3?: string;
  storyCTA?: string;
  storyCTAHref?: string;
  quoteText?: string;
  quoteAuthor?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  stat3Value?: string;
  stat3Label?: string;
  stat4Value?: string;
  stat4Label?: string;
  valuesTitle?: string;
  valuesDescription?: string;
  value1Title?: string;
  value1Description?: string;
  value2Title?: string;
  value2Description?: string;
  value3Title?: string;
  value3Description?: string;
  value4Title?: string;
  value4Description?: string;
  teamTitle?: string;
  teamDescription?: string;
  team1Name?: string;
  team1Role?: string;
  team1Bio?: string;
  team2Name?: string;
  team2Role?: string;
  team2Bio?: string;
  team3Name?: string;
  team3Role?: string;
  team3Bio?: string;
  team4Name?: string;
  team4Role?: string;
  team4Bio?: string;
  teamCTA?: string;
  teamCTAHref?: string;
  testimonialQuote?: string;
  testimonialAuthorName?: string;
  testimonialAuthorTitle?: string;
}

export default function About({
  badge = "About Us",
  mainTitle = "Building the Future of",
  mainTitleHighlight = "Web Development",
  mainDescription = "We're a passionate team of developers, designers, and innovators on a mission to make web development accessible, powerful, and enjoyable for everyone.",
  storyTitle = "Our Story",
  storyParagraph1 = "Founded in 2019 by a team of frustrated developers, we set out to solve a simple problem: why was building beautiful, functional websites still so complicated?",
  storyParagraph2 = "After years of wrestling with complex toolchains, inconsistent designs, and endless debugging sessions, we knew there had to be a better way. So we built it.",
  storyParagraph3 = "Today, we're proud to serve over 50,000 developers and businesses worldwide, helping them bring their ideas to life faster and more beautifully than ever before.",
  storyCTA = "Read Our Full Story",
  storyCTAHref = "/blog/our-story",
  quoteText = "We believe great design should be accessible to everyone, not just those with big budgets.",
  quoteAuthor = "Sarah Johnson, CEO",
  stat1Value = "2019",
  stat1Label = "Founded",
  stat2Value = "50K+",
  stat2Label = "Happy Customers",
  stat3Value = "99.9%",
  stat3Label = "Uptime",
  stat4Value = "25+",
  stat4Label = "Countries",
  valuesTitle = "Our Values",
  valuesDescription = "The principles that guide everything we do and every decision we make.",
  value1Title = "Mission Driven",
  value1Description = "We're committed to democratizing web development and making beautiful, functional websites accessible to everyone.",
  value2Title = "Innovation First",
  value2Description = "We constantly push the boundaries of what's possible, bringing cutting-edge technology to your fingertips.",
  value3Title = "Customer Obsessed",
  value3Description = "Your success is our success. We build every feature with our users' needs and goals at the center.",
  value4Title = "Global Impact",
  value4Description = "From startups to enterprises, we're helping businesses worldwide transform their digital presence.",
  teamTitle = "Meet Our Team",
  teamDescription = "The talented individuals behind our success, working together to build something amazing.",
  team1Name = "Sarah Johnson",
  team1Role = "CEO & Co-Founder",
  team1Bio = "Former VP of Product at TechCorp. 15+ years building scalable products.",
  team2Name = "Michael Chen",
  team2Role = "CTO & Co-Founder",
  team2Bio = "Ex-Google engineer. Expert in distributed systems and web performance.",
  team3Name = "Emily Rodriguez",
  team3Role = "Head of Design",
  team3Bio = "Award-winning designer with experience at top design agencies.",
  team4Name = "David Kim",
  team4Role = "VP of Engineering",
  team4Bio = "Former Meta engineer. Passionate about developer experience and tools.",
  teamCTA = "View All Team Members",
  teamCTAHref = "/team",
  testimonialQuote = "This platform has completely transformed how we approach web development. What used to take weeks now takes days, and the results are consistently beautiful.",
  testimonialAuthorName = "Jessica Davis",
  testimonialAuthorTitle = "CTO, TechStartup Inc."
}: AboutProps) {
  const router = useRouter()

  const handleStoryCTA = () => {
    if (storyCTAHref.startsWith('http://') || storyCTAHref.startsWith('https://')) {
      window.open(storyCTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(storyCTAHref)
    }
  }

  const handleTeamCTA = () => {
    if (teamCTAHref.startsWith('http://') || teamCTAHref.startsWith('https://')) {
      window.open(teamCTAHref, '_blank', 'noopener,noreferrer')
    } else {
      router.push(teamCTAHref)
    }
  }

  const values = [
    {
      icon: Target,
      title: value1Title,
      description: value1Description
    },
    {
      icon: Lightbulb,
      title: value2Title,
      description: value2Description
    },
    {
      icon: Heart,
      title: value3Title,
      description: value3Description
    },
    {
      icon: Globe,
      title: value4Title,
      description: value4Description
    }
  ]

  const stats = [
    { value: stat1Value, label: stat1Label, icon: Award },
    { value: stat2Value, label: stat2Label, icon: Users },
    { value: stat3Value, label: stat3Label, icon: TrendingUp },
    { value: stat4Value, label: stat4Label, icon: Globe }
  ]

  const team = [
    {
      name: team1Name,
      role: team1Role,
      image: team1Name.split(' ').map(n => n[0]).join(''),
      bio: team1Bio
    },
    {
      name: team2Name,
      role: team2Role,
      image: team2Name.split(' ').map(n => n[0]).join(''),
      bio: team2Bio
    },
    {
      name: team3Name,
      role: team3Role,
      image: team3Name.split(' ').map(n => n[0]).join(''),
      bio: team3Bio
    },
    {
      name: team4Name,
      role: team4Role,
      image: team4Name.split(' ').map(n => n[0]).join(''),
      bio: team4Bio
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable-id="text-0">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable-id="text-1">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable-id="text-2">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable-id="text-3">{mainDescription}</span>
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span data-editable-id="text-4">{storyTitle}</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p data-editable-id="text-5">{storyParagraph1}</p>
              <p data-editable-id="text-6">{storyParagraph2}</p>
              <p data-editable-id="text-7">{storyParagraph3}</p>
            </div>
            <Button className="group" onClick={handleStoryCTA} data-editable-id="text-8">
              {storyCTA}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      <span data-editable-id="text-9">{quoteText}</span>
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - <span data-editable-id="text-10">{quoteAuthor}</span>
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const valueId = `text-${11 + (index * 2)}`
            const labelId = `text-${12 + (index * 2)}`
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    <span data-editable-id={valueId}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable-id={labelId}>{stat.label}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable-id="text-19">{valuesTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable-id="text-20">{valuesDescription}</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              const titleId = `text-${21 + (index * 2)}`
              const descId = `text-${22 + (index * 2)}`
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">
                          <span data-editable-id={titleId}>{value.title}</span>
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          <span data-editable-id={descId}>{value.description}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable-id="text-29">{teamTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable-id="text-30">{teamDescription}</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => {
              const nameId = `text-${31 + (index * 3)}`
              const roleId = `text-${32 + (index * 3)}`
              const bioId = `text-${33 + (index * 3)}`
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {member.image}
                    </div>
                    <h4 className="font-semibold mb-1">
                      <span data-editable-id={nameId}>{member.name}</span>
                    </h4>
                    <p className="text-sm text-primary mb-3">
                      <span data-editable-id={roleId}>{member.role}</span>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span data-editable-id={bioId}>{member.bio}</span>
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group" onClick={handleTeamCTA} data-editable-id="text-43">
              {teamCTA}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                <span data-editable-id="text-44">{testimonialQuote}</span>
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  {testimonialAuthorName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold">
                    <span data-editable-id="text-45">{testimonialAuthorName}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable-id="text-46">{testimonialAuthorTitle}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}