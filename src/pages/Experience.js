import React from "react"
import { VerticalTimeline,
         VerticalTimelineElement 
} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";
import WorkIcon from '@material-ui/icons/School';
import SchoolIcon from '@material-ui/icons/School';

function Experience(){
    return (
        <div className="experience">
            <VerticalTimeline linecolor="#4F6BB4">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date = "2011 - 2015"
                    iconStyle = {{ background: "#4F6BB4", color: "#fff" }}    
                    icon = {<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> Maryland High School - Nakuru, Kenya </h3>
                    <h4 className="vertical-timeline-element-subtitle"> High School Certificate </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date = "2016 - present"
                    iconStyle = {{ background: "#4F6BB4", color: "#fff" }}    
                    icon = {<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> Technical University of Kenya </h3>
                    <h4 className="vertical-timeline-element-subtitle"> Bachelor of Engineering Geospatial Engineering </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date = "2022"
                    iconStyle = {{ background: "#e9d35b", color: "#fff" }}    
                    icon = {<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> Geographic Information Systems Intern </h3>
                    <h4 className="vertical-timeline-element-subtitle"> National Housing Corporation </h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;