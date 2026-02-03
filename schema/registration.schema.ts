import * as z from "zod";

export const formSchema = z
  .object({
    // Personal Details
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phoneNumber: z.string().min(5, { message: "Please enter a valid phone number" }),

    // Professional Background
    organization: z.string().min(2, { message: "Organization name is required" }),
    jobTitle: z.string().min(2, { message: "Job title is required" }),
    country: z.string().min(1, { message: "Please select a country" }),

    // Registrant Category
    category: z
      .enum(["inv", "gov", "dip", "med", "aca", "con", "oth"], {
        message: "Please select your category",
      })
      .optional(),
    sectorInterest: z.string().optional(),
    otherCategory: z.string().optional(),

    // Existing Company
    hasExistingCompany: z.boolean().default(false),
    companyName: z.string().optional(),
    companySector: z.string().optional(),
    businessLicense: z
      .instanceof(File)
      .optional()
      .refine((file) => !file || file.size <= 5 * 1024 * 1024, {
        message: "File size must be less than 5MB",
      })
      .refine(
        (file) =>
          !file ||
          ["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(file.type),
        {
          message: "File must be PDF, JPG, or PNG",
        }
      ),

    // Attendance Details
    attendance: z
      .union([
        z.enum(["day1", "day2", "both"], {
          message: "Please select attendance day(s)",
        }),
        z.literal(""),
      ])
      .optional(),
    needsVisa: z.enum(["yes", "no"], {
      message: "Please specify if you need visa assistance",
    }),
    siteVisit: z.enum(["yes", "no"], {
      message: "Please specify if you need site visit assistance",
    }),
    passportCopy: z
      .instanceof(File)
      .optional()
      .refine((file) => !file || file.size <= 5 * 1024 * 1024, {
        message: "File size must be less than 5MB",
      })
      .refine(
        (file) =>
          !file ||
          ["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(file.type),
        {
          message: "File must be PDF, JPG, or PNG",
        }
      ),

    // Additional Information
    specialRequirements: z.string().optional(),

    // Communication Preference
    communicationPreference: z.enum(["email", "phone", "both"], {
      message: "Please select communication preference",
    }),
  })
  .refine((data) => {
    if (data.category && ["inv"].includes(data.category)) {
      return !!data.sectorInterest && data.sectorInterest.length > 0;
    }
    return true;
  }, {
    message: "Sector interest is required for investors",
    path: ["sectorInterest"],
  })
  .refine((data) => {
    if (data.category === "oth") {
      return !!data.otherCategory && data.otherCategory.trim().length > 0;
    }
    return true;
  }, {
    message: "Please specify your category",
    path: ["otherCategory"],
  })
  .refine((data) => {
    if (data.hasExistingCompany) {
      return !!data.companyName && data.companyName.length > 0;
    }
    return true;
  }, {
    message: "Company name is required when you have an existing company",
    path: ["companyName"],
  })
  .refine((data) => {
    if (data.needsVisa === "yes") {
      return !!data.passportCopy;
    }
    return true;
  }, {
    message: "Passport copy is required when requesting visa assistance",
    path: ["passportCopy"],
  });

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  organization: "",
  jobTitle: "",
  country: "",
  category: undefined,
  sectorInterest: "",
  otherCategory: "",
  hasExistingCompany: false,
  companyName: "",
  companySector: "",
  attendance: "",
  needsVisa: "no",
  siteVisit: "no",
  specialRequirements: "",
  communicationPreference: "email",
};
