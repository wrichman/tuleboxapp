if (Services.find().count() <= 10) { 
  var services = [
    {name:"Legal", subtitle: "Employment Contracts, Incorporation Documents, etc. ", color: "bg-alizarin", icon: "fa-book"}, 
    {name: "Finance", subtitle: "Raising Capital, Financial Modeling, Pitching, etc.", color:"bg-turquoise", icon: "fa-money"},
    {name: "Accounting", subtitle: "Paying Taxes, Financial Software", color:"bg-carrot", icon: "fa-calculator"},
    {name: "Software Development", subtitle: "Learn to Program, Choosing a Tech Stack, Build a Website", color:"bg-peter-river", icon: "fa-desktop"},
    {name: "Marketing", subtitle: "Growth, User Acquisition, SEO, Analytics", color:"bg-emerald", icon: "fa-bullseye"},
    {name: "Design", subtitle: "UX, UI, Design Theory", color:"bg-sun-flower", icon: "fa-pencil-square"},
    {name: "Project Management", subtitle: "Planning, Kanban and Scrum, Issue Tracking", color:"bg-concrete", icon: "fa-clock-o"},
    {name: "Product Development", subtitle: "Product Roadmap, Feature Requirements", color:"bg-wet-asphalt", icon: "fa-cube"},
    {name: "Hiring and Managing", subtitle: "Recruiting Tools, Collaboration", color:"bg-amethyst", icon: "fa-users"},
    {name: "Customer Development", subtitle: "Business Model Canvas, Customer Discovery, Contact Customers", color:"bg-belize-hole", icon: "fa-coffee"},
    {name: "Sales", subtitle: "Sales Analytics, CRM's", color:"bg-pomegranate", icon: "fa-line-chart"},
    {name: "Corporate Governance", subtitle: "Advisor Requests, Board Offers, Check Lists", color:"bg-orange", icon: "fa-bank"}
  ]

  var practices = [
    {name:"Legal News (Legal)", color: "bg-alizarin"}, 
    {name: "Street Sleuth (Finance)", color:"bg-turquoise"},
    {name: "Accounting Today (Accounting)", color:"bg-carrot"},
    {name: "Hacker News (Development)", color:"bg-peter-river"},
    {name: "Growth Hacker (Marketing)", color:"bg-emerald"},
    {name: "Designer News (Design)", color:"bg-sun-flower"},
    {name: "Operations", color:"bg-concrete"},
    {name: "Product Hunt (Product)", color:"bg-wet-asphalt"},
    {name: "Human Resources", color:"bg-amethyst"},
    {name: "Customer Development", color:"bg-belize-hole"},
    {name: "Sales", color:"bg-pomegranate"},
    {name: "Corporate Governance", color:"bg-orange"}
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
        name: practices[c].name,
        color: practices[c].color,
        serviceId: service._id
      })  
    }
  }
}