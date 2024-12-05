'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SocialIcons } from '@/components/icons/SocialIcons'

const teamMembers = [
  {
    name: 'Sachin Bandaranayaka',
    role: 'Founder & CEO',
    image: '/team/sachin.jpg',
    bio: 'Tech visionary leading innovation in digital solutions.',
    social: {
      linkedin: 'https://linkedin.com/in/sachin-bandaranayaka',
      github: 'https://github.com/sachin',
      twitter: 'https://twitter.com/sachin'
    }
  },
  {
    name: 'Kalana Sumanaweera',
    role: 'CTO',
    image: '/team/kalana.jpg',
    bio: 'Expert in cloud architecture and system design.',
    social: {
      linkedin: 'https://linkedin.com/in/kalana',
      github: 'https://github.com/kalana',
      twitter: 'https://twitter.com/kalana'
    }
  },
  {
    name: 'Thevindu Damsith',
    role: 'Lead Developer',
    image: '/team/thevindu.jpg',
    bio: 'Full-stack developer specializing in modern web technologies.',
    social: {
      linkedin: 'https://linkedin.com/in/thevindu',
      github: 'https://github.com/thevindu',
      twitter: 'https://twitter.com/thevindu'
    }
  },
  {
    name: 'Harshana Jayansigha',
    role: 'Senior Developer',
    image: '/team/harshana.jpg',
    bio: 'Backend specialist with expertise in scalable systems.',
    social: {
      linkedin: 'https://linkedin.com/in/harshana',
      github: 'https://github.com/harshana',
      twitter: 'https://twitter.com/harshana'
    }
  },
  {
    name: 'Abhishek Heshan',
    role: 'Frontend Lead',
    image: '/team/abhishek.jpg',
    bio: 'UI/UX expert crafting exceptional user experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/abhishek',
      github: 'https://github.com/abhishek',
      twitter: 'https://twitter.com/abhishek'
    }
  },
  {
    name: 'Randika Pathum',
    role: 'DevOps Engineer',
    image: '/team/randika.jpg',
    bio: 'Infrastructure and automation specialist.',
    social: {
      linkedin: 'https://linkedin.com/in/randika',
      github: 'https://github.com/randika',
      twitter: 'https://twitter.com/randika'
    }
  },
  {
    name: 'Fathima Ameera',
    role: 'UI/UX Designer',
    image: '/team/fathima.jpg',
    bio: 'Creative designer focused on intuitive user interfaces.',
    social: {
      linkedin: 'https://linkedin.com/in/fathima',
      github: 'https://github.com/fathima',
      twitter: 'https://twitter.com/fathima'
    }
  },
  {
    name: 'Hansika Kaushalya',
    role: 'Project Manager',
    image: '/team/hansika.jpg',
    bio: 'Ensuring smooth project delivery and client satisfaction.',
    social: {
      linkedin: 'https://linkedin.com/in/hansika',
      github: 'https://github.com/hansika',
      twitter: 'https://twitter.com/hansika'
    }
  },
  {
    name: 'Nipuni Disanayaka',
    role: 'Quality Assurance',
    image: '/team/nipuni.jpg',
    bio: 'Maintaining high standards through comprehensive testing.',
    social: {
      linkedin: 'https://linkedin.com/in/nipuni',
      github: 'https://github.com/nipuni',
      twitter: 'https://twitter.com/nipuni'
    }
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the talented individuals who make the magic happen
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-background-lighter rounded-xl p-8 hover:shadow-lg hover:shadow-synapse-cyan/5 transition-all duration-300"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-synapse-cyan mb-3">{member.role}</p>
              <p className="text-gray-400 mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <SocialIcons 
                  platform="linkedin" 
                  url={member.social.linkedin}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
                <SocialIcons 
                  platform="github" 
                  url={member.social.github}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
                <SocialIcons 
                  platform="twitter" 
                  url={member.social.twitter}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:text-synapse-cyan hover:bg-synapse-cyan/10 transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 