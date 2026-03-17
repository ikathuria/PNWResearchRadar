import engineeringAndSciences from './engineering-and-sciences.json';
import technology from './technology.json';
import humanitiesEducationAndSocialSciences from './humanities-education-and-social-sciences.json';
import nursing from './nursing.json';
import whiteLodgingSchoolOfHospitality from './white-lodging-school-of-hospitality-and-tourism-management.json';
import business from './business.json';
import educationAndCounseling from './education-and-counseling.json';
import schoolOfEngineering from './school-of-engineering.json';
import honorsCollege from './honors-college.json';
import universityCollege from './university-college.json';

const professorData = [
  ...engineeringAndSciences.map(p => ({ ...p, college: "College of Engineering and Sciences" })),
  ...technology.map(p => ({ ...p, college: "College of Technology" })),
  ...humanitiesEducationAndSocialSciences.map(p => ({ ...p, college: "College of Humanities, Education and Social Sciences" })),
  ...business.map(p => ({ ...p, college: "College of Business" })),
  ...nursing.map(p => ({ ...p, college: "College of Nursing" })),
  ...honorsCollege.map(p => ({ ...p, college: "Honors College" })),
  ...universityCollege.map(p => ({ ...p, college: "University College" })),
  ...educationAndCounseling.map(p => ({ ...p, college: "School of Education and Counseling" })),
  ...schoolOfEngineering.map(p => ({ ...p, college: "School of Engineering" })),
  ...whiteLodgingSchoolOfHospitality.map(p => ({ ...p, college: "White Lodging School of Hospitality and Tourism Management" }))
];

export default professorData;
