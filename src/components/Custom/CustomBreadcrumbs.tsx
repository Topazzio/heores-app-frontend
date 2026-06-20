import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5 ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/" className="transition-colors hover:text-foreground">
            Inicioooo
          </Link>
        </BreadcrumbItem>

{breadcrumbs.map((crumb) => (
  <BreadcrumbItem key={crumb.to} className="flex items-center">
    <BreadcrumbSeparator />
    <Link
      to={crumb.to}
      className="transition-colors hover:text-foreground"
    >
      {crumb.label}
    </Link>
  </BreadcrumbItem>
))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
