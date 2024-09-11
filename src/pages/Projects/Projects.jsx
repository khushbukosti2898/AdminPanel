import { Card, Stack } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { PageSubheader } from '../../components/PageSubheader';
import { useState } from 'react';
import { ProjectForm } from '../../components/Projects/Form/ProjectForm';
import { ProjectTable } from '../../components/Projects/PorjectTable/ProjectTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  editProject,
  projectsSelector,
  removeProject,
} from '../../redux/slices/projectsSlice';
import { toast } from 'react-toastify';
import { intitalProjectState } from '../../const/projects';
import { ProjectFilter } from '../../components/Projects/ProjectFilter/ProjectFilter';

export const Projects = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [openProjectFormModal, setOpenProjectFormModal] = useState(false);
  const [selectedPorject, setSelectedProject] = useState(intitalProjectState);
  const projectsSelectorData = useSelector(projectsSelector);
  const [projects, setProjects] = useState(projectsSelectorData);

  const buttonClickAction = () => {
    setSelectedProject(intitalProjectState);
    setOpenProjectFormModal(true);
  };

  const closeProjectForm = () => {
    setOpenProjectFormModal(false);
  };

  const onRowClick = (project) => {
    setOpenProjectFormModal(true);
    setSelectedProject(project);
  };

  const handleProjectSubmit = async (values, setSubmitting, setErrors) => {
    try {
      const actionName = values.id ? editProject : addProject;
      const action = await dispatch(actionName(values));
      if (actionName.fulfilled.match(action)) {
        toast.success(`Project ${values.id ? 'edited' : 'added'}!`, {
          autoClose: 1000,
        });
        closeProjectForm();
      } else {
        console.error(action.error.message);
        setErrors({ submit: 'Failed to add project' });
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: 'An error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await dispatch(removeProject(id));
      toast.success('Project deleted!', { autoClose: 1000 });
      closeProjectForm();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(projectsSelectorData);
  const applyFilter = (filter, search) => {
    let filteredProjectsList = [...projectsSelectorData];

    if (filter?.length) {
      setFilter(filter);
      if (filter.length) {
        filteredProjectsList = filteredProjectsList.filter((p) => {
          return filter.includes(p.status);
        });
      }
    }

    if (search) {
      setSearch(search);
      filteredProjectsList = filteredProjectsList.filter((p) => {
        return p.dueDate === search;
      });
    }
    setProjects(filteredProjectsList);
  };

  const resetFilter = () => {
    setFilter([]);
    setSearch('');
    setProjects(projectsSelectorData);
  };

  return (
    <Stack gap="15px">
      <PageHeader title="Projects" />
      {!openProjectFormModal ? (
        <>
          <PageSubheader
            buttonTitle="Add Project"
            buttonClickAction={buttonClickAction}
            filter={
              <ProjectFilter
                search={search}
                filter={filter}
                applyFilter={applyFilter}
                resetFilter={resetFilter}
              />
            }
          />
          <ProjectTable projects={projects} onRowClick={onRowClick} />
        </>
      ) : (
        <Card sx={{ padding: '50px', borderRadius: '10px' }}>
          <ProjectForm
            selectedPorject={selectedPorject}
            onClose={closeProjectForm}
            handleProjectSubmit={handleProjectSubmit}
            handleDeleteProject={handleDeleteProject}
          />
        </Card>
      )}
    </Stack>
  );
};
