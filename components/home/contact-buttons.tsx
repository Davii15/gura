"use client"

import { Phone, MessageSquare, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const CONTACT_INFO = {
  phone: "+254798639180",
  email: "waikwa1@yahoo.com",
  smsTemplate: "Hello, I am interested in your services. Please get back to me.",
  whatsappTemplate: "Hi! I'd like to inquire about your services.",
  emailSubject: "Inquiry from Website",
  emailBody: "Hello,\n\nI would like to know more about...",
}

export function ContactButtons() {
  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`
  }

  const handleSMS = () => {
    const message = encodeURIComponent(CONTACT_INFO.smsTemplate)
    window.location.href = `sms:${CONTACT_INFO.phone}?body=${message}`
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappTemplate)
    window.open(`https://wa.me/${CONTACT_INFO.phone.replace("+", "")}?text=${message}`, "_blank")
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(CONTACT_INFO.emailSubject)
    const body = encodeURIComponent(CONTACT_INFO.emailBody)
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`
  }

  const buttons = [
    { label: "Piga Simu", icon: Phone, color: "bg-blue-600 hover:bg-blue-700", action: handleCall },
    { label: "Tuma SMS", icon: MessageSquare, color: "bg-orange-500 hover:bg-orange-600", action: handleSMS },
    { label: "WhatsApp Us", icon: MessageCircle, color: "bg-green-500 hover:bg-green-600", action: handleWhatsApp },
    { label: "Email Us", icon: Mail, color: "bg-red-500 hover:bg-red-600", action: handleEmail },
  ]

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Contact Us Directly</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {buttons.map((btn, index) => (
            <motion.div
              key={btn.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={btn.action}
                className={`w-full h-16 text-lg font-semibold flex items-center justify-center gap-3 text-white transition-all shadow-lg ${btn.color}`}
              >
                <btn.icon className="w-6 h-6" />
                {btn.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





