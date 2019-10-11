import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>This is HOME page</h1>
    </>
  );
}

const About = () => {
  return (
    <>
      <h1>This is ABOUT page</h1>
    </>
  );
}

const Projects = ({ match }) => {
  return (
    <>
      <h1>This is PROJECTS page</h1>

      <ul>
        <li>
          <Link to={`${match.url}/project1`}>Project1</Link>
        </li>
        <li>
          <Link to={`${match.url}/project2`}>Project2</Link>
        </li>
        <li>
          <Link to={`${match.url}/project3`}>Project3</Link>
        </li>
      </ul>

      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <>
            <h3>My first route, I clicked {match.params.name}</h3>
          </>
        )}
      />

      <Route
        path={`${match.path}/:name`}
        render={ (props) => <Project {...props} />}
      />
    </>
  );
}

const Project = ({ match }) => {
  return (
    <>
      <h2>This is nested page and link I clicked was {match.params.name}</h2>
    </>
  )
}

// const ProjectComponent2 = () => {
//   return (
//     <>
//       <h2>This is PROJECT2 page</h2>
//     </>
//   )
// }

// const ProjectComponent3 = () => {
//   return (
//     <>
//       <h2>This is PROJECT3 page</h2>
//     </>
//   )
// }

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>

    </>
  )

}


const App = () => {
  return (
    <>
      <Router>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />


        </Switch>

      </Router>
    </>
  )
}

export default App;