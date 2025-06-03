import apiClient from "./apiClient";
import type { AboutPageResponse } from "./types/aboutPageTypes";
import type { ContactPageResponse } from "./types/contactPageTypes";
import type { GetPropertyByIdResponse } from "./types/GetPropertyByIdResponse";
import type { GetJobByIdResponse, JobsApiResponse } from "./types/jobListTypes";
import type { PropertyLocationResponse } from "./types/PropertyLocationTypes";
import type { PropertiesTypeResponse } from "./types/propertyTypes";
import type { GetUserResponse } from "./types/UserProfileTypes";
import type { VirtualTourResponse } from "./types/virtualTourPageTypes";

// Homepage data with type annotation
export const getUser = async (): Promise<GetUserResponse> => {
  const response = await apiClient.get("/user-profile");
  return response.data;
};

//About Page Data
export const fetchAboutPageData = async (): Promise<AboutPageResponse> => {
  const response = await apiClient.get("/about-page");
  return response.data;
};
//Contact Page Data
export const fetchContactPageData = async (): Promise<ContactPageResponse> => {
  const response = await apiClient.get("/contact-page");
  return response.data;
};
//Virtual tour Page Data
export const fetchVirtualTourPageData =
  async (): Promise<VirtualTourResponse> => {
    const response = await apiClient.get("/virtual-tour");
    return response.data;
  };
//Properties Page Data
// export const fetchPropertiesPageData = async (
//   page: number
// ): Promise<PropertiesResponse> => {
//   const response = await apiClient.get(`/properties-page?page=${page}`);
//   return response.data;
// };
//Get Properties by ID Data
export const getPropertyByID = async (
  id: number | string
): Promise<GetPropertyByIdResponse> => {
  const response = await apiClient.get(`/property/${id}`);
  return response.data;
};
//jobList Page Data
export const fetchJobsPageData = async (): Promise<JobsApiResponse> => {
  const response = await apiClient.get("/jobs-page");
  return response.data;
};
//Get Job by ID Data
export const getJobByID = async (
  id: number | string
): Promise<GetJobByIdResponse> => {
  const response = await apiClient.get(`/job/${id}`);
  return response.data;
};

//Get all Property Locations Data
export const getAllPropertyLocations =
  async (): Promise<PropertyLocationResponse> => {
    const response = await apiClient.get("/property-locations");
    return response.data;
  };
//Get all Property Type Data
export const getAllPropertyType = async (): Promise<PropertiesTypeResponse> => {
  const response = await apiClient.get("/properties-type");
  return response.data;
};
