import React from 'react';
import { 
  Monitor, 
  Library, 
  FlaskConical, 
  Mic, 
  Shield, 
  Users,
  BookOpen,
  Wifi,
  Coffee,
  Bus,
  Utensils,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Building2,
  Users2
} from 'lucide-react';
import './Facilities.css'; // Import the CSS file

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Monitor size={28} />,
      title: "Smart Classrooms",
      description: "Each classroom equipped with LCD projector and internet. Well ventilated classrooms with a capacity of 60 students. Method Rooms are available.",
      stats: [
        { value: "60", label: "Seats per class" },
        { value: "Smart", label: "LCD Projectors" }
      ]
    },
    {
      icon: <Library size={28} />,
      title: "Central Library",
      description: "Very spacious library hall with big reading room. Library book total is 2363. Reference books, curriculum Books, Encyclopedia, Text Books, Novels.",
      stats: [
        { value: "2363+", label: "Books" },
        { value: "National", label: "Journals" }
      ]
    },
    {
      icon: <FlaskConical size={28} />,
      title: "Science Laboratories",
      description: "All labs are well equipped. Physics, Chemistry & Biology labs are separated. Built-in cupboards and wash basins with full time water supply.",
      stats: [
        { value: "3", label: "Separate Labs" },
        { value: "24/7", label: "Water Supply" }
      ]
    },
    {
      icon: <Monitor size={28} />,
      title: "Computer Lab",
      description: "Computer lab with 60 PC and internet facility available. Modern computing facilities for students.",
      stats: [
        { value: "60", label: "Computers" },
        { value: "High-speed", label: "Internet" }
      ]
    },
    {
      icon: <Mic size={28} />,
      title: "Auditorium",
      description: "Big auditorium with 1500 seating capacity. LCD projector and inbuilt stereo system provided for events and seminars.",
      stats: [
        { value: "1500", label: "Seating Capacity" },
        { value: "Stereo", label: "Sound System" }
      ]
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Safety",
      description: "CCTV Camera available all infrastructure. Safe and secure campus environment for students.",
      stats: [
        { value: "24/7", label: "Surveillance" },
        { value: "100%", label: "Secure" }
      ]
    }
  ];

  const otherFacilities = [
    { icon: <Briefcase size={18} />, text: "100% job placement assistance" },
    { icon: <Award size={18} />, text: "Government scholarship for SC/ST/OBC" },
    { icon: <Users size={18} />, text: "Seminars & health programs" },
    { icon: <Users2 size={18} />, text: "Social activities participation" },
    { icon: <Wifi size={18} />, text: "Wi-Fi enabled campus" },
    { icon: <Coffee size={18} />, text: "Canteen facilities" },
    { icon: <Bus size={18} />, text: "Transportation available" },
    { icon: <Utensils size={18} />, text: "Clean drinking water" }
  ];

  return (
    <section className="facilities-section" id="facilities">
      <h2>
        Our <span>Facilities</span>
      </h2>
      <p className="facilities-subtitle">
        We are committed to providing world-class infrastructure that creates the right learning environment 
        for future educators. The campus blends modern amenities with a professional atmosphere.
      </p>

      {/* College Info Bar */}
      <div className="college-info-bar">
        <div className="info-item">
          <Award size={18} />
          <span>NCTE Code: APW04503/123547</span>
        </div>
        <div className="info-item">
          <GraduationCap size={18} />
          <span>University ID: PU/PN/B-Ed-/296/2008</span>
        </div>
        <div className="info-item">
          <Building2 size={18} />
          <span>College Code: 1115</span>
        </div>
      </div>

      {/* Main Facilities Grid */}
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="facility-icon">
              {facility.icon}
            </div>
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
            <div className="facility-stats">
              {facility.stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Facilities */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ 
          fontSize: '24px', 
          color: '#0f172a', 
          marginBottom: '30px',
          fontWeight: '600'
        }}>
          Additional Facilities
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {otherFacilities.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 20px -10px #2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.color = '#475569';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <span style={{ color: 'inherit' }}>{item.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div style={{
        marginTop: '60px',
        padding: '30px',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '30px',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <MapPin size={24} style={{ color: '#60a5fa' }} />
          <div>
            <div style={{ fontSize: '14px', opacity: '0.8' }}>Address</div>
            <div style={{ fontWeight: '600' }}>Campus-2, Narhe, Pune - 411041</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Phone size={24} style={{ color: '#60a5fa' }} />
          <div>
            <div style={{ fontSize: '14px', opacity: '0.8' }}>Phone</div>
            <div style={{ fontWeight: '600' }}>+91 89750 54114</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Mail size={24} style={{ color: '#60a5fa' }} />
          <div>
            <div style={{ fontSize: '14px', opacity: '0.8' }}>Email</div>
            <div style={{ fontWeight: '600' }}>jaiganesh_bed@yahoo.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;