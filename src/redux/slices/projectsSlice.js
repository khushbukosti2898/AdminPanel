import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../api/mockAPi';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const response = await getProjects();
    return response;
  }
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (project) => {
    console.log('project', project);
    const response = await createProject(project);
    return response;
  }
);

export const editProject = createAsyncThunk(
  'projects/editProject',
  async (project) => {
    const response = await updateProject(project);
    return response;
  }
);

export const removeProject = createAsyncThunk(
  'projects/removeProject',
  async (id) => {
    await deleteProject(id);
    return id;
  }
);

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      })
      .addCase(editProject.fulfilled, (state, action) => {
        const index = state.projects.findIndex(
          (proj) => proj.id === action.payload.id
        );
        state.projects[index] = action.payload;
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (proj) => proj.id !== action.payload
        );
      });
  },
});

export default projectSlice.reducer;

export const projectsSelector = (state) => state.projects.projects;
