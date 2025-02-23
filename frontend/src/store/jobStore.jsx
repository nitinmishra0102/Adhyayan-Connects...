import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
      { 
          id: 1, 
          title: "Mathematics Teacher", 
          location: "Top School - New York", 
          salary: "$50,000 - $70,000/year", 
          posted: "2 days ago",
          description: "Teach advanced math concepts to high school students."
      },
      { 
          id: 2, 
          title: "Physics Teacher", 
          location: "Top School - Chicago", 
          salary: "$48,000 - $68,000/year", 
          posted: "1 week ago",
          description: "Instruct students in the principles of physics."
      },
      { 
          id: 3, 
          title: "Chemistry Teacher", 
          location: "Top School - Los Angeles", 
          salary: "$52,000 - $72,000/year", 
          posted: "3 days ago",
          description: "Lead chemistry experiments and teach chemical theory."
      },
      { 
          id: 4, 
          title: "Biology Teacher", 
          location: "Top School - Boston", 
          salary: "$49,000 - $69,000/year", 
          posted: "4 days ago",
          description: "Educate students on biological processes and ecosystems."
      },
      { 
          id: 5, 
          title: "English Literature Teacher", 
          location: "Top School - San Francisco", 
          salary: "$51,000 - $71,000/year", 
          posted: "5 days ago",
          description: "Guide students through literary analysis and writing."
      },
      { 
          id: 6, 
          title: "History Teacher", 
          location: "Top School - Seattle", 
          salary: "$47,000 - $67,000/year", 
          posted: "1 day ago",
          description: "Teach historical events and critical thinking."
      },
      { 
          id: 7, 
          title: "Spanish Teacher", 
          location: "Top School - Austin", 
          salary: "$46,000 - $66,000/year", 
          posted: "6 days ago",
          description: "Instruct students in Spanish language and culture."
      },
      { 
          id: 8, 
          title: "Computer Science Teacher", 
          location: "Top School - Denver", 
          salary: "$53,000 - $73,000/year", 
          posted: "2 weeks ago",
          description: "Teach coding and computer science fundamentals."
      },
      { 
          id: 9, 
          title: "Art Teacher", 
          location: "Top School - Miami", 
          salary: "$45,000 - $65,000/year", 
          posted: "3 weeks ago",
          description: "Facilitate creative expression through various art forms."
      },
      { 
          id: 10, 
          title: "Music Teacher", 
          location: "Top School - Portland", 
          salary: "$44,000 - $64,000/year", 
          posted: "1 month ago",
          description: "Conduct music classes covering theory to performance."
      },
      { 
          id: 11, 
          title: "Physical Education Teacher", 
          location: "Top School - Atlanta", 
          salary: "$43,000 - $63,000/year", 
          posted: "2 months ago",
          description: "Promote physical fitness and sports education."
      },
      { 
          id: 12, 
          title: "Special Education Teacher", 
          location: "Top School - Houston", 
          salary: "$54,000 - $74,000/year", 
          posted: "3 months ago",
          description: "Support students with special educational needs."
      },
      { 
          id: 13, 
          title: "Economics Teacher", 
          location: "Top School - Phoenix", 
          salary: "$55,000 - $75,000/year", 
          posted: "4 days ago",
          description: "Educate students on economic principles and market analysis."
      },
      { 
          id: 14, 
          title: "Geography Teacher", 
          location: "Top School - Minneapolis", 
          salary: "$56,000 - $76,000/year", 
          posted: "1 week ago",
          description: "Teach physical and human geography."
      },
      { 
          id: 15, 
          title: "French Teacher", 
          location: "Top School - Dallas", 
          salary: "$57,000 - $77,000/year", 
          posted: "2 days ago",
          description: "Instruct French language and French culture."
      },
  ]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [errorJobs, setErrorJobs] = useState(null);

  const fetchJobs = async () => {
    setLoadingJobs(true);
    try {
      const response = await fetch('/api/jobs'); // Adjust this to your actual API endpoint
      const data = await response.json();
      setJobs(data);
      setErrorJobs(null);
    } catch (error) {
      setErrorJobs(error);
      console.error('Error fetching jobs:', error);
    } finally {
      setLoadingJobs(false);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, loadingJobs, errorJobs, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
};