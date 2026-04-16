import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Users,
  Award,
  Shield,
  BookOpen,
  FileText,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Percent,
  DollarSign,
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CreditCard,
  Smartphone,
  UserCheck,
  AlertTriangle,
  Ban,
  Scale,
  Gavel,
  BookMarked,
  FileCheck,
  UserX,
  Info,
  Download,
  Printer,
  Search,
  Filter,
  Heart,
  Zap,
  Target,
  Globe,
  Users2,
  GraduationCap,
  Building2,
  Landmark,
  ScrollText,
  PhoneCall,
  MailOpen,
  MapPinned,
  Briefcase,
  Coffee,
  Utensils,
  Bus,
  Wifi,
  Dumbbell,
  Mic,
  Video,
  Home,
  Library,
  Monitor,
  FlaskConical
} from 'lucide-react'

export default function Student() {
  const [activeTab, setActiveTab] = useState('conduct')
  const [openSections, setOpenSections] = useState({
    identityCard: false,
    littering: false,
    vehicles: false,
    loitering: false,
    mobile: false,
    antiRagging: false,
    scholarships: false,
    rules: false,
    discipline: false,
    cancellation: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const tabs = [
    { id: 'conduct', label: 'Code of Conduct', icon: <ScrollText className="h-5 w-5" />, color: 'from-blue-600 to-cyan-600' },
    { id: 'scholarships', label: 'Scholarships', icon: <Award className="h-5 w-5" />, color: 'from-purple-600 to-pink-600' },
    { id: 'rules', label: 'Rules & Regulations', icon: <Shield className="h-5 w-5" />, color: 'from-amber-600 to-orange-600' },
    { id: 'discipline', label: 'College Discipline', icon: <Users className="h-5 w-5" />, color: 'from-green-600 to-emerald-600' }
  ]

  const conductRules = [
    {
      id: 'identityCard',
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Identity Card',
      rules: [
        'Students must have their Identity Card duly filled in and signed.',
        'Students must wear their Identity Card when they are in the college premises.',
        'Transfer of I. D. Cards is a criminal offence.',
        'The student will be liable to expulsion from the college for ID card transfer.'
      ],
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100'
    },
    {
      id: 'littering',
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'Littering',
      rules: [
        'Littering in the classrooms, corridors & the campus is strictly prohibited.',
        'Please use the dustbins provided all around the campus.',
        'Offenders will be penalised for littering.'
      ],
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-100'
    },
    {
      id: 'vehicles',
      icon: <Ban className="h-6 w-6" />,
      title: 'Vehicle Rules',
      rules: [
        'Sluing on the vehicles in the college compound or on A-Road is strictly prohibited.',
        'Students must park vehicles only in designated areas.',
        'Reckless driving in campus premises is not allowed.'
      ],
      color: 'from-red-600 to-rose-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-100'
    },
    {
      id: 'loitering',
      icon: <Users2 className="h-6 w-6" />,
      title: 'Loitering or Crowding',
      rules: [
        'Loitering or Crowding on A-Road is strictly prohibited.',
        'Students are required to remain in the college campus during their free hours.',
        'Avoid聚集 in corridors and entrance areas.'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-100'
    },
    {
      id: 'mobile',
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Phones',
      rules: [
        'Mobile phones should be switched off while in classroom, library & corridors.',
        'If instructions are not followed, the instrument will be confiscated.',
        'Concerned student will also be levied fine for mobile phone usage.',
        'Use of Mobile Phones, Pagers, Walkman etc. in College premises is strictly prohibited.'
      ],
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      iconBg: 'bg-amber-100'
    },
    {
      id: 'antiRagging',
      icon: <Gavel className="h-6 w-6" />,
      title: 'Anti-Ragging Act',
      rules: [
        'Ragging is banned in this institution.',
        'A student involving in any such act will be expelled from the college.',
        'Offenders may undergo imprisonment and fine as per The Maharashtra Prohibition of Ragging Act, 1999.',
        'Admitted students have to compulsorily fill up the anti-ragging undertaking form.'
      ],
      color: 'from-red-600 to-rose-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-100'
    }
  ]

  const scholarships = [
    {
      title: 'Government of India National Scholarships',
      description: 'Awarded on the basis of merit at the S.S.C. examination.',
      icon: <Award className="h-8 w-8" />,
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Based on SSC merit',
        'National level scholarship',
        'Direct benefit transfer'
      ]
    },
    {
      title: 'State Government Scholarships',
      description: 'B.C., E.B.C. scholarships available to deserving students on fulfillment of govt. conditions.',
      icon: <Landmark className="h-8 w-8" />,
      color: 'from-purple-600 to-pink-600',
      features: [
        'BC category scholarships',
        'EBC category scholarships',
        'Government conditions apply'
      ]
    },
    {
      title: 'Freeship for Teachers\' Wards',
      description: 'Freeship for children of primary, secondary and higher secondary teachers.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-green-600 to-emerald-600',
      features: [
        'For teachers\' children',
        'Primary to higher secondary',
        'As per govt. conditions'
      ]
    },
    {
      title: 'Freedom Fighter Wards',
      description: 'Scholarships and concessions to wards of freedom fighters.',
      icon: <Heart className="h-8 w-8" />,
      color: 'from-amber-600 to-orange-600',
      features: [
        'Freedom fighter wards',
        'Special concessions',
        'Government conditions apply'
      ]
    },
    {
      title: 'EBC Category Admission',
      description: 'Students from economically backward class admitted on payment of caution money and deposits.',
      icon: <DollarSign className="h-8 w-8" />,
      color: 'from-red-600 to-rose-600',
      features: [
        'Caution money only',
        'Laboratory deposit (Science)',
        'Library deposit',
        'Guardian declaration required'
      ]
    },
    {
      title: 'SC/ST Category Admission',
      description: 'SC/ST students admitted on payment of caution money, deposits and other non-refundable fees.',
      icon: <Scale className="h-8 w-8" />,
      color: 'from-indigo-600 to-violet-600',
      features: [
        'Caste certificate required',
        'Caution money applicable',
        'Laboratory deposit (Science)',
        'Library deposit applicable'
      ]
    }
  ]

  const rulesRegulations = [
    {
      title: 'General Conduct',
      rules: [
        'All students are answerable to the Principal and members of staff for their conduct in the college premises.',
        'Insubordination, abusive language, misbehavior or misconduct can lead to the dismissal of a student.',
        'Demonstration of any kind in the college premises is strictly prohibited.',
        'Fines imposed on students shall accrue to the Students Aid Funds of the college.'
      ],
      icon: <Users className="h-6 w-6" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'University Rules',
      rules: [
        'Admission will be granted only after students fulfill the rules and regulations of SPPU Pune.',
        'All admitted students must comply with university ordinances.',
        'University examination rules must be followed strictly.'
      ],
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Anti-Ragging',
      rules: [
        'Admitted students have to compulsorily fill up the anti-ragging undertaking form.',
        'Ragging is strictly prohibited in the college premises and outside.',
        'Students indulging in ragging will be punished as per The Maharashtra Prohibition of Ragging Act, 1999.'
      ],
      icon: <Gavel className="h-6 w-6" />,
      color: 'from-red-600 to-rose-600'
    }
  ]

  const cancellationPolicy = [
    { percentage: '100%', timeline: '7 days or more before last date of admission', color: 'text-green-600', bg: 'bg-green-50' },
    { percentage: '75%', timeline: 'Less than 7 days before the formality notified', color: 'text-blue-600', bg: 'bg-blue-50' },
    { percentage: '50%', timeline: '15 days or less after the formality notified last date of admission', color: 'text-amber-600', bg: 'bg-amber-50' },
    { percentage: '00%', timeline: 'More than 30 days after formality notified last date of admission', color: 'text-red-600', bg: 'bg-red-50' }
  ]

  const disciplineRules = [
    {
      number: '01',
      rule: 'In order to qualify to appear for the examination, the admitted student has to have a minimum of 75% attendance per term as per H. S. C. Board regulations. In the event of any default in attendance and discipline, the college authorities can take disciplinary action including dismissal from the college, non eligibility to write the final Examination etc.',
      icon: <Clock className="h-5 w-5" />
    },
    {
      number: '02',
      rule: 'Students must always wear the valid Identity Card issued by the college with their recent photograph affixed, bearing the signature of the Principal, around their neck. They must present it for inspection or verification whenever demanded by the college Authorities and/or Security Staff. No student shall be allowed to attend lectures, Practicals etc. unless he/she has his/her Identity Card with him/her.',
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      number: '03',
      rule: 'Students must not attend lectures other than their own without the special permission of the professor concerned.',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      number: '04',
      rule: 'Students must attend their lectures / Tutorials / Practicals regularly. Defaulters may face Disciplinary Action.',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      number: '05',
      rule: 'Students should make use of the College library and must not loiter in the college premises whenever they have free period.',
      icon: <Library className="h-5 w-5" />
    },
    {
      number: '06',
      rule: 'Students must be in their classes on time. Late comers may not be allowed to enter the class.',
      icon: <Clock className="h-5 w-5" />
    },
    {
      number: '07',
      rule: 'Students must do nothing either inside or outside the college that will in any way interfere with its orderly administration and discipline. They should not communicate any information or write anything about the college to the press without the written permission of the Principal.',
      icon: <FileText className="h-5 w-5" />
    },
    {
      number: '08',
      rule: 'Students are liable to lose their term for disobedience, misconduct, misbehavior or for any act of indiscipline. Student must take proper care of all the college property. Any damage done to the property of the college by disfiguring walls, doors, windows, fittings, furniture and such other things is breach of discipline and will be considered a punishable offence. Smoking, Tobacco, Chewing, use of Drugs etc. are strictly prohibited in the College premises.',
      icon: <Ban className="h-5 w-5" />
    },
    {
      number: '09',
      rule: 'Use of Mobile Phones, Pagers, Walkman etc. in the College premises is strictly prohibited.',
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      number: '10',
      rule: 'No association or organization shall be formed, no meeting shall be held, no person will be invited to address the students in the college without the prior written permission of the Principal.',
      icon: <Users2 className="h-5 w-5" />
    },
    {
      number: '11',
      rule: 'No picnic, socials, excursion or tour shall be arranged without the prior written permission of the Principal. If students join an unofficial picnic or tour, the College shall not be responsible for anything that happens in the picnic or tour.',
      icon: <Bus className="h-5 w-5" />
    },
    {
      number: '12',
      rule: 'No student shall collect money as contribution to picnic, trip, educational visit, get-together, study notes, charity or any other activity without the prior written sanction of the Principal.',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      number: '13',
      rule: 'While conducting debates or meetings in the College, a responsible staff member approved by the principal will chair the session and the subject of debates or lectures must have the prior approval of the Principal.',
      icon: <Mic className="h-5 w-5" />
    },
    {
      number: '14',
      rule: 'Matters not covered by the existing rules will be at the discretion of the Principal.',
      icon: <Shield className="h-5 w-5" />
    },
    {
      number: '15',
      rule: 'Ragging is strictly prohibited in the college premises and outside. Students indulging in ragging will be punished as per The Maharashtra Prohibition of Ragging Act, 1999.',
      icon: <Gavel className="h-5 w-5" />
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
        <title>Student Section | Code of Conduct, Scholarships & Rules | Jai Ganesh College of Education</title>
        <meta 
          name="description" 
          content="Student information at Jai Ganesh College of Education - B.Ed including Code of Conduct, Identity Card rules, Mobile phone policy, Anti-Ragging Act, Government scholarships, College Rules & Regulations, Discipline, and Fee Cancellation Policy." 
        />
        <meta name="keywords" content="student code of conduct, college identity card, anti ragging, scholarship for SC ST OBC, EBC freeship, college rules, college discipline, fee refund policy, Maharashtra scholarship, teacher education Pune" />
        <meta property="og:title" content="Student Section - Jai Ganesh College of Education - B.Ed Pune" />
        <meta property="og:description" content="Complete information for students including code of conduct, scholarships, rules, regulations and discipline policy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.jgefs.org/student" />
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-6 border border-white/20"
            >
              <Users className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold text-white">Student Section</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Student Information
              </span>
              <br />
              <span className="text-xl md:text-2xl font-normal text-gray-300 mt-2 block">
                Code of Conduct, Scholarships & College Rules
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The College expects every student to abide by the Code of Conduct, follow rules and regulations,
              and maintain discipline for a productive learning environment.
            </motion.p>
          </div>

          {/* Quick Info Stats */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10"
          >
            {[
              { icon: <CreditCard />, label: "Identity Card", value: "Mandatory" },
              { icon: <Clock />, label: "Attendance", value: "75% Required" },
              { icon: <Gavel />, label: "Anti-Ragging", value: "Zero Tolerance" },
              { icon: <Award />, label: "Scholarships", value: "Govt. Schemes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
              >
                <div className="text-blue-300 mb-2 flex justify-center text-sm">
                  {item.icon}
                </div>
                <div className="text-base font-bold text-white">{item.value}</div>
                <div className="text-xs text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* pdfs */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Downloads & Documents
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Important student lists and academic documents year-wise.
      </p>
    </motion.div>

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-2">Student Lists (Year-wise)</h3>
      <p className="text-sm text-gray-600 mb-4">
        All academic year student list PDFs in one section
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <a href="/assets/pdf/2018-19.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          1. 2018-19
        </a>

        <a href="/assets/pdf/2019-20.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          2. 2019-20
        </a>

        <a href="/assets/pdf/202021.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          3. 2020-21
        </a>
        <a href="/assets/pdf/2021-22.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          3. 2021-22
        </a>

        <a href="/assets/pdf/2022-23.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          4. 2022-23
        </a>

        <a href="/assets/pdf/2023-24.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          5. 2023-24
        </a>

        <a href="/assets/pdf/24-25.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          6. 2024-25
        </a>

        <a href="/assets/pdf/25-26.PDF" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 rounded-lg text-center">
          7. 2025-26
        </a>

        <a href="/assets/pdf/prospects.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center">
          Prospectus
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct Tab */}
      {activeTab === 'conduct' && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-600">Code of Conduct</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  The College expects every student to abide by the following Code of Conduct
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {conductRules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${rule.bgColor} rounded-xl p-6 border ${rule.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${rule.iconBg} p-3 rounded-lg`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${rule.color}`}>
                          {rule.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{rule.title}</h3>
                        <ul className="space-y-2">
                          {rule.rules.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Important Notice */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Important Notice</h4>
                    <p className="text-red-700 text-sm">
                      Violation of any of the above rules may lead to strict disciplinary action including 
                      fine, suspension, or expulsion from the college as per the severity of the offense.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Scholarships Tab */}
      {activeTab === 'scholarships' && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-600">Government Scholarships & Concessions</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Various scholarships and freeships available for deserving students on fulfillment of government conditions
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {scholarships.map((scholarship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${scholarship.color} text-white mb-4`}>
                      {scholarship.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{scholarship.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>
                    <ul className="space-y-1">
                      {scholarship.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Conditions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-amber-50 border border-amber-200 rounded-xl p-6"
              >
                <h4 className="font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Important Conditions
                </h4>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Scholarships and freeships are subject to good conduct, regular attendance and satisfactory progress.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Failure to satisfy these conditions will result in forfeiture of the E.B.C. freeship and student will have to pay the full College fees.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Conditions will be notified on the college notice board from time to time.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>For EBC category, guardian must declare that student belongs to economically backward class.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>SC/ST students need to produce necessary caste certificate for admission benefits.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Rules & Regulations Tab */}
      {activeTab === 'rules' && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-600">College Rules & Regulations</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  All students are answerable to the Principal and staff for their conduct in the college premises
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {rulesRegulations.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${rule.color} bg-opacity-5 rounded-xl p-6 shadow-lg border border-gray-200`}
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${rule.color} text-white mb-4`}>
                      {rule.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{rule.title}</h3>
                    <ul className="space-y-2">
                      {rule.rules.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${rule.color} mt-2`}></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Cancellation & Refund Policy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  Cancellation of Admission & Refund of Fee
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-lg">Sr. No.</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">% of Refund</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-lg">Point of time when notice of withdrawal admission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cancellationPolicy.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{index + 1}</td>
                          <td className={`px-4 py-3 text-sm font-bold ${item.color}`}>{item.percentage}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{item.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Note: Refund percentages are applicable as per the timeline mentioned above. No refund after 30 days of admission.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* College Discipline Tab */}
      {activeTab === 'discipline' && (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="text-blue-600">College Discipline</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  The College attaches great importance to discipline and the same must be scrupulously observed by all students
                </p>
              </motion.div>

              <div className="space-y-4">
                {disciplineRules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-lg p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white flex items-center justify-center text-sm font-bold">
                        {rule.number}
                      </div>
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-blue-600 mt-0.5">
                          {rule.icon}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{rule.rule}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Final Note */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8" />
                  <p className="text-sm font-medium">
                    Failure to comply with any of the rules, regulations or requirements notified from time to time will lead to strict disciplinary action including dismissal from the college and non-eligibility to write final examinations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

    
    </>
  )
}