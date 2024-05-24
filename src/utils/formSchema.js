import { z } from "zod";

export const resourceSchema  = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  icon_url: z.string().min(1, { message: "Icon URL is required" }).url('Icon URL must be a valid URL'),
  link: z.string().min(1, { message: "Link is required" }).url('Link must be a valid URL'),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  tag: z.object({
    value: z.string(),
    label: z.string()
  }).refine((val) => val.value, { message: 'Tag is required' }),
});

