import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  GraduationCap,
  Shield,
  Quote,
  Clock,
  Award as Medal,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Eye,
  MessageSquare,
  UserCheck,
  Building,
  Globe,
  Scale,
  Briefcase,
  BookMarked,
  Library,
  Award,
  Star,
  Zap,
  TrendingUp,
  Heart,
  Lightbulb,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const leadership = [
    {
      name: "Dr. Sudhakarrao Jadhavar",
      position: "President & Founder",
      qualification: "M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.",
      experience: "25+ years in Educational Leadership",
      image: "/assets/images/about1.png",
      achievements: [
        "Pioneer in value-based education system",
        "Established 80+ educational institutions",
        "National award for educational innovation",
        "Visionary behind teacher education programs"
      ],
      message: "Education is not just about acquiring knowledge; it's about building character, fostering innovation, and creating responsible teachers who will shape the future of our nation.",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Adv. Shardulrao Sudhakarrao Jadhavar",
      position: "Vice President",
      qualification: "M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL, CMED, D.LL&L.W., L.L.M.",
      experience: "15+ years in Educational Leadership",
      image: "/assets/images/about2.png",
      achievements: [
        "Expert in educational policy and administration",
        "Instrumental in teacher education curriculum development",
        "Pioneer in innovative teaching methodologies",
        "Industry-academia bridge builder"
      ],
      message: "Teacher education must evolve with society's needs. We're committed to producing not just teachers, but educational visionaries who can shape young minds and transform the learning landscape.",
      color: "from-green-600 to-blue-700"
    }
  ]

  const messages = [
    {
      title: "President's Message",
      icon: <Users className="h-8 w-8" />,
      content: "At Jai Ganesh College of Education - B.Ed, we believe in transforming aspiring educators into competent teaching professionals equipped to handle contemporary educational challenges. Our B.Ed program is designed to provide comprehensive teacher education with practical exposure.",
      author: "Dr. Sudhakarrao Jadhavar",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      title: "Vice President's Message",
      icon: <BookOpen className="h-8 w-8" />,
      content: "We focus on developing pedagogical skills, research aptitude, and ethical values in future teachers. Our curriculum is regularly updated to incorporate modern teaching methodologies and technological advancements in education.",
      author: "Adv. Shardulrao Sudhakarrao Jadhavar",
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
  ]

  const programHighlights = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Curriculum",
      description: "Covers all major educational subjects including Child Psychology, Pedagogy, Educational Technology, and Subject Specialization"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Practical Training",
      description: "Regular teaching practice, internship programs, and micro-teaching sessions"
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Modern Infrastructure",
      description: "Well-equipped library with educational resources, smart classrooms, and subject-specific labs"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Exposure",
      description: "Guest lectures by experienced educators, workshops, and seminars"
    }
  ]

  const visionMission = [
    {
      title: "Mission",
      icon: <Target className="h-6 w-6" />,
      points: [
        "The Institute's mission is to support and develop educators who are knowledgeable, skilled, and dedicated to creating positive learning environments.",
        "We aim to foster student success and contribute to advancing education and society.",
        "We strive to cultivate a supportive learning environment that encourages innovation and research through a constructivist curriculum approach."
      ],
      color: "border-green-200 bg-green-50"
    },
    {
      title: "Vision",
      icon: <Eye className="h-6 w-6" />,
      points: [
        "The Institute envisions equipping student teachers with an education that strengthens their intellect and wisdom.",
        "We aim to instill social, ethical, and political awareness in our students so that they become informed and responsible citizens of the future.",
        "Furthermore, we aspire to develop creative and constructivist teaching approaches aligned with global educational trends."
      ],
      color: "border-blue-200 bg-blue-50"
    }
  ]
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>About Jai Ganesh College of Education - B.Ed Program Pune | Leadership & Vision</title>
        <meta 
          name="description" 
          content="Learn about Jai Ganesh College of Education - B.Ed's program in Pune. Discover our vision, mission, leadership team, and commitment to excellence in teacher education."
        />
        <meta name="keywords" content="Jai Ganesh College of Education, B.Ed Pune, teacher education, education college Pune, B.Ed program, teacher training, college leadership" />
        <meta property="og:title" content="About Jai Ganesh College of Education - B.Ed - Premier Teacher Education in Pune" />
        <meta property="og:description" content="Excellence in teacher education with comprehensive B.Ed program at Jai Ganesh College of Education - B.Ed, Pune." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.jaiganesheducation.com/about" />
      </Helmet>

      {/* Hero Section - Smaller Height */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-6 border border-white/20"
            >
              <Shield className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">NCTE Approved • Excellence in Teacher Education</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jai Ganesh College of Education - B.Ed
              </span>
              <br />
              <span className="text-xl md:text-2xl font-normal text-gray-300 mt-2 block">
                B.Ed Program
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Shaping Future Educators Since 2008
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* About College Section */}
      <motion.section 
        ref={sectionRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Building className="h-4 w-4" />
                About the College
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Premier Institution for <span className="text-blue-600">Teacher Education</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Jai Ganesh College of Education - B.Ed offers a comprehensive B.Ed program approved by NCTE and affiliated to Savitribai Phule Pune University. 
                Our curriculum blends theoretical knowledge with practical teaching skills, preparing students for successful 
                careers in education, school administration, curriculum development, and educational leadership.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 items-stretch max-w-4xl mx-auto">
              {visionMission.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`rounded-xl p-6 border-2 ${item.color} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-4">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3 flex-1">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Program Highlights */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
                <span className="text-blue-600">Program Highlights</span> of B.Ed
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {programHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-3">
                      <div className="text-blue-600">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 border border-gray-100">
              <UserCheck className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Governing Body & Management</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-gray-600">
              Guided by visionaries transforming teacher education landscape
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="max-w-6xl mx-auto space-y-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative group overflow-hidden">
                    <div className="h-56 lg:h-full">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg shadow p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-blue-600" />
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Experience</p>
                          <p className="text-xs text-gray-700">{leader.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
                        <Briefcase className="h-3 w-3" />
                        {leader.position}
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <GraduationCap className="h-3 w-3 mr-2 text-blue-600" />
                        <span>{leader.qualification}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <Medal className="h-4 w-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start">
                        <Quote className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800 italic text-sm leading-relaxed">
                            "{leader.message}"
                          </p>
                          <p className="text-xs text-gray-600 mt-2 font-medium">— {leader.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${leader.color}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Messages</span> from Leadership
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Words of wisdom from our esteemed leaders guiding the institution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto px-6">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />

                  <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${message.color} text-white mb-4`}>
                      {message.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {message.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                      {message.content}
                    </p>

                    {/* Author always at bottom */}
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <p className="text-sm font-semibold text-gray-900">
                        {message.author}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-blue-600">Our B.Ed Program</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <BookMarked className="h-6 w-6" />,
                  title: "NCTE Approved",
                  desc: "Recognized by National Council for Teacher Education"
                },
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Modern Curriculum",
                  desc: "Updated syllabus with contemporary teaching methods"
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Global Perspective",
                  desc: "International teaching trends and methodologies"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Skill Development",
                  desc: "Teaching practice, micro-teaching, lesson planning"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Expert Faculty",
                  desc: "Experienced educators and subject specialists"
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Career Support",
                  desc: "Placement assistance in reputed schools"
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "Holistic Development",
                  desc: "Focus on values, ethics, and personality"
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Research Opportunities",
                  desc: "Action research and educational projects"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-3">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h4>
                  <p className="text-gray-600 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}