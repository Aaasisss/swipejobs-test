export interface JobProps {
  jobId: string;
  jobTitle: JobTitleProps;
  company: CompanyProps;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: ShiftsProps[];
  branch: string;
  branchPhoneNumber: string;
  requirements: string[];
}

export interface JobTitleProps {
  name: string;
  imageUrl: string;
}

export interface CompanyProps {
  name: string;
  address: AddressProps;
  reportTo: ReportToProps;
}

export interface AddressProps {
  formattedAddress: string;
  zoneId: string;
}

export interface ReportToProps {
  name: string;
  phone: string;
}

export interface ShiftsProps {
  startDate: string;
  endDate: string;
}
