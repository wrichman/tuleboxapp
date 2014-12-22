if (Services.find().count() <= 10) { 
  Services.remove({})
  Practices.remove({})

  var services = [
    {name:"Legal", subtitle: "Employment Contracts, Incorporation Documents, etc. ", color: "bg-sun-flower", icon: "fa-book"}, 
    {name: "Finance & Accounting", subtitle: "Raising Capital, Financial Modeling, Pitching, etc.", color:"bg-pumpkin", icon: "fa-money"},
    {name: "Operations", subtitle: "Paying Taxes, Financial Software", color:"bg-peter-river", icon: "fa-calculator"},
    {name: "Front End Development", subtitle: "Learn to Program, Choosing a Tech Stack, Build a Website", color:"bg-turquoise", icon: "fa-desktop"},
    {name: "Back End Development", subtitle: "Growth, User Acquisition, SEO, Analytics", color:"bg-orange", icon: "fa-bullseye"},
    {name: "UI/UX Design", subtitle: "UX, UI, Design Theory", color:"bg-alizarin", icon: "fa-pencil-square"},
    {name: "DevOps", subtitle: "Planning, Kanban and Scrum, Issue Tracking", color:"bg-belize-hole", icon: "fa-clock-o"},
    {name: "Product Development", subtitle: "Product Roadmap, Feature Requirements", color:"bg-green-sea", icon: "fa-cube"},
    {name: "Hiring", subtitle: "Recruiting Tools, Collaboration", color:"bg-carrot", icon: "fa-users"},
    {name: "Customer Development", subtitle: "Business Model Canvas, Customer Discovery, Contact Customers", color:"bg-pomegranate", icon: "fa-coffee"},
    {name: "Sales & Business Development", subtitle: "Sales Analytics, CRM's", color:"bg-wet-asphalt", icon: "fa-line-chart"},
    {name: "Digital Marketing", subtitle: "Advisor Requests, Board Offers, Check Lists", color:"bg-nephritis", icon: "fa-bank"}
  ]

  var practices = [
  // Legal
  [
    {name:"Employment Agreements", color: "bg-sun-flower"}, 
    {name: "Terms of Service", color:"bg-pumpkin"},
    {name: "Incorporation", color:"bg-peter-river"},
    {name: "Privacy Policy", color:"bg-turquoise"},
    {name: "Venture Capital", color:"bg-orange"},
    {name: "Debt Financing", color:"bg-alizarin"},
    {name: "Non Disclosure Agreements", color:"bg-belize-hole"},
    {name: "Intellectual Property", color:"bg-green-sea"},
    {name: "Advisory Board", color:"bg-carrot"},
    {name: "Customer Agreements", color:"bg-pomegranate"},
    {name: "Trademark & Copywright", color:"bg-wet-asphalt"},
    {name: "Bankruptcy", color:"bg-nephritis"}
  ],
  // Finance & Accounting
  [
    {name:"Developing Forecasts", color: "bg-sun-flower"}, 
    {name: "Venture Capital", color:"bg-pumpkin"},
    {name: "Business Models", color:"bg-peter-river"},
    {name: "Competitor Analysis", color:"bg-turquoise"},
    {name: "Market Sizing", color:"bg-orange"},
    {name: "Industry Analysis", color:"bg-alizarin"},
    {name: "Taxes", color:"bg-belize-hole"},
    {name: "Bookkeeping", color:"bg-green-sea"},
    {name: "Preparing Financial Statements", color:"bg-carrot"},
    {name: "Payroll", color:"bg-pomegranate"},
    {name: "Insurance", color:"bg-wet-asphalt"},
    {name: "Due Diligence", color:"bg-nephritis"}
  ],
  // Operations
  [
    {name:"Board Meetings", color: "bg-sun-flower"}, 
    {name: "Verifying bug fixes", color:"bg-pumpkin"},
    {name: "Creating sprint plans", color:"bg-peter-river"},
    {name: "Creating sprint timelines", color:"bg-turquoise"},
    {name: "Assisting with wireframe creation", color:"bg-orange"},
    {name: "Compiling functional requirements documents", color:"bg-alizarin"},
    {name: "Conducting tests cases", color:"bg-belize-hole"},
    {name: "Conducting daily standup calls with clients", color:"bg-green-sea"},
    {name: "Analyze operational processes", color:"bg-carrot"},
    {name: "Present operational metrics", color:"bg-pomegranate"},
    {name: "Improving Culture", color:"bg-wet-asphalt"},
    {name: "Web Development Methodologies", color:"bg-nephritis"}
  ],
  // Front End Development
  [
    {name:"Choosing a Tech Stack", color: "bg-sun-flower"}, 
    {name: "Learning Online", color:"bg-pumpkin"},
    {name: "Learning In Person", color:"bg-peter-river"},
    {name: "Choosing a Text Editor", color:"bg-turquoise"},
    {name: "Turn Designs Into Code", color:"bg-orange"},
    {name: "Optimize The Front End", color:"bg-alizarin"},
    {name: "Build A CMS Website", color:"bg-belize-hole"},
    {name: "Program With Someone", color:"bg-green-sea"},
    {name: "Make Website Responsive", color:"bg-carrot"},
    {name: "Integrate With REST APIs", color:"bg-pomegranate"},
    {name: "Evaluate Development Approach", color:"bg-wet-asphalt"},
    {name: "Develop Custom User Experiences", color:"bg-nephritis"}
  ],
  // Back End Development
  [
    {name:"Choosing a Tech Stack", color: "bg-sun-flower"}, 
    {name: "Learning Online", color:"bg-pumpkin"},
    {name: "Learning In Person", color:"bg-peter-river"},
    {name: "Choosing a Text Editor", color:"bg-turquoise"},
    {name: "Turn Designs Into Code", color:"bg-orange"},
    {name: "Optimize The Back End", color:"bg-alizarin"},
    {name: "Build A Custom Website", color:"bg-belize-hole"},
    {name: "Develop A RESTful API", color:"bg-green-sea"},
    {name: "Integrate Payment Processor", color:"bg-carrot"},
    {name: "Write Automated Tests", color:"bg-pomegranate"},
    {name: "Build Features", color:"bg-wet-asphalt"},
    {name: "Fix Bugs", color:"bg-nephritis"}
  ],
  // UI/UX Design
  [
    {name:"Wireframing", color: "bg-sun-flower"}, 
    {name: "Onboarding", color:"bg-pumpkin"},
    {name: "Branding", color:"bg-peter-river"},
    {name: "Usability", color:"bg-turquoise"},
    {name: "Logos", color:"bg-orange"},
    {name: "Creating Digital Assets", color:"bg-alizarin"},
    {name: "Style Guides", color:"bg-belize-hole"},
    {name: "Prototyping", color:"bg-green-sea"},
    {name: "Design UI Experiences", color:"bg-carrot"},
    {name: "Design UX Experiences", color:"bg-pomegranate"},
    {name: "Create a Storyboard", color:"bg-wet-asphalt"},
    {name: "Create a Sitemap", color:"bg-nephritis"}
  ],
  // DevOps
  [
    {name:"IT Buying", color: "bg-sun-flower"}, 
    {name: "Installation of Server Hardware and OS", color:"bg-pumpkin"},
    {name: "Configuration of Servers, Networks, Storage, etc.", color:"bg-peter-river"},
    {name: "Monitoring of Servers", color:"bg-turquoise"},
    {name: "Respond to Outages", color:"bg-orange"},
    {name: "IT Security", color:"bg-alizarin"},
    {name: "Managing Phone Systems, Network", color:"bg-belize-hole"},
    {name: "Change Control", color:"bg-green-sea"},
    {name: "Backup and Disaster Recovery Planning", color:"bg-carrot"},
    {name: "Manage Active Directory", color:"bg-pomegranate"},
    {name: "Deploy Virtual Servers", color:"bg-wet-asphalt"},
    {name: "Software Deployments", color:"bg-nephritis"}
  ],
  // Product Development
  [
    {name: "Specifying Market Requirements", color: "bg-sun-flower"}, 
    {name: "Driving Solutions Across Dev Teams", color:"bg-pumpkin"},
    {name: "Finding Product Market Fit", color:"bg-peter-river"},
    {name: "Conducting User Tests", color:"bg-turquoise"},
    {name: "Analyzing Partner Relationships", color:"bg-orange"},
    {name: "Simplifying Product", color:"bg-alizarin"},
    {name: "Product Positioning", color:"bg-belize-hole"},
    {name: "Conducting Market Surveys", color:"bg-green-sea"},
    {name: "Choosing Product Functionality", color:"bg-carrot"},
    {name: "Product Pricing", color:"bg-pomegranate"},
    {name: "Creating White Papers", color:"bg-wet-asphalt"},
    {name: "Conducting Competitive Product Reviews", color:"bg-nephritis"}
  ],
  // Hiring
  [
    {name:"Finding a Co-Founder", color: "bg-sun-flower"}, 
    {name: "Picking Recruiting Tools", color:"bg-pumpkin"},
    {name: "Outsourcing Jobs", color:"bg-peter-river"},
    {name: "Writing Job Descriptions", color:"bg-turquoise"},
    {name: "Deciding Employee Compensation", color:"bg-orange"},
    {name: "Improving Culture", color:"bg-alizarin"},
    {name: "Sourcing Applicants", color:"bg-belize-hole"},
    {name: "Interviewing Applicants", color:"bg-green-sea"},
    {name: "Closing Applicants", color:"bg-carrot"},
    {name: "Onboarding Applicants", color:"bg-pomegranate"},
    {name: "Stock Options Planning", color:"bg-wet-asphalt"},
    {name: "Conducting Performance Reviews", color:"bg-nephritis"}
  ],
  // Sales & Business Development
  [
    {name: "Structuring Partnerships", color: "bg-sun-flower"}, 
    {name: "Lead Generation", color:"bg-pumpkin"},
    {name: "Pitching & Closing", color:"bg-peter-river"},
    {name: "Data Analysis", color:"bg-turquoise"},
    {name: "Picking a CRM", color:"bg-orange"},
    {name: "Networking Strateyg", color:"bg-alizarin"},
    {name: "Cold Calling", color:"bg-belize-hole"},
    {name: "Choosing Distribution Channels", color:"bg-green-sea"},
    {name: "Identifying Potential Partners", color:"bg-carrot"},
    {name: "Developing Partner Integration Flows", color:"bg-pomegranate"},
    {name: "Company Evangilism", color:"bg-wet-asphalt"},
    {name: "Deal Negotiation", color:"bg-nephritis"}
  ],
  // Customer Development
  [
    {name:"Customer Discovery Interviews", color: "bg-sun-flower"}, 
    {name: "Customer Service", color:"bg-pumpkin"},
    {name: "Learn Startup Methodology", color:"bg-peter-river"},
    {name: "User Surveys", color:"bg-turquoise"},
    {name: "Heatmaps", color:"bg-orange"},
    {name: "Business Model Canvas", color:"bg-alizarin"},
    {name: "Getting Started", color:"bg-belize-hole"},
    {name: "Value Proposition Canvas", color:"bg-green-sea"},
    {name: "Customer Interviews", color:"bg-carrot"},
    {name: "Customer Development", color:"bg-pomegranate"},
    {name: "Customer Discovery", color:"bg-wet-asphalt"},
    {name: "Website Usability", color:"bg-nephritis"}
  ],
  // Digital Marketing
  [
    {name:"Copywriting", color: "bg-sun-flower"}, 
    {name: "Search Engine Optimization", color:"bg-pumpkin"},
    {name: "Search Engine Marketing", color:"bg-peter-river"},
    {name: "Social Media Marketing", color:"bg-turquoise"},
    {name: "Content Marketing", color:"bg-orange"},
    {name: "Email Marketing", color:"bg-alizarin"},
    {name: "Growth Hacking", color:"bg-belize-hole"},
    {name: "Public Relations", color:"bg-green-sea"},
    {name: "Paid Marketing", color:"bg-carrot"},
    {name: "Conversion Rate Optimization", color:"bg-pomegranate"},
    {name: "Retention", color:"bg-wet-asphalt"},
    {name: "Analytics", color:"bg-nephritis"}
  ]
  ]

  for (var d = 0; d < services.length; d++) {
    var serviceId = Services.insert({
      name: services[d].name,
      color: services[d].color,
      icon: services[d].icon,
      subtitle: services[d].subtitle
    })

    var service = Services.findOne(serviceId)

    for (var c = 0; c < practices.length; c++) {
      var practiceId = Practices.insert({
        name: practices[d][c].name,
        color: practices[d][c].color,
        serviceId: service._id
      })  
    }
  }
}