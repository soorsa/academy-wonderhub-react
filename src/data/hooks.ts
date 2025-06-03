import { useQuery } from "@tanstack/react-query";
import {
  fetchAboutPageData,
  fetchContactPageData,
  fetchJobsPageData,
  fetchVirtualTourPageData,
  getAllPropertyLocations,
  getAllPropertyType,
  getJobByID,
  getPropertyByID,
  getUser,
} from "./api";
import type { AboutPageResponse } from "./types/aboutPageTypes";
import type { ContactPageResponse } from "./types/contactPageTypes";
import type { VirtualTourResponse } from "./types/virtualTourPageTypes";
import type { GetPropertyByIdResponse } from "./types/GetPropertyByIdResponse";
import type { GetJobByIdResponse, JobsApiResponse } from "./types/jobListTypes";
import type { PropertyLocationResponse } from "./types/PropertyLocationTypes";
import type { PropertiesTypeResponse } from "./types/propertyTypes";
import type { GetUserResponse } from "./types/UserProfileTypes";
// import { useUserStore } from "../zustand/UserStore";

// Query hook for homepage data with
export const useGetUser = () => {
  // const { getUser } = useUserStore();
  return useQuery<GetUserResponse>({
    queryKey: ["user-profile"],
    queryFn: getUser,
  });
};

// Query hook for aboutpage data with
export const useAboutpage = () => {
  return useQuery<AboutPageResponse>({
    queryKey: ["about-page"],
    queryFn: fetchAboutPageData,
  });
};
// Query hook for contactpage data with
export const useContactpage = () => {
  return useQuery<ContactPageResponse>({
    queryKey: ["contact-page"],
    queryFn: fetchContactPageData,
  });
};
// Query hook for virtual-tour page data with
export const useVirtualTourpage = () => {
  return useQuery<VirtualTourResponse>({
    queryKey: ["virtual-tour-page"],
    queryFn: fetchVirtualTourPageData,
  });
};
// Query hook for properties page data with
// export const usePropertiespage = (page: number) => {
//   return useQuery<PropertiesResponse>({
//     queryKey: ["properties-page", page],
//     queryFn: () => fetchPropertiesPageData(page),
//   });
// };

// Query hook for properties page data with
export const useGetPropertyByID = (id: number | string) => {
  return useQuery<GetPropertyByIdResponse>({
    queryKey: ["property", id], // include id in the key to avoid collisions
    queryFn: () => getPropertyByID(id),
    enabled: !!id, // prevents the query from running if id is undefined/null
  });
};
// Query hook for properties page data with
export const useJobListPage = () => {
  return useQuery<JobsApiResponse>({
    queryKey: ["jobs-page"],
    queryFn: fetchJobsPageData,
  });
};
// Query hook for Jobs by ID data with
export const useGetJobByID = (id: number | string) => {
  return useQuery<GetJobByIdResponse>({
    queryKey: ["job", id], // include id in the key to avoid collisions
    queryFn: () => getJobByID(id),
    enabled: !!id, // prevents the query from running if id is undefined/null
  });
};
// Query hook for properties Locations data with
export const useGetAllPropertyLocations = () => {
  return useQuery<PropertyLocationResponse>({
    queryKey: ["property-locations"],
    queryFn: () => getAllPropertyLocations(),
  });
};
// Query hook for properties types data with
export const useGetAllPropertyTypes = () => {
  return useQuery<PropertiesTypeResponse>({
    queryKey: ["property-types"],
    queryFn: getAllPropertyType,
  });
};
