import { ReactNode } from "react";

export interface ITextIcon {
  startAdornment?: ReactNode;
  title: string;
  endAdornment?: ReactNode;
}

export interface ITableHeadComponent extends ITextIcon {
  handleOpen(): void;
}

export interface ITableRow {
  id?: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status?: string;
  lastActiveDate?: string;
  accountBalance?: string;
  accountNumber?: string;
  profile?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  socials?: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education?: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

export interface IUserData {
  userData: ITableRow[];
}

export interface IStatusPill {
  status: string;
}

export interface IOptionsMenu {
  handleNavigate(): void;
  blacklistUser(): void;
  activateUser(): void;
}
