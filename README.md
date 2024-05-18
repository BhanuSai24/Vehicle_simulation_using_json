# Graph-visualization-of-vehicles
Project Overview:
The project aims to develop a visual simulation application using React.js for the frontend. Unlike the previous implementation, this version does not include a backend server. Instead, JSON files are used to store data, and CRUD operations are performed directly within the frontend application.

## Components Used:
#AddScenario: This component allows users to add a new scenario with the scenario name and time.
#AllScenarios: Displays all scenarios with their details and allows users to update or delete scenarios.
#AddVehicle: Allows users to add a new vehicle with its details such as name, initial position (X, Y), speed, and direction.
#GraphSection: Displays a graph where vehicles can move according to their parameters.
#Home: Displays the home page where users can select a scenario, start the simulation, and view the graph.
#Sidebar: Provides a navigation sidebar for easy access to different components.
##Implementation Details:
##Frontend Development: React.js is used to build the entire application, including data management and simulation logic. Components are created for each functionality, such as adding scenarios and vehicles, displaying data, and controlling the simulation.
##Data Management: Data is managed using state in React components. JSON files are used to store scenario and vehicle data locally within the frontend application.
##Simulation Logic: When the user starts the simulation, vehicles are moved based on their speed and direction. The simulation continues until the scenario time is reached. Vehicles that go outside the graph container are hidden.
Validation: Proper validation is implemented, ensuring that users cannot add vehicles with positions greater than the graph container size.
Deployment: The application is deployed to a platform such as Vercel or Netlify. The code is also uploaded to a public GitHub repository, along with a README.md file explaining how to install and run the application. Additionally, the README.md provides a brief overview of the project and its functionalities.
Vehicle Movement in the Graph:
Vehicles are represented as objects in the graph with initial positions (X, Y).
When the user starts the simulation, vehicles begin moving based on their speed and direction.
The simulation continues until the scenario time is reached.
If a vehicle reaches the boundary of the graph container, it is hidden from view.
Users can interact with the simulation by starting, stopping, or modifying the parameters of the vehicles.
##Summary:
The project is a frontend application developed using React.js. It allows users to create scenarios and vehicles, simulate their movement in a graph, and manage data locally using JSON files. The application is deployed to a platform for easy access and includes proper documentation for installation and usage.
