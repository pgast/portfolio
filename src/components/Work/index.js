import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { projects } from '../../constants/work'
import { buttons } from '../../constants/about'

import { 
  Title,
  Button,
  Header,
  Project,
  Container,
  StackTitle,
  Description,
  ProjectInfo,
  ProjectTitle, 
  ProjectStack,
  ProjectsColumn,
} from './styled'

const Work = ({ setView }) => {
  const changeView = () => setView('about')

  const renderProject = project => {
  if (!project.hasOwnProperty('stack')) {
    const isToAbout = project.url === "/about"

    return (
      <Project
        $isProject={false}
        color={project.color} 
        id={project.projectId}
      >
        { !isToAbout ? (
            <a 
              target="_blank" 
              rel="noreferrer"
              href={project.url}
              style={{ textDecoration: "none", color: "none" }} 
            >
              <Title $color={"darkGray"}>
                {project.name}
              </Title>
            </a>
        ) : (
          <Link 
            to={project.url} 
            onClick={changeView}
            style={{ textDecoration: "none", color: "black" }} 
          >
            <Title $color={"darkGray"}>
              {project.name}
            </Title>
          </Link>
        )}
      </Project>
    )
  }

  return ( 
      <Project color={project.color} id={project.projectId}>
        <Header>
          <ProjectTitle>{project.name}</ProjectTitle>
          <Description>{project.info}</Description>
          <ProjectStack>
            {project.stack.map(el => <StackTitle key={el}>{el}</StackTitle>)}
          </ProjectStack>
        </Header>
        <ProjectInfo>
          <Button 
            $background={project.btnColor} 
            $color={project.btnColor === 'yellow' ? 'black' : 'white'}
            onClick={() => window.open(project.links.live, "_blank")}
          >
            <h3>Try it</h3>
          </Button>
          <Button 
            $background={project.btnColor} 
            $color={project.btnColor === 'yellow' ? 'black' : 'white'}
            onClick={() => window.open(project.links.code, "_blank")}
          >
            <h3>Code</h3>
          </Button>
        </ProjectInfo>
      </Project>
    ) 
  }

  useEffect(() => {
    const topLeft = document.getElementById('topLeftProject');
    const bottomLeft = document.getElementById('bottomLeftProject');
    const topMiddle = document.getElementById('topMiddleProject');
    const bottomMiddle = document.getElementById('bottomMiddleProject');
    const topRight = document.getElementById('topRightProject');
    const bottomRight = document.getElementById('bottomRightProject');

    const leftColumn = document.getElementById('leftColumn');
    const middleColumn = document.getElementById('middleColumn');
    const rightColumn = document.getElementById('rightColumn');

    const addEventListeners = () => {
      topLeft.addEventListener('mouseenter', function(){
        if (window.innerWidth < 716) return
        bottomLeft.setAttribute("style", "height: 20%");
        leftColumn.setAttribute("style", "width: 50%");
        middleColumn.setAttribute("style", "width: 25%");
        rightColumn.setAttribute("style", "width: 25%");
      })

      bottomLeft.addEventListener('mouseenter', function(){
        if (window.innerWidth < 716) return

        topLeft.setAttribute("style", "height: 20%");
        rightColumn.setAttribute("style", "width: 25%");
        leftColumn.setAttribute("style", "width: 50%");
        middleColumn.setAttribute("style", "width: 25%");
      })

      topMiddle.addEventListener('mouseenter', function(){
        if (window.innerWidth < 716) return

        bottomMiddle.setAttribute("style", "height: 20%");
        leftColumn.setAttribute("style", "width: 25%")
        middleColumn.setAttribute("style", "width: 50%");
        rightColumn.setAttribute("style", "width: 25%");

      })

      bottomMiddle.addEventListener('mouseenter', function(){
        if (window.innerWidth < 716) return

        topMiddle.setAttribute("style", "height: 20%");
        rightColumn.setAttribute("style", "width: 25%");
        leftColumn.setAttribute("style", "width: 25%");
        middleColumn.setAttribute("style", "width: 50%");
      })

      topLeft.addEventListener('mouseleave', reset)
      bottomLeft.addEventListener('mouseleave', reset)
      topMiddle.addEventListener('mouseleave', reset)
      bottomMiddle.addEventListener('mouseleave', reset)
    }

    function reset () {
      topLeft.setAttribute("style","height: 100%");
      bottomLeft.setAttribute("style","height: 100%");
      topRight.setAttribute("style","height: 100%");
      bottomRight.setAttribute("style","height: 100%");
      topMiddle.setAttribute("style","height: 100%");
      bottomMiddle.setAttribute("style","height: 100%");
      
      rightColumn.setAttribute("style","width: 100%");
      leftColumn.setAttribute("style","width: 100%");
      middleColumn.setAttribute("style","width: 100%");
    }

    function checkWindowSize() {
      if (window.innerWidth < 716) {
        reset()
      } else {
        addEventListeners()
      }
    }
    
    window.onresize = checkWindowSize;
    checkWindowSize();
  }, [])

  const displayProjects = [
    {
      columnId: "leftColumn",
      projects: [
        { 
          ...projects[0],
          color: "blue",
          btnColor: "yellow",
          projectId: "topLeftProject" 
        },
        { 
          ...projects[1],
          color: "yellow",
          btnColor: "blue",
          projectId: "bottomLeftProject" 
        },
      ]
    },
    {
      columnId: "middleColumn",
      projects: [
        { 
          ...projects[2],
          color: "yellow",
          btnColor: "blue",
          projectId: "topMiddleProject" 
        },
        { 
          ...projects[3],
          color: "blue",
          btnColor: "yellow",
          projectId: "bottomMiddleProject" 
        },
      ]
    },
    {
      columnId: "rightColumn",
      projects: [
        { 
          name: "more projects",
          url: buttons[2].href,
          color: "blue",
          projectId: "topRightProject" 
        },
        { 
          name: "about me",
          url: '/about',
          color: "yellow",
          projectId: "bottomRightProject" 
        },
      ]
    }
  ]

  return (
    <Container>
      {displayProjects.map(column => (
        <ProjectsColumn id={column.columnId}>
          {column.projects.map(project => renderProject(project))}
        </ProjectsColumn>
      ))}
    </Container>
  );
};

export default Work;