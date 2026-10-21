import React from 'react'
import Cards from './components/cards'


const App = () => {
    const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Software Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Pune, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI/ML Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Noida, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    company: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    company: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  }
];

  return (
    <div className='parent'>
   {jobOpenings.map(function(elem){
    return <Cards key={elem.company} brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
   })}
    </div>
  )
}

export default App