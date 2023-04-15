import { v4 as uuidv4 } from 'uuid';

export const courses = [
    {
        courseName: "React JS",
        courseID: uuidv4(),
        slugLine: "react-js-course",
        courseDescription: "Among the most popular JavaScript libraries, ReactJS brings with it rich features that make it an easy to use and popular tool among developers. React libraries are growing at an enormous rate, helping developers in building rich efficient front-end abstractions by writing less code and in lesser time as well!",
        noOfChapters: 4,
        chapters: [
            {
                chapterName: "HTML/CSS",
                sections: [
                    {
                        sectionName: "HTML Introduction",
                        topicsCovered: ["Why ReactJS is high in demand","Advantages of using ReactJS", "How does ReactJS works?", "Why Virtual DOM", "Setting up the Project."]
                    },
                    {
                        sectionName: "HTML5 Introduction",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Designing a Web Page",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Page Formatting",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Text Items and Objects",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Creating Lists",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Links",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Images",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Basic Tables",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Forms",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Cascading StyleSheets",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Box model in CSS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Flexbox in CSS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Working with elements in CSS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    }
                ]
            },

            {
                chapterName: "ReactJS",
                sections: [
                    {
                        sectionName: "React JS Introduction",
                        topicsCovered: ["Why ReactJS is high in demand","Advantages of using ReactJS", "How does ReactJS works?", "Why Virtual DOM", "Setting up the Project."]
                    },
                    {
                        sectionName: "JSX-Introduction",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Components & Props",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Class Components",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Functional Components",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Handling API Calls",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Conditional Rendering",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Forms & Validations in react",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Authentication in React JS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Routing in ReactJS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "React Fragments, HOC & TypeChecking with Prop Types",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Redux in React",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Error Boundaries",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Best Practices in ReactJS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "NodeJS & Node Package Manager (NPM)",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "GitHub",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Netlify",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },
                ]
            },
        ]
    },

    {
        courseName: "DevOps",
        courseID: uuidv4(),
        slugLine: "devops-course",
        courseDescription: "DevOps has become the gold standard in modern IT, but it means different things to different people. What exactly is DevOps, and why has the demand for it increased so fast? DevOps is a collaboration between development and operation teams, which enables continuous delivery of applications and services to our end users. What makes DevOps stand out? Why is it chosen over the traditional method, and for what reasons? Let’s go over DevOps fundamentals, understand why DevOps, and some of the tools why DevOps engineers are using today.",
        noOfChapters: 1,
        chapters: [
            {
                chapterName: "DevOps",
                sections: [
                    {
                        sectionName: "DevOps Introduction",
                        topicsCovered: ["Why ReactJS is high in demand","Advantages of using ReactJS", "How does ReactJS works?", "Why Virtual DOM", "Setting up the Project."]
                    },
                    {
                        sectionName: "Linux",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Shell Scripting",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Git",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Maven",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Tomcat",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Apache HTTP Server",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "SonarQube",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Nexus",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Jenkins",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Docker",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Kubernetes",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Ansible",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "AWS",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    },{
                        sectionName: "Monitoring Tools (New Relic / Grafana, Prometheus)",
                        topicsCovered: ["What is JSX?", "Advantages of using ReactJS", "Javascript vs JSX - Differences", "Rules of writing JSX"]
                    }
                ]
            },
        ]
    }
]