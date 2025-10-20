'use client'

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "formTitle",
 *   "text-5": "formDescription",
 *   "text-6": "submitButton",
 *   "text-7": "contactSectionTitle",
 *   "text-8": "method1Title",
 *   "text-9": "method1Description",
 *   "text-10": "method1Contact",
 *   "text-11": "method2Title",
 *   "text-12": "method2Description",
 *   "text-13": "method2Contact",
 *   "text-14": "method3Title",
 *   "text-15": "method3Description",
 *   "text-16": "method3Contact",
 *   "text-17": "officesSectionTitle",
 *   "text-18": "office1City",
 *   "text-19": "office1Address",
 *   "text-20": "office1Timezone",
 *   "text-21": "office2City",
 *   "text-22": "office2Address",
 *   "text-23": "office2Timezone",
 *   "text-24": "office3City",
 *   "text-25": "office3Address",
 *   "text-26": "office3Timezone",
 *   "text-27": "hoursTitle",
 *   "text-28": "hoursWeekdayLabel",
 *   "text-29": "hoursWeekdayTime",
 *   "text-30": "hoursSaturdayLabel",
 *   "text-31": "hoursSaturdayTime",
 *   "text-32": "hoursSundayLabel",
 *   "text-33": "hoursSundayTime",
 *   "text-34": "supportNote"
 * }
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react"

interface ContactProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  formTitle?: string;
  formDescription?: string;
  submitButton?: string;
  contactSectionTitle?: string;
  method1Title?: string;
  method1Description?: string;
  method1Contact?: string;
  method2Title?: string;
  method2Description?: string;
  method2Contact?: string;
  method3Title?: string;
  method3Description?: string;
  method3Contact?: string;
  officesSectionTitle?: string;
  office1City?: string;
  office1Address?: string;
  office1Timezone?: string;
  office2City?: string;
  office2Address?: string;
  office2Timezone?: string;
  office3City?: string;
  office3Address?: string;
  office3Timezone?: string;
  hoursTitle?: string;
  hoursWeekdayLabel?: string;
  hoursWeekdayTime?: string;
  hoursSaturdayLabel?: string;
  hoursSaturdayTime?: string;
  hoursSundayLabel?: string;
  hoursSundayTime?: string;
  supportNote?: string;
}

export default function Contact({
  badge = "Contact",
  mainTitle = "Let's Start a",
  mainTitleHighlight = "Conversation",
  mainDescription = "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  formTitle = "Send us a Message",
  formDescription = "Fill out the form below and we'll get back to you within 24 hours.",
  submitButton = "Send Message",
  contactSectionTitle = "Get in Touch",
  method1Title = "Email Us",
  method1Description = "Get in touch via email",
  method1Contact = "hello@company.com",
  method2Title = "Call Us",
  method2Description = "Speak with our team",
  method2Contact = "+1 (555) 123-4567",
  method3Title = "Live Chat",
  method3Description = "Chat with support",
  method3Contact = "Available 24/7",
  officesSectionTitle = "Our Offices",
  office1City = "New York",
  office1Address = "123 Business Ave, Suite 100",
  office1Timezone = "EST (UTC-5)",
  office2City = "San Francisco",
  office2Address = "456 Tech Street, Floor 15",
  office2Timezone = "PST (UTC-8)",
  office3City = "London",
  office3Address = "789 Innovation Lane, Building A",
  office3Timezone = "GMT (UTC+0)",
  hoursTitle = "Business Hours",
  hoursWeekdayLabel = "Monday - Friday",
  hoursWeekdayTime = "9:00 AM - 6:00 PM",
  hoursSaturdayLabel = "Saturday",
  hoursSaturdayTime = "10:00 AM - 4:00 PM",
  hoursSundayLabel = "Sunday",
  hoursSundayTime = "Closed",
  supportNote = "24/7 support available for Enterprise customers"
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: method1Title,
      description: method1Description,
      contact: method1Contact
    },
    {
      icon: Phone,
      title: method2Title,
      description: method2Description,
      contact: method2Contact
    },
    {
      icon: MessageSquare,
      title: method3Title,
      description: method3Description,
      contact: method3Contact
    }
  ]

  const offices = [
    {
      city: office1City,
      address: office1Address,
      timezone: office1Timezone
    },
    {
      city: office2City,
      address: office2Address,
      timezone: office2Timezone
    },
    {
      city: office3City,
      address: office3Address,
      timezone: office3Timezone
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                <span data-editable-id="text-4">{formTitle}</span>
              </CardTitle>
              <CardDescription>
                <span data-editable-id="text-5">{formDescription}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  <span data-editable-id="text-6">{submitButton}</span>
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                <span data-editable-id="text-7">{contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  const titleId = `text-${8 + (index * 3)}`
                  const descId = `text-${9 + (index * 3)}`
                  const contactId = `text-${10 + (index * 3)}`
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable-id={titleId}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable-id={descId}>{method.description}</span>
                            </p>
                            <p className="font-medium text-primary">
                              <span data-editable-id={contactId}>{method.contact}</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span data-editable-id="text-17">{officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => {
                  const cityId = `text-${18 + (index * 3)}`
                  const addressId = `text-${19 + (index * 3)}`
                  const timezoneId = `text-${20 + (index * 3)}`
                  return (
                    <div key={index} className="p-4 border border-border/50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">
                            <span data-editable-id={cityId}>{office.city}</span>
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            <span data-editable-id={addressId}>{office.address}</span>
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          <span data-editable-id={timezoneId}>{office.timezone}</span>
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  <span data-editable-id="text-27">{hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable-id="text-28">{hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable-id="text-29">{hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable-id="text-30">{hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable-id="text-31">{hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable-id="text-32">{hoursSundayLabel}</span>
                    </span>
                    <span className="text-muted-foreground">
                      <span data-editable-id="text-33">{hoursSundayTime}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable-id="text-34">{supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}