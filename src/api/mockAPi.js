// Mock register function
export const mockRegister = (email, username, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return false;
  }

  users.push({ email, password, username });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

// Mock login function
export const mockLogin = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem('authToken', 'mockToken123');
    return true;
  }
  return false;
};

export const mockLogout = () => {
  localStorage.removeItem('authToken');
};

const projects = [
  { id: 1, name: 'Project A', status: 'Active' },
  { id: 2, name: 'Project B', status: 'Completed' },
];

// Get all projects
export const getProjects = () => Promise.resolve(projects);

// Create a new project
export const createProject = (project) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...project, id: Date.now() }); // Mocked response
    }, 1000);
  });
};

// Update an existing project
export const updateProject = (updatedProject) => {
  const index = projects.findIndex((p) => p.id === updatedProject.id);
  projects[index] = updatedProject;
  return Promise.resolve(updatedProject);
};

// Delete a project
export const deleteProject = (id) => {
  const index = projects.findIndex((p) => p.id === id);
  projects.splice(index, 1);
  return Promise.resolve(id);
};
