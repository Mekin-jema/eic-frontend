"use client"

import { motion } from 'framer-motion'

interface FeaturesSectionProps {
  isInView: boolean
}

export default function FeaturesSection({ isInView }: FeaturesSectionProps) {
  return (
    <section className="py-20 px-4 bg-[#001E67] relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 49%, #d7b15a 50%, transparent 51%) 0 0 / 100px 100px,
            linear-gradient(0deg, transparent 49%, #0052CC 50%, transparent 51%) 0 0 / 100px 100px
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Attend Tech Summit?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Experience the future of technology through multiple engaging formats
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Expert Keynotes',
              desc: 'Learn from industry pioneers and thought leaders',
              color: 'bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-100',
              iconColor: 'text-blue-400',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 1v22" />
                  <path d="M5 6h14" />
                  <path d="M5 18h14" />
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                </svg>
              ),
            },
            {
              title: 'Hands-on Workshops',
              desc: 'Practical sessions to enhance your skills',
              color: 'bg-linear-to-br from-[#d7b15a]/20 to-amber-500/20 text-amber-100',
              iconColor: 'text-[#d7b15a]',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M14.7 6.3a1 1 0 0 0-1.4 0L6 13.6V18h4.4l7.3-7.3a1 1 0 0 0 0-1.4z" />
                  <path d="M6 18l-2 2" />
                </svg>
              ),
            },
            {
              title: 'Networking Opportunities',
              desc: 'Connect with peers and potential partners',
              color: 'bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-100',
              iconColor: 'text-blue-400',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <circle cx="9" cy="7" r="4" />
                  <circle cx="17" cy="7" r="4" />
                  <path d="M2 21c0-4 3-7 7-7" />
                  <path d="M22 21c0-4-3-7-7-7" />
                </svg>
              ),
            },
            {
              title: 'Innovation Showcase',
              desc: 'See the latest technological breakthroughs',
              color: 'bg-linear-to-br from-[#d7b15a]/20 to-amber-500/20 text-amber-100',
              iconColor: 'text-[#d7b15a]',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5a7 7 0 0 0-4-12z" />
                </svg>
              ),
            },
            {
              title: 'Panel Discussions',
              desc: 'Engaging conversations on current trends',
              color: 'bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-100',
              iconColor: 'text-blue-400',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              ),
            },
            {
              title: 'Career Development',
              desc: 'Opportunities for professional growth',
              color: 'bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-100',
              iconColor: 'text-blue-400',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M3 3v18h18" />
                  <path d="M7 15l4-4 3 3 5-5" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotateX: -90 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateZ: 1,
                transition: { duration: 0.2 },
              }}
              className={`p-6 ${item.color} border border-white/10 rounded-xl hover:border-white/30 transition-all group backdrop-blur-sm`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 ${item.color.replace('bg-linear-to-br', 'bg-linear-to-br').replace('text-', '')} rounded-xl flex items-center justify-center mb-4 border border-white/20`}
              >
                <div className={item.iconColor}>{item.icon}</div>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-3 text-white"
                whileHover={{ color: '#d7b15a' }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
