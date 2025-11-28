import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginations = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          />
        </PaginationItem>

        {/* Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i + 1}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis */}
        {totalPages > 5 && <PaginationEllipsis />}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginations;
